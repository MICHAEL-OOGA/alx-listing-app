// interfaces/index.ts

export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string; // optional
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}
