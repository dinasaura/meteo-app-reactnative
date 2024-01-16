export interface CityDataType {
    id: string;
    name: string;
    country: string;
    details: Record<string, any>; 
  }

export const citiesData: CityDataType[] = [
    { id: '1', name: 'Londra', country: 'Regno Unito', details: {} },
    { id: '2', name: 'Parigi', country: 'Francia', details: {} },
    { id: '3', name: 'New York', country: "Stati Uniti d'America", details: {} },
    { id: '4', name: 'Tokyo', country: 'Giappone', details: {} },
    { id: '5', name: 'Milano', country: 'Italia', details: {} },
  ];