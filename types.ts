// FIX: Import ElementType from 'react' to resolve 'Cannot find namespace React' error.
import { ReactNode, ElementType } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface FeatureItem {
  title: string;
  description: string;
  // FIX: Use ElementType directly as it's now imported.
  icon: ElementType;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface BlogPost {
  id: number;
  status: string;
  date_created: string;
  blog_title: string;
  blog_summary: string;
  blog_content: string;
  blog_image: string;
  blog_tags: string[];
  blog_slug: string;
}