import { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle, 
  Trophy, 
  Clock 
} from 'lucide-react';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Sidebar } from '@/components/layout/Sidebar';
import { StatCard } from '@/components/dashboard/StatCard';
import { WelcomeBanner } from '@/components/dashboard/WelcomeBanner';
import { FileUpload } from '@/components/dashboard/FileUpload';
import { DocumentGrid } from '@/components/dashboard/DocumentGrid';
import { PerformanceChart } from '@/components/dashboard/PerformanceChart';
import { AssessmentCard } from '@/components/dashboard/AssessmentCard';
import { RecommendationCard } from '@/components/dashboard/RecommendationCard';
import { Document } from '@/types/document';

// Sample data
const sampleDocuments: Document[] = [
  {
    id: '1',
    name: 'Mathematics Basics.pdf',
    type: 'pdf',
    uploadedAt: '2 days ago',
    size: '2.4 MB'
  },
  {
    id: '2', 
    name: 'Physics Concepts.docx',
    type: 'docx',
    uploadedAt: '1 week ago',
    size: '1.8 MB'
  },
  {
    id: '3',
    name: 'Literature Notes.txt', 
    type: 'txt',
    uploadedAt: '3 days ago',
    size: '245 KB'
  }
];

const sampleAssessment = {
  id: '1',
  title: 'Mathematics Quiz - Algebra Basics',
  source: 'Mathematics Basics.pdf',
  questions: [
    {
      id: '1',
      text: 'Solve for x: 2x + 5 = 15',
      options: ['x = 5', 'x = 10', 'x = 7.5', 'x = 2.5']
    },
    {
      id: '2', 
      text: 'What is the slope of the line y = 3x + 2?',
      options: ['3', '2', '1', '0']
    }
  ],
  timeLimit: 15
};

const sampleRecommendations = [
  {
    id: '1',
    title: 'Focus on Calculus',
    description: 'Based on your recent assessment, we recommend spending more time on calculus concepts.',
    priority: 'high' as const,
    type: 'focus' as const
  },
  {
    id: '2',
    title: 'Optimal Study Time', 
    description: 'Your analytics show you\'re most productive between 6-9 PM. Schedule study sessions during this time.',
    priority: 'medium' as const,
    type: 'schedule' as const
  },
  {
    id: '3',
    title: 'New Resources',
    description: 'We\'ve found additional resources on geometry that match your learning style.',
    priority: 'low' as const,
    type: 'resource' as const
  }
];

const Index = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');
  const [documents, setDocuments] = useState(sampleDocuments);

  const handleFileUpload = (file: File) => {
    const extension = file.name.split('.').pop()?.toLowerCase();
    const validTypes: Array<'pdf' | 'doc' | 'txt' | 'docx'> = ['pdf', 'doc', 'txt', 'docx'];
    const fileType = (validTypes.includes(extension as any) ? extension : 'txt') as 'pdf' | 'doc' | 'txt' | 'docx';
    
    const newDoc: Document = {
      id: Date.now().toString(),
      name: file.name,
      type: fileType,
      uploadedAt: 'Just now',
      size: `${(file.size / 1024 / 1024).toFixed(1)} MB`
    };
    setDocuments(prev => [newDoc, ...prev]);
  };

  const handleContinueLearning = () => {
    console.log('Continuing learning journey...');
  };

  const handleAssessmentSubmit = (assessmentId: string, answers: Record<string, number>) => {
    console.log('Assessment submitted:', { assessmentId, answers });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header userName="John Student" userInitials="JS" />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar 
              activeItem={activeMenuItem}
              onItemClick={setActiveMenuItem}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Welcome Banner */}
            <WelcomeBanner 
              userName="John"
              onContinueLearning={handleContinueLearning}
            />

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                icon={BookOpen}
                title="Active Courses"
                value="12"
                description="Active Courses"
              />
              <StatCard
                icon={CheckCircle}
                title="Completion Rate"
                value="78%"
                description="Completion Rate"
                gradient="success"
              />
              <StatCard
                icon={Trophy}
                title="Achievements"
                value="24"
                description="Achievements"
                gradient="accent"
              />
              <StatCard
                icon={Clock}
                title="Study Time"
                value="36h"
                description="Study Time"
                gradient="primary"
              />
            </div>

            {/* File Upload & Documents */}
            <FileUpload onFileUpload={handleFileUpload} />
            
            <div className="learning-card">
              <h3 className="text-xl font-semibold mb-6">Recent Documents</h3>
              <DocumentGrid documents={documents} />
            </div>

            {/* Performance Chart */}
            <PerformanceChart />

            {/* Assessment */}
            <div className="learning-card">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Generated Assessments</h3>
                  <p className="text-muted-foreground">Complete assessments to track your progress</p>
                </div>
              </div>
              <AssessmentCard 
                assessment={sampleAssessment}
                onSubmit={handleAssessmentSubmit}
              />
            </div>

            {/* Recommendations */}
            <div className="learning-card">
              <h3 className="text-xl font-semibold mb-6">Personalized Recommendations</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {sampleRecommendations.map((recommendation) => (
                  <RecommendationCard 
                    key={recommendation.id}
                    recommendation={recommendation}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
