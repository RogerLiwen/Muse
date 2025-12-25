
import React, { useState } from 'react';
import { MOCK_AD_VARIANTS, MOCK_IRB_FEEDBACK } from '../constants';
import { MessageSquare, Edit3, ShieldCheck, ChevronDown, ThumbsUp, ThumbsDown, Send } from 'lucide-react';
import { chatWithAssistant } from '../geminiService';

const ContentStudio: React.FC = () => {
  const [activeVariant, setActiveVariant] = useState(MOCK_AD_VARIANTS[0]);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user'|'assistant', text: string}[]>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user' as const, text: input };
    setMessages([...messages, userMsg]);
    setInput('');
    
    const response = await chatWithAssistant(messages, input);
    setMessages(prev => [...prev, { role: 'assistant', text: response || '...' }]);
  };

  return (
    <div className="h-[calc(100vh-2rem)] flex">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col p-6 overflow-y-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <span>[muse-preview] Middle-Aged Women</span>
            <span>&gt;</span>
            <span>Content studio</span>
            <span>&gt;</span>
            <span className="text-gray-900 font-medium">Digital Advertisements</span>
          </div>
          
          <div className="flex justify-center space-x-4 mb-8">
             {MOCK_AD_VARIANTS.map(v => (
               <button 
                 key={v.id}
                 onClick={() => setActiveVariant(v)}
                 className={`px-4 py-1 text-sm font-medium rounded-full transition-colors ${
                    activeVariant.id === v.id ? 'bg-gray-900 text-white' : 'bg-white text-gray-500 hover:bg-gray-100'
                 }`}
               >
                 {v.label}
               </button>
             ))}
          </div>

          <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
             <div className="p-4 flex items-center space-x-3 border-b border-gray-50">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                   <img src="https://picsum.photos/40/40" alt="Avatar" />
                </div>
                <div>
                   <div className="flex items-center">
                     <span className="font-bold text-sm">Formation Bio</span>
                     <div className="ml-1 text-blue-500"><ShieldCheck size={14} /></div>
                   </div>
                   <p className="text-[10px] text-gray-400">Sponsored • 🌐</p>
                </div>
             </div>
             
             <div className="p-4">
               <p className="text-sm text-gray-800 mb-4">{activeVariant.body}</p>
               <div className="rounded-lg overflow-hidden border border-gray-100">
                  <img src={activeVariant.imageUrl} alt="Ad content" className="w-full object-cover h-64" />
                  <div className="p-4 bg-gray-50 flex justify-between items-center">
                     <div>
                        <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">WEBSITE.COM</p>
                        <h4 className="font-bold text-gray-900">{activeVariant.headline}</h4>
                        <p className="text-xs text-gray-500 line-clamp-1">{activeVariant.body}</p>
                     </div>
                     <button className="px-4 py-2 bg-gray-200 text-gray-900 text-xs font-bold rounded hover:bg-gray-300 transition-colors">
                        {activeVariant.callToAction}
                     </button>
                  </div>
               </div>
             </div>

             <div className="px-4 py-3 flex justify-between border-t border-gray-50 text-gray-500 text-xs">
                <div className="flex items-center space-x-2">
                   <div className="flex -space-x-1">
                      <div className="w-4 h-4 rounded-full bg-blue-500 border border-white"></div>
                      <div className="w-4 h-4 rounded-full bg-red-400 border border-white"></div>
                   </div>
                   <span>129</span>
                </div>
                <div className="flex space-x-4">
                   <span>12 Comments</span>
                   <span>8 Shares</span>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Right Tools Sidebar */}
      <div className="w-96 bg-gray-50 border-l border-gray-200 flex flex-col p-6 space-y-4 overflow-y-auto">
         <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow group" onClick={() => setChatOpen(!chatOpen)}>
            <div className="flex items-center space-x-3 mb-2">
               <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                  <MessageSquare size={18} />
               </div>
               <h3 className="font-bold text-sm">谈论内容 (Chat about content)</h3>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">与 AI 助手协作，通过对话调整或完善内容。</p>
            {chatOpen && (
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                 <div className="max-h-64 overflow-y-auto space-y-2 mb-2">
                    {messages.length === 0 && <p className="text-center text-[10px] text-gray-400">开始对话吧...</p>}
                    {messages.map((m, i) => (
                      <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                         <div className={`max-w-[80%] p-2 rounded-lg text-xs ${m.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
                           {m.text}
                         </div>
                      </div>
                    ))}
                 </div>
                 <div className="flex space-x-2">
                    <input 
                      type="text" 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="输入反馈..."
                      className="flex-1 bg-gray-50 border border-gray-200 rounded px-3 py-1.5 text-xs focus:ring-1 focus:ring-blue-500 outline-none" 
                    />
                    <button onClick={handleSendMessage} className="p-1.5 bg-blue-500 text-white rounded hover:bg-blue-600">
                       <Send size={14} />
                    </button>
                 </div>
              </div>
            )}
         </div>

         <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm group">
            <div className="flex items-center space-x-3 mb-2">
               <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <Edit3 size={18} />
               </div>
               <h3 className="font-bold text-sm">手动编辑 (Edit manually)</h3>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">通过手动更改直接修改内容以微调您的作品。</p>
         </div>

         <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
               <div className="flex items-center space-x-3">
                  <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                     <ShieldCheck size={18} />
                  </div>
                  <h3 className="font-bold text-sm">IRB 合规助手</h3>
               </div>
               <span className="text-[10px] bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded-full">Suggestions available</span>
            </div>

            <div className="space-y-6">
               {MOCK_IRB_FEEDBACK.map(fb => (
                 <div key={fb.id} className="space-y-2">
                    <h4 className="text-xs font-bold text-gray-800">重新表述 "{fb.target}"</h4>
                    <div className="space-y-1">
                       <div className="flex items-center space-x-1 text-[10px] text-purple-400">
                          <span>✦</span>
                          <span className="font-bold uppercase tracking-wider">Rationale</span>
                       </div>
                       <p className="text-[11px] text-gray-500 leading-relaxed">{fb.rationale}</p>
                    </div>
                    <div className="flex justify-end space-x-2 pt-2">
                       <button className="px-3 py-1 text-[10px] font-bold border border-gray-200 rounded hover:bg-gray-50">拒绝</button>
                       <button className="px-3 py-1 text-[10px] font-bold bg-blue-500 text-white rounded hover:bg-blue-600">接受</button>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default ContentStudio;
