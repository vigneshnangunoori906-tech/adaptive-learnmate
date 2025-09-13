export interface Document {
  id: string;
  name: string;
  type: 'pdf' | 'doc' | 'txt' | 'docx';
  uploadedAt: string;
  size?: string;
}