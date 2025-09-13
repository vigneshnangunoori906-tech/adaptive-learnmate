import { Brain } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Brain className="h-6 w-6" />
            <span className="text-lg font-bold">LearnSmart</span>
          </div>
          <p className="text-sm text-center md:text-right">
            © 2025 LearnSmart Adaptive Learning System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};