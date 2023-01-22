import { CheckedRoom, Room } from '../Rooms';

export const logRoomBooking = (checkedRooms: Array<CheckedRoom>, room: Room) => {
  console.log(
    `${JSON.stringify(checkedRooms.find((checked: CheckedRoom) => checked.id === room.id))}`
  );
};
