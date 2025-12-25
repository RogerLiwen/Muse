
import React from 'react';
import { MOCK_OVERVIEW_RESEARCH } from '../constants';
import { Share2 } from 'lucide-react';

const Overview: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 px-6">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span>Home</span>
          <span>&gt;</span>
          <span className="text-gray-900">[muse-preview] 类风湿关节炎</span>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <Share2 size={16} />
          <span className="text-sm font-medium">分享</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h1 className="text-2xl font-bold mb-4">项目概览</h1>
            <p className="text-gray-600 leading-relaxed mb-4">
              类风湿关节炎 (RA) 是一种以关节炎症为特征的慢性自身免疫性疾病，可导致疼痛、肿胀和潜在的关节破坏。它主要影响女性，通常在 30 至 50 岁之间发病。
            </p>
            <p className="text-gray-600 leading-relaxed">
              研究材料突显了 RA 患者面临的挑战，包括尽管有可用治疗方法但仍存在持续的疼痛、疲劳和功能障碍。RA 治疗中未满足的需求包括开发能够实现完全缓解、个性化治疗方法并更好地预测治疗反应的疗法。当前的治疗通常具有显着的副作用，因此需要更安全、更有效的选择。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4">患者与疾病研究</h2>
            <p className="text-gray-600 mb-6">受类风湿关节炎影响的典型患者通常年龄在 30 至 50 岁之间，女性患病率较高。该病在发达国家更为常见，由于治疗费用和工作限制，具有显着的社会经济影响。</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MOCK_OVERVIEW_RESEARCH.map((item, idx) => (
                <div key={idx} className="p-5 border border-blue-100 rounded-xl bg-white shadow-sm relative group">
                   <div className="absolute top-4 right-4 text-blue-400 opacity-50">✦</div>
                   <h3 className="font-semibold text-blue-900 mb-2">{item.title}</h3>
                   <p className="text-sm text-gray-600 mb-4">{item.content}</p>
                   <div className="pt-4 border-t border-gray-50">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">基本原理 (Rationale)</p>
                      <p className="text-xs text-gray-500">{item.rationale}</p>
                   </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-6">目标患者群体</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase mb-3">年龄</h4>
                <p className="text-sm font-medium text-gray-800">30-50 岁：发病高峰</p>
                <p className="text-sm text-gray-600 mt-1">≥65 岁：严重感染和恶性肿瘤风险更高</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase mb-3">性别</h4>
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="text-sm font-bold text-gray-800">75%</p>
                    <p className="text-xs text-gray-500">女性</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">25%</p>
                    <p className="text-xs text-gray-500">男性</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase mb-3">种族与民族</h4>
                <p className="text-sm text-gray-800">发达国家患病率较高</p>
                <p className="text-sm text-gray-600 mt-1">目前尚无特定民族因素</p>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
             <h3 className="font-bold mb-2">患者策略 (Patient Strategy)</h3>
             <p className="text-sm text-gray-500 mb-6">识别、完善和比较目标患者细分市场和推广方法。</p>
             <button className="w-full py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">查看策略 →</button>
          </div>

          <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
             <h3 className="font-bold mb-2">内容工作室 (Content Studio)</h3>
             <p className="text-sm text-gray-500 mb-6">编辑、评估和导出基于我们的研究和策略构建的招募材料。</p>
             <button className="w-full py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">进入工作室 →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
