
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  tags: string[];
  client?: string;
  date?: string;
  liveUrl?: string;
  dataAiHint: string;
}
