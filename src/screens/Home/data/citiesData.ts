export interface CityDataType {
    id: string;
    name: string;
    country: string;
    details?: Record<string, any>; 
  }

export const citiesData: CityDataType[] = [
    { id: '1', name: 'London', country: 'United Kingdom', details: {} },
    { id: '2', name: 'Paris', country: 'France', details: {} },
    { id: '3', name: 'New York', country: "United States of America", details: {} },
    { id: '4', name: 'Tokyo', country: 'Japan', details: {} },
    { id: '5', name: 'Milan', country: 'Italy', details: {} },
  ];