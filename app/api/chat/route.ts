import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { run } from 'node:test';
import { devNull } from 'os';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log("GOOGLE_GENERATION_AI_API_KEY", process.env.GOOGLE_GENERATION_AI_API_KEY);
    if (!process.env.GOOGLE_GENERATION_AI_API_KEY) {
      console.error('GOOGLE_GENERATION_AI_API_KEY is missing');
    }

    const result = await streamText({
      model: google('gemini-1.5-pro'),
      messages,
      system: `
        Sen "Luxoline Legal Assistant" adlı yapay zeka tabanlı bir hukuk araştırma asistanısın.
        Görevin, hukuk uzmanlarına, avukatlara ve hukuk öğrencilerine araştırmalarında yardımcı olmaktır.
        
        Prensiplerin:
        1. Uzman, profesyonel ve yardımcı bir ton kullan.
        2. Yanıtlarında yapılandırılmış bir format (listeler, başlıklar) kullan.
        3. Belirsiz durumlarda yasal riskleri ve profesyonel görüş ihtiyacını hatırlat.
        4. Güncel mevzuat ve içtihat bilgilerine (bilgi dahilinde) atıfta bulun.
        5. Her zaman Türkçe yanıt ver, ancak orijinal hukuki terimlerin (Latince vb.) parantez içinde kullanımına izin ver.
      `,
    });
    console.log("result", result.toDataStreamResponse());
    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(JSON.stringify({ error: 'An error occurred during chat generation.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
