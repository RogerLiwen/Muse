
import React from 'react';
import { MOCK_SEGMENTS } from '../constants';
import { MoreHorizontal, HelpCircle } from 'lucide-react';

const Strategy: React.FC = () => {
  return (
    <div className="max-w-full mx-auto py-8 px-6">
      <div className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          <span>Home</span>
          <span>&gt;</span>
          <span>[muse-preview] 类风湿关节炎</span>
          <span>&gt;</span>
          <span className="text-gray-900 font-medium">患者策略</span>
        </div>
        <h1 className="text-2xl font-bold flex items-center">
          <span className="text-blue-500 mr-2 text-xl">✦</span>
          AI 建议的患者细分市场 (Patient Segments)
        </h1>
      </div>

      <div className="flex overflow-x-auto pb-6 gap-6 scrollbar-hide">
        {MOCK_SEGMENTS.map((segment) => (
          <div key={segment.id} className="min-w-[400px] bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-sm font-semibold text-blue-500">{segment.title}</h2>
              <button className="p-1 hover:bg-gray-100 rounded"><MoreHorizontal size={16} /></button>
            </div>
            
            <h3 className="text-lg font-bold mb-4 leading-snug">{segment.title} 的患者群体</h3>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed line-clamp-4">
              {segment.description}
            </p>

            <div className="bg-gray-50 rounded-xl p-4 mb-8">
               <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">年龄范围</p>
                    <p className="text-sm font-medium">{segment.demographics.age}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">性别</p>
                    <p className="text-sm font-medium">{segment.demographics.gender}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">种族</p>
                    <p className="text-sm font-medium">{segment.demographics.race}</p>
                  </div>
               </div>
               <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">地点</p>
                    <p className="text-sm font-medium">{segment.demographics.location}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase">严重程度</p>
                      <p className="text-sm font-medium">{segment.demographics.severity}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase">持续时间</p>
                      <p className="text-sm font-medium">{segment.demographics.duration}</p>
                    </div>
                  </div>
               </div>
            </div>

            <div>
               <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xs font-bold text-gray-400 uppercase">患者推广方法</h4>
                  <HelpCircle size={14} className="text-gray-300" />
               </div>
               {segment.outreachApproaches.map((approach, i) => (
                 <div key={i} className="p-4 border border-gray-100 rounded-xl space-y-2">
                    <div className="flex justify-between items-center">
                       <h5 className="text-sm font-bold">{approach.title}</h5>
                       <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded uppercase">{approach.priority}</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{approach.description}</p>
                 </div>
               ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Strategy;
