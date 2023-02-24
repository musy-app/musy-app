export interface Location {
  name?: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  geometry?: {
    latitude: number;
    longitude: number;
  };
}
