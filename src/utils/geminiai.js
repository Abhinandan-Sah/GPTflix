import { GoogleGenerativeAI } from "@google/generative-ai";

// const geminiai = new GoogleGenerativeAI({
//   apiKey: process.env.REACT_APP_GEMINI_GPT_KEY, 
//   dangerouslyAllowBrowser: true,
// });
const geminiai = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_GPT_KEY);

export default geminiai;