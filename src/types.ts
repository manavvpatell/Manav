export interface PortfolioItem {
  id: string;
  title: string;
  category: "3D Art" | "UI/UX" | "Concept Art" | "Branding" | "Product Videos";
  imageUrl: string;
  description: string;
  studio?: string;
  tools: string[];
  specs?: {
    polycount?: string;
    textures?: string;
    duration?: string;
    resolution?: string;
  };
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  fullDetails: string;
  iconName: string;
  projectsCompleted: number;
  featuredWorkUrl: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  projectType: string;
  budgetRange: string;
  message: string;
  createdAt: string;
}
