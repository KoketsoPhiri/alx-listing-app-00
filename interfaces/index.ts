// interfaces/index.ts
export interface CardProps {
  title: string;
  description: string;
  // Add other properties for a card, e.g., imageUrl, price, etc.
}

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string; // Optional for additional Tailwind classes
  // Add other button properties like type, disabled, etc.
}

// Add other interfaces as needed for your project