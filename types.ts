
export enum GraduationType {
  DAN_1 = "1º DAN (Sho Dan)",
  DAN_2 = "2º DAN (Ni Dan)",
  DAN_3 = "3º DAN (San Dan)",
  DAN_4 = "4º DAN (Yon Dan)",
  DAN_5 = "5º DAN (Go Dan)"
}

export interface TechniqueStep {
  title: string;
  description: string;
  image: string;
}

export interface Technique {
  id: string;
  name: string;
  japaneseName: string;
  category: "Nage-waza" | "Katame-waza" | "Kata" | "Atemi-waza";
  steps: TechniqueStep[];
  description: string;
}

export interface TheoryQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface GraduationRequirements {
  minAge: number;
  intersticio: string;
  practicalContent: string[];
  theoreticalContent: string[];
}
