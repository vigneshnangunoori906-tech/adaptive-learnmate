import { useState, useCallback } from 'react';
import { Upload, File, FileText, FileImage } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

export const FileUpload = ({ onFileUpload }: FileUploadProps) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const { toast } = useToast();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileProcess(files[0]);
    }
  }, []);

  const handleFileProcess = (file: File) => {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
    const maxSize = 20 * 1024 * 1024; // 20MB

    if (!allowedTypes.includes(file.type)) {
      toast({
        variant: "destructive",
        title: "Unsupported file format",
        description: "Please upload PDF, DOC, DOCX, or TXT files only."
      });
      return;
    }

    if (file.size > maxSize) {
      toast({
        variant: "destructive", 
        title: "File too large",
        description: "Maximum file size is 20MB."
      });
      return;
    }

    onFileUpload(file);
    toast({
      title: "File uploaded successfully",
      description: `"${file.name}" has been processed and added to your documents.`
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileProcess(files[0]);
    }
  };

  return (
    <div className="learning-card">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Upload Learning Materials</h3>
        <p className="text-muted-foreground">Add documents to generate personalized assessments and recommendations</p>
      </div>
      
      <div 
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-smooth cursor-pointer
          ${isDragOver ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-input')?.click()}
      >
        <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h4 className="text-lg font-medium mb-2">Drag & Drop your files here</h4>
        <p className="text-muted-foreground mb-4">
          Supported formats: PDF, DOC, DOCX, TXT (Max file size: 20MB)
        </p>
        <Button variant="learning">Browse Files</Button>
        <input
          id="file-input"
          type="file"
          className="hidden"
          accept=".pdf,.doc,.docx,.txt"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};