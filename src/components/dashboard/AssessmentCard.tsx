import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, FileText } from 'lucide-react';

interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer?: number;
}

interface Assessment {
  id: string;
  title: string;
  source: string;
  questions: Question[];
  timeLimit?: number;
  completed?: boolean;
}

interface AssessmentCardProps {
  assessment: Assessment;
  onSubmit?: (assessmentId: string, answers: Record<string, number>) => void;
}

export const AssessmentCard = ({ assessment, onSubmit }: AssessmentCardProps) => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(assessment.completed || false);

  const handleAnswerChange = (questionId: string, optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(assessment.id, answers);
    }
    setSubmitted(true);
  };

  const isComplete = Object.keys(answers).length === assessment.questions.length;

  return (
    <div className="learning-card">
      <div className="flex items-start gap-4 mb-6">
        <div className="gradient-primary p-3 rounded-lg">
          <FileText className="h-6 w-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1">{assessment.title}</h3>
          <p className="text-sm text-muted-foreground">Generated from: {assessment.source}</p>
          {assessment.timeLimit && (
            <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>{assessment.timeLimit} minutes</span>
            </div>
          )}
        </div>
        {submitted && (
          <div className="flex items-center gap-1 text-success">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm font-medium">Completed</span>
          </div>
        )}
      </div>

      {!submitted ? (
        <div className="space-y-6">
          {assessment.questions.map((question, questionIndex) => (
            <div key={question.id} className="space-y-3">
              <h4 className="font-medium">
                {questionIndex + 1}. {question.text}
              </h4>
              <div className="space-y-2">
                {question.options.map((option, optionIndex) => (
                  <label
                    key={optionIndex}
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-accent/50 cursor-pointer transition-smooth"
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={optionIndex}
                      checked={answers[question.id] === optionIndex}
                      onChange={() => handleAnswerChange(question.id, optionIndex)}
                      className="text-primary"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          
          <div className="pt-4 border-t">
            <Button 
              variant="learning" 
              onClick={handleSubmit}
              disabled={!isComplete}
              className="w-full"
            >
              Submit Assessment
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
          <h4 className="text-lg font-medium mb-2">Assessment Completed!</h4>
          <p className="text-muted-foreground">Your responses have been recorded and analyzed.</p>
        </div>
      )}
    </div>
  );
};