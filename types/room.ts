export interface Room {
  id: number;
  name: string;
  price: number;
  image: string;
  gallery: string[];
  description: string;
  beds: string[];
  capacity: number;
  bathroom: boolean;
  androidTv: boolean;
  wifi: boolean;
  hotWater: boolean;
}