import { Room } from '../Rooms';

export const sortedRoomsByPrice = (rooms: Array<Room>) =>
  rooms.sort((roomA, roomB) => roomA.price.value - roomB.price.value);
