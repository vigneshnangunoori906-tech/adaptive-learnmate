import { useState } from 'react';
import { 
  Home, 
  BookOpen, 
  ClipboardList, 
  BarChart3, 
  Lightbulb, 
  Settings,
  Brain 
} from 'lucide-react';

interface SidebarProps {
  activeItem?: string;
  onItemClick?: (item: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'courses', label: 'My Courses', icon: BookOpen },
  { id: 'assessments', label: 'Assessments', icon: ClipboardList },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'recommendations', label: 'Recommendations', icon: Lightbulb },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const Sidebar = ({ activeItem = 'dashboard', onItemClick }: SidebarProps) => {
  return (
    <aside className="learning-card h-fit">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b">
        <div className="gradient-primary p-2 rounded-lg">
          <Brain className="h-6 w-6 text-white" />
        </div>
        <h2 className="text-xl font-bold">Menu</h2>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onItemClick?.(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-smooth
                ${isActive 
                  ? 'gradient-primary text-white shadow-[var(--shadow-elegant)]' 
                  : 'hover:bg-accent/50 text-foreground'
                }`}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};