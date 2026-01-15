
export enum PropertyType {
  RESIDENTIAL = 'Residential',
  COMMERCIAL = 'Commercial',
  LAND = 'Land/Lot',
  RENTAL = 'Rental'
}

export enum ListingStatus {
  ACTIVE = 'Active',
  PENDING = 'Pending',
  SOLD = 'Sold'
}

export interface RelocationRequest {
  currentCity: string;
  movingTo: string;
  timeframe: string;
  preferences: string;
}

export interface PropertyInquiry {
  name: string;
  email: string;
  phone: string;
  propertyId?: string;
  message: string;
}
