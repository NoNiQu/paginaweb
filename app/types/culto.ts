export interface Culto {
  id: string;
  title: string;
  date: Date;
  teaser: string;
  description?: string;
  horarios?: string[];
  recorrido?: string[];
}
