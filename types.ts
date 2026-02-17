
// Fix: Import React to provide the React namespace for ReactNode
import React from 'react';

export interface SuccessStory {
  id: string;
  role: string;
  client: string;
  challenge: string;
  result: string;
  category: 'Startup' | 'Fortune 500' | 'Scale-up';
  imageUrl: string;
}

export interface ApproachStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export type Theme = 'light' | 'dark';
