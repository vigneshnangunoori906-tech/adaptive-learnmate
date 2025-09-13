import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';

interface WelcomeBannerProps {
  userName: string;
  onContinueLearning: () => void;
}

export const WelcomeBanner = ({ userName, onContinueLearning }: WelcomeBannerProps) => {
  return (
    <div className="learning-card gradient-primary text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-white/20 rounded-full">
            <GraduationCap className="h-8 w-8" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Welcome back, {userName}!</h2>
            <p className="text-white/90">You're making great progress in your learning journey.</p>
          </div>
        </div>
        <Button 
          variant="learning" 
          onClick={onContinueLearning}
          className="bg-white/20 hover:bg-white/30 text-white border-white/20"
        >
          Continue Learning
        </Button>
      </div>
    </div>
  );
};