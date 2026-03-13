"use client"

import { useState, useEffect } from "react"
import rawData from "../../data/aqi.json"
import { Brain } from "lucide-react"
import { Bar } from "react-chartjs-2"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { useStore } from "../../store/useStore"
import { useQuery } from "@tanstack/react-query"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function Dashboard() {

const search = useStore((state) => state.search)
const setSearch = useStore((state) => state.setSearch)

  const [loading, setLoading] = useState(true)

  const { data, isLoading } = useQuery({
  queryKey: ["aqiData"],
  queryFn: async () => {
    return rawData
  }
})

useEffect(() => {

  const timer = setTimeout(() => {
    setLoading(false)
  }, 1000)

  

  return () => clearTimeout(timer)

}, [])

  const filteredData = (data || []).filter((item:any) =>
  item.city.toLowerCase().includes(search.toLowerCase())
)
  const cityData:any = {}

filteredData.forEach((item:any) => {

  if(!cityData[item.city]){
    cityData[item.city] = []
  }

  cityData[item.city].push(Number(item.pollutant_avg))

})

const chartLabels = Object.keys(cityData).slice(0,10)

const chartValues = chartLabels.map(city => {

  const values = cityData[city]

  const avg =
    values.reduce((a:number,b:number)=>a+b,0) / values.length

  return avg

})

const chartData = {
  labels: chartLabels,

  datasets: [
    {
      label: "Average Pollution by City",
      data: chartValues,
      backgroundColor: "rgba(59,130,246,0.7)"
    }
  ]
}
const [question,setQuestion] = useState("")
const [answer,setAnswer] = useState("")
const handleAsk = async () => {

if (!question.trim()) return

setAnswer("Thinking...")

try {

const res = await fetch("/api/gemini", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
question,
data: filteredData.slice(0,50)
})
})

const result = await res.json()

setAnswer(result.answer)

} catch (error) {

setAnswer("Error contacting AI service.")

}

}

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-3xl font-bold mb-6">
        India Air Quality Monitoring Dashboard
      </h1>

      <p className="text-gray-400 mb-4">
Showing {filteredData.length} air quality records
</p>

<div className="grid md:grid-cols-3 gap-6 mb-10">

{/* Chart */}
<div className="bg-gray-900 p-6 rounded md:col-span-2">

<h2 className="text-xl mb-4">
Pollution Overview
</h2>

<div className="h-[300px]">

{loading ? (

<Skeleton height={300} />

) : (

<Bar
data={chartData}
options={{
responsive: true,
maintainAspectRatio: false,
scales: {
x: {
ticks: {
maxRotation: 45,
minRotation: 45
}
}
}
}}
/>

)}

</div>

</div>

{/* AI Insight */}
<div className="bg-gray-900 p-6 rounded">

<h2 className="flex items-center gap-2 text-lg mb-3">

<Brain className="text-blue-400" size={40} />

AI Insight

</h2>

<p className="text-gray-400 mb-3 text-sm">
Ask questions about air quality data.
</p>

<ul className="text-gray-400 text-sm list-disc ml-4">
<li>Which city has highest pollution?</li>
<li>Which pollutant is most common?</li>
<li>Show cities with highest PM2.5</li>
</ul>

<input
type="text"
placeholder="Ask AI about pollution data..."
className="mt-4 w-full p-3 bg-gray-800 rounded"
value={question}
onChange={(e)=>setQuestion(e.target.value)}
/>

<button
onClick={handleAsk}
className="mt-3 w-full bg-blue-600 p-2 rounded hover:bg-blue-700"
>
Ask AI
</button>
{answer && (
<p className="mt-3 text-green-400 text-sm">
{answer}
</p>
)}

</div>

</div>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search city..."
        className="mb-6 p-3 bg-gray-800 rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Data Table */}
      <div className="overflow-x-auto">

        <table className="w-full border border-gray-700 table-fixed">

          <thead className="bg-gray-800">
<tr>
<th className="p-3 text-left border-r border-gray-700">City</th>
<th className="p-3 text-left border-r border-gray-700">State</th>
<th className="p-3 text-left border-r border-gray-700">Pollutant</th>
<th className="p-3 text-left border-r border-gray-700">Min</th>
<th className="p-3 text-left border-r border-gray-700">Max</th>
<th className="p-3 text-left">Average</th>
</tr>
</thead>

          <tbody>

{loading ? (

Array.from({ length: 8 }).map((_, i) => (

<tr key={i} className="border-t border-gray-700">

<td className="p-3 border-r border-gray-700">
<Skeleton />
</td>

<td className="p-3 border-r border-gray-700">
<Skeleton />
</td>

<td className="p-3 border-r border-gray-700">
<Skeleton />
</td>

<td className="p-3 border-r border-gray-700">
<Skeleton />
</td>

<td className="p-3 border-r border-gray-700">
<Skeleton />
</td>

<td className="p-3">
<Skeleton />
</td>

</tr>

))

) : (

filteredData.slice(0, 200).map((item:any, index:number) => (

<tr key={index} className="border-t border-gray-700 hover:bg-gray-800 even:bg-gray-900">

<td className="p-3 border-r border-gray-700">
{item.city}
</td>

<td className="p-3 border-r border-gray-700">
{item.state}
</td>

<td className="p-3 border-r border-gray-700">
{item.pollutant_id}
</td>

<td className="p-3 border-r border-gray-700">
{item.pollutant_min}
</td>

<td className="p-3 border-r border-gray-700">
{item.pollutant_max}
</td>

<td className="p-3">
<span
className={
item.pollutant_avg > 150
? "text-red-500"
: item.pollutant_avg > 80
? "text-yellow-400"
: "text-green-400"
}
>
{item.pollutant_avg}
</span>
</td>

</tr>

))

)}

</tbody>



        </table>

      </div>

      

    </main>
  )
}