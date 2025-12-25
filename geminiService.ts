
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getGeminiFeedback = async (content: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `作为伦理审查委员会 (IRB) 的验证助手，请审查以下招募内容并给出修改建议。
      内容: "${content}"
      规则：不要过度承诺，不要暗示必然成功，不要过度强调经济激励。
      
      返回JSON格式：
      {
        "rationale": "为什么需要修改",
        "suggestion": "具体的修改建议"
      }`,
      config: {
        responseMimeType: "application/json",
      }
    });
    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};

export const chatWithAssistant = async (history: any[], message: string) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: '你是 MUSE 系统的 AI 招募内容助手。你精通临床试验招募、IRB 合规和内容优化。你的任务是协助用户优化其招募材料。',
      },
    });
    
    // Simplification for the demo: history mapping
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "抱歉，我现在无法处理您的请求。";
  }
};
