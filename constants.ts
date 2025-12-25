
import { PatientSegment, AdVariant, IRBFeedback, ResearchInsight } from './types';

export const MOCK_OVERVIEW_RESEARCH: ResearchInsight[] = [
  {
    title: "额外的研究机会",
    content: "研究类风湿关节炎在不同人口统计数据中的症状变异性，以识别未被充分认识的症状和新的风险因素。",
    rationale: "了解症状的变异性可以引导更个性化的治疗方法，并通过解决不同人群的具体需求来提高生活质量。"
  },
  {
    title: "额外的研究机会",
    content: "探索类风湿关节炎患者在获取护理和管理类风湿关节炎方面面临的社会文化挑战，重点关注多样化和研究不足的人群。",
    rationale: "这项研究可以突出护理和支持的障碍，从而改善准入并量身定制考虑到文化和社会经济因素的干预措施。"
  }
];

export const MOCK_SEGMENTS: PatientSegment[] = [
  {
    id: '1',
    title: '面临保险和资金问题的患者',
    description: '这一细分市场针对的是正在寻求有关治疗方案和费用的简单信息、并对医疗保健成本感到担忧的个人。',
    demographics: {
      age: '任何年龄',
      gender: '任何性别',
      race: '任何种族',
      location: '任何地点',
      severity: '轻度至重度',
      duration: '任何'
    },
    outreachApproaches: [
      {
        title: '保险导航支持',
        description: '旨在帮助类风湿关节炎患者驾驭保险和资金挑战，特别是关于药物覆盖范围的变化。',
        priority: 'High'
      }
    ]
  },
  {
    id: '2',
    title: '中老年女性',
    description: '该细分市场针对 30-50 岁的女性，这是 RA 发病的高峰年龄范围。',
    demographics: {
      age: '30-50',
      gender: '女性',
      race: '任何种族',
      location: '任何地点',
      severity: '中度至重度',
      duration: '多年'
    },
    outreachApproaches: [
      {
        title: '移情驱动的虚拟支持小组',
        description: '为 RA 患者举办在线支持小组，解决未满足的需求，如睡眠障碍、生活质量影响等。',
        priority: 'High'
      }
    ]
  },
  {
    id: '3',
    title: '有工作限制的成年人',
    description: '针对由于类风湿关节炎而在工作中面临持续疼痛和限制的成年人。',
    demographics: {
      age: '18-65',
      gender: '任何性别',
      race: '任何种族',
      location: '任何地点',
      severity: '中等偏重',
      duration: '多年'
    },
    outreachApproaches: [
      {
        title: '针对性数字广告宣传',
        description: '利用个性化数字广告接触那些努力维持因病而受影响职业生涯的 RA 患者。',
        priority: 'High'
      }
    ]
  }
];

export const MOCK_AD_VARIANTS: AdVariant[] = [
  {
    id: 'v1',
    label: 'Variant 1',
    headline: 'Treat Your RA Today!',
    body: 'Join a study dedicated to advancing treatments for women with rheumatoid arthritis. Step towards a healthier life today!',
    imageUrl: 'https://picsum.photos/seed/med1/600/400',
    callToAction: 'Apply Now'
  },
  {
    id: 'v2',
    label: 'Variant 2',
    headline: 'New RA Research Study',
    body: 'We are seeking participants for a breakthrough clinical trial in rheumatoid arthritis. Find out if you qualify.',
    imageUrl: 'https://picsum.photos/seed/med2/600/400',
    callToAction: 'Learn More'
  }
];

export const MOCK_IRB_FEEDBACK: IRBFeedback[] = [
  {
    id: 'f1',
    target: 'Treat Your RA Today!',
    rationale: '该短语暗示了利益的确定性，根据 IRB 指南，这是误导性的。',
    suggestion: '改为 "Explore RA Study Options Today!"'
  },
  {
    id: 'f2',
    target: 'Step towards a healthier life today!',
    rationale: '该短语暗示了保证的积极结果，应予以中性化处理以符合 IRB 指南。',
    suggestion: '改为 "Join us in advancing RA research."'
  }
];
