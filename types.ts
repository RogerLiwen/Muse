
export type AppView = 'overview' | 'strategy' | 'content-studio';

export interface PatientSegment {
  id: string;
  title: string;
  description: string;
  demographics: {
    age: string;
    gender: string;
    race: string;
    location: string;
    severity: string;
    duration: string;
  };
  outreachApproaches: Array<{
    title: string;
    description: string;
    priority: 'High' | 'Medium' | 'Low';
  }>;
}

export interface AdVariant {
  id: string;
  label: string;
  headline: string;
  body: string;
  imageUrl: string;
  callToAction: string;
}

export interface IRBFeedback {
  id: string;
  target: string;
  rationale: string;
  suggestion: string;
}

export interface ResearchInsight {
  title: string;
  content: string;
  rationale: string;
}
