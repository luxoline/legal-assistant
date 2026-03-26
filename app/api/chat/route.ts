import { streamText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

// 1. Anahtarı her türlü boşluk ve tırnaktan arındırıyoruz
const rawKey = process.env.GOOGLE_GENERATION_AI_API_KEY || '';
const apiKey = rawKey.replace(/['"]+/g, '').trim();

// 2. Sadece Vercel AI SDK kullanıyoruz (Google'ın kendi SDK'sını sildik)
const google = createGoogleGenerativeAI({
  apiKey: apiKey,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // 3. streamText ile temiz bir bağlantı kuruyoruz
    const result = await streamText({
      model: google('gemini-1.5-flash'),
      messages: messages,
      system: `Sen "Luxoline Legal Assistant" adlı yapay zeka tabanlı bir hukuk araştırma asistanısın. Görevin, hukuk uzmanlarına, avukatlara ve hukuk öğrencilerine araştırmalarında yardımcı olmaktır. Profesyonel ve uzman bir dil kullan.`,
    });
    console.log(result.toDataStreamResponse())
    // 4. Ön yüzün (useChat) beklediği doğru formatta stream (akış) dönüyoruz
    return result.toDataStreamResponse();

  } catch (error: any) {
    console.error("API HATASI:", error);
    return new Response(JSON.stringify({ error: error.message || "Bilinmeyen hata" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
