export default function Features() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">

      <div className="bg-gray-900 p-6 rounded">
        <h3 className="text-xl font-semibold mb-2">
          AI Insights
        </h3>
        <p className="text-gray-400">
          Generate insights using Gemini AI.
        </p>
      </div>

      <div className="bg-gray-900 p-6 rounded">
        <h3 className="text-xl font-semibold mb-2">
          Large Data Dashboard
        </h3>
        <p className="text-gray-400">
          Analyze large datasets easily.
        </p>
      </div>

      <div className="bg-gray-900 p-6 rounded">
        <h3 className="text-xl font-semibold mb-2">
          Government Data
        </h3>
        <p className="text-gray-400">
          Explore datasets from data.gov.in
        </p>
      </div>

    </section>
  )
}