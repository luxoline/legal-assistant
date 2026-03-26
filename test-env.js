console.log('API KEY PRESENT:', !!process.env.GOOGLE_GENERATION_AI_API_KEY);
if (process.env.GOOGLE_GENERATION_AI_API_KEY) {
  console.log('API KEY START:', process.env.GOOGLE_GENERATION_AI_API_KEY.substring(0, 5) + '...');
} else {
  console.log('API KEY IS MISSING OR EMPTY');
}
