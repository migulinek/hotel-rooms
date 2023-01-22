import { Availability, CheckedRoom } from '../Rooms';
import { getCheckedRoomById } from './getCheckedRoomById';

export const isRoomAvaliable = (checkedRooms: Array<CheckedRoom>, id: number): boolean => {
  return getCheckedRoomById(checkedRooms, id)?.availabilityStatus === Availability.Available;
};
