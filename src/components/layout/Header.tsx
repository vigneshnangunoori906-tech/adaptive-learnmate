import { Brain, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  userName?: string;
  userInitials?: string;
}

const navigation = [
  { label: 'Dashboard', href: '#', active: true },
  { label: 'Courses', href: '#' },
  { label: 'Assessments', href: '#' },
  { label: 'Resources', href: '#' },
];

export const Header = ({ userName = 'John Student', userInitials = 'JS' }: HeaderProps) => {
  return (
    <header className="gradient-primary text-white shadow-[var(--shadow-elegant)]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <Brain className="h-8 w-8" />
            </div>
            <h1 className="text-2xl font-bold">LearnSmart</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth
                  ${item.active 
                    ? 'bg-white/20 text-white' 
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* User Menu */}
          <div className="flex items-center gap-3">
            <div className="bg-success text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
              {userInitials}
            </div>
            <span className="hidden sm:block font-medium">{userName}</span>
          </div>
        </div>
      </div>
    </header>
  );
};