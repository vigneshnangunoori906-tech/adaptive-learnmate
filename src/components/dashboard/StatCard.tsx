import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  description: string;
  gradient?: 'primary' | 'success' | 'accent' | 'default';
}

export const StatCard = ({ icon: Icon, title, value, description, gradient = 'default' }: StatCardProps) => {
  const gradientClasses = {
    primary: 'gradient-primary',
    success: 'gradient-success', 
    accent: 'gradient-accent',
    default: 'bg-card'
  };

  return (
    <div className={`learning-card text-center ${gradientClasses[gradient] !== 'bg-card' ? gradientClasses[gradient] + ' text-white' : ''}`}>
      <div className="flex flex-col items-center space-y-3">
        <div className={`p-3 rounded-full ${gradientClasses[gradient] === 'bg-card' ? 'bg-primary/10' : 'bg-white/20'}`}>
          <Icon className={`h-6 w-6 ${gradientClasses[gradient] === 'bg-card' ? 'text-primary' : 'text-white'}`} />
        </div>
        <div className="space-y-1">
          <h3 className="text-2xl font-bold">{value}</h3>
          <p className={`text-sm font-medium ${gradientClasses[gradient] === 'bg-card' ? 'text-muted-foreground' : 'text-white/90'}`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};