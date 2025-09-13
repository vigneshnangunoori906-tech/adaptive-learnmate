import { FileText, FileImage, File } from 'lucide-react';
import { Document } from '@/types/document';

interface DocumentGridProps {
  documents: Document[];
}

const getFileIcon = (type: string) => {
  switch (type) {
    case 'pdf':
      return FileText;
    case 'doc':
    case 'docx':
      return FileImage;
    default:
      return File;
  }
};

const getFileColor = (type: string) => {
  switch (type) {
    case 'pdf':
      return 'text-red-500';
    case 'doc':
    case 'docx':
      return 'text-blue-500';
    default:
      return 'text-gray-500';
  }
};

export const DocumentGrid = ({ documents }: DocumentGridProps) => {
  if (documents.length === 0) {
    return (
      <div className="text-center py-8">
        <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-medium mb-2">No documents uploaded yet</h3>
        <p className="text-muted-foreground">Upload your first document to get started with personalized learning</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {documents.map((doc) => {
        const Icon = getFileIcon(doc.type);
        return (
          <div key={doc.id} className="learning-card cursor-pointer group">
            <div className="flex flex-col items-center space-y-3">
              <div className="gradient-primary p-6 rounded-lg group-hover:shadow-glow transition-smooth">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-center space-y-1">
                <h4 className="font-medium text-sm line-clamp-2">{doc.name}</h4>
                <p className="text-xs text-muted-foreground">
                  Uploaded {doc.uploadedAt}
                </p>
                {doc.size && (
                  <p className="text-xs text-muted-foreground">{doc.size}</p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};