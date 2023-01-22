import { CheckedRoom } from '../Rooms';

export const getCheckedRoomById = (checkedRooms: Array<CheckedRoom>, id: number) =>
  checkedRooms.find((checkedRoom: CheckedRoom) => checkedRoom.id === id);
