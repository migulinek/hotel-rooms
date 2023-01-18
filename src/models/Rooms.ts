export interface Rooms {
  rooms: Array<Room>;
}
export interface CheckedRooms {
  checkedRooms: Array<CheckedRoom>;
}
export interface Room {
  id: number;
  name: string;
  price: Price;
}
export interface CheckedRoom {
  id: number;
  availabilityStatus?: AvailabilityStatus;
  price?: Price;
}
export interface Price {
  value: number;
  currencyCode: string;
}
export type AvailabilityStatus = 'onRequest' | 'available' | 'soldOut' | 'error';
