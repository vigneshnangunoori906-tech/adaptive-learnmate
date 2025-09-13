import { LucideIcon, AlertTriangle, Clock, Book, Lightbulb } from 'lucide-react';

interface Recommendation {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  type: 'focus' | 'schedule' | 'resource' | 'general';
}

interface RecommendationCardProps {
  recommendation: Recommendation;
}

const getPriorityStyles = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'bg-warning text-white';
    case 'medium':
      return 'bg-orange-500 text-white';
    case 'low':
      return 'bg-success text-white';
    default:
      return 'bg-primary text-white';
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'focus':
      return AlertTriangle;
    case 'schedule':
      return Clock;
    case 'resource':
      return Book;
    default:
      return Lightbulb;
  }
};

export const RecommendationCard = ({ recommendation }: RecommendationCardProps) => {
  const Icon = getTypeIcon(recommendation.type);
  const priorityStyles = getPriorityStyles(recommendation.priority);

  return (
    <div className="learning-card">
      <div className="flex gap-4">
        <div className={`p-3 rounded-full flex-shrink-0 ${priorityStyles}`}>
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-start justify-between">
            <h4 className="font-semibold text-base">{recommendation.title}</h4>
            <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize
              ${recommendation.priority === 'high' ? 'bg-warning/10 text-warning' : 
                recommendation.priority === 'medium' ? 'bg-orange-100 text-orange-600' : 
                'bg-success/10 text-success'}`}>
              {recommendation.priority}
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {recommendation.description}
          </p>
        </div>
      </div>
    </div>
  );
};