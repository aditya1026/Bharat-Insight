"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { supabase } from "../lib/supabase"

export default function Home() {
  async function login() {
  await supabase.auth.signInWithOAuth({
    provider: "google",
  })
}
  return (

    <main className="min-h-screen text-white bg-gradient-to-b from-black via-slate-950 to-black">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800">

        <div className="flex items-center gap-3">

<Image
src="/logo6.png"
alt="Bharat Insight Logo"
width={36}
height={36}
/>


<div className="leading-tight">

<h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
Bharat Insight
</h1>

<p className="text-xs text-gray-400">
Environmental AI Analytics
</p>

</div>

</div>

        <a
          href="/dashboard"
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Dashboard
        </a>

      </nav>


      {/* HERO SECTION */}
      
      <button
  onClick={login}
  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
>
  Login with Google
</button>
      
      <motion.section
      
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="relative text-center py-32 px-6 overflow-hidden"
>
  

{/* Animated Background */}
<div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
<div className="absolute inset-0 -z-10">

<div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>

<div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>

</div>

{/* Glass Panel */}
<div className="max-w-4xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-12 shadow-2xl">

<h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">

AI Powered Analytics Platform

</h1>

<p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
Explore India's environmental data with interactive dashboards,
AI-driven insights and real-time visualization tools.
</p>

<div className="flex justify-center gap-6">

<a
href="/dashboard"
className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition shadow-lg"
>
Launch Dashboard
</a>

<a
href="#features"
className="px-8 py-3 border border-gray-700 rounded-lg hover:bg-gray-900 transition"
>
View Features
</a>

</div>

</div>

</motion.section>


      {/* FEATURES SECTION */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-12 text-center">
          Platform Features
        </h2>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
            className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition"
          >
            <h3 className="text-xl mb-2 font-semibold">
              AI Insights
            </h3>

            <p className="text-gray-400 text-sm">
              Ask questions about air quality data and get instant insights.
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
            className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition md:col-span-2"
          >
            <h3 className="text-xl mb-2 font-semibold">
              Interactive Data Dashboard
            </h3>

            <p className="text-gray-400 text-sm">
              Visualize pollution levels across Indian cities using charts
              and searchable datasets.
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
            className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition"
          >
            <h3 className="text-xl mb-2 font-semibold">
              Real Air Quality Data
            </h3>

            <p className="text-gray-400 text-sm">
              Uses real AQI monitoring data from environmental sources.
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
            className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition"
          >
            <h3 className="text-xl mb-2 font-semibold">
              Fast Search
            </h3>

            <p className="text-gray-400 text-sm">
              Quickly filter and explore pollution data across locations.
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
            className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition"
          >
            <h3 className="text-xl mb-2 font-semibold">
              Data Visualization
            </h3>

            <p className="text-gray-400 text-sm">
              Charts help identify pollution patterns and trends easily.
            </p>
          </motion.div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="text-center py-10 border-t border-gray-800 text-gray-500 text-sm">
        © 2026 Bharat Insight • AI Powered Environmental Analytics
      </footer>

    </main>
  )
}