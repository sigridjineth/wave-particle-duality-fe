export interface Scientist {
  id: number;
  year: number;
  name: string;
  theory: 'wave' | 'particle' | 'both';
  discovery: string;
  details: string;
  image: string;
}
