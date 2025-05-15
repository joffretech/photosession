
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
  dataAiHint: string; // e.g., "wedding photography", "corporate videography"
}

export interface ServicePackage {
  id: string;
  type: 'photo' | 'video' | 'digital'; // Added 'digital' type
  name: string;
  description: string;
  details: string[];
  price: string;
  imageUrl: string;
  dataAiHint: string; // e.g., "portrait session", "event video", "website design"
}
