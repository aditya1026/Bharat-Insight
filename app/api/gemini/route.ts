import { GoogleGenerativeAI } from "@google/generative-ai"

export async function POST(req: Request) {
  try {

    const { question, data } = await req.json()

    const apiKey = process.env["GEMINI_API_KEY"]
    console.log("Gemini key loaded:", !!apiKey)

    if (!apiKey) {
      return Response.json({
        answer: "Gemini API key not found"
      })
    }

    const genAI = new GoogleGenerativeAI(apiKey)

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    })

    const prompt = `
You are an environmental data analyst.

Analyze the following dataset and answer the question.

Dataset:
${JSON.stringify(data).slice(0,2000)}

Question:
${question}
`

    const result = await model.generateContent(prompt)

    const text = result.response.text()

    return Response.json({
      answer: text
    })

  } catch (error) {

    console.error("Gemini Error:", error)

    return Response.json({
      answer: "AI service temporarily unavailable."
    })
  }
}