import { CheckedRoom, Room } from '../Rooms';

export const logRoomBooking = (checkedRooms: Array<CheckedRoom>, room: Room) => {
  const selectedRoom = checkedRooms.find((checked: CheckedRoom) => checked.id === room.id);
  if (selectedRoom) {
    const { availabilityStatus, id, price } = selectedRoom;
    console.log(
      `%cBooked room:\n%c(ID: ${id}) %c${room.name} %cwith status ${availabilityStatus}.\nPrice: %c${price?.value} ${price?.currencyCode}`,
      'color: gray; background: #ccc; padding:5px 0;font-size:30px',
      'color: black;background: #ccc;padding:5px 0;font-size:30px',
      'font-weight: bold;background: #ccc;padding:5px 0;font-size:30px',
      'font-weight: normal;background: #ccc;padding:5px 0;font-size:30px',
      'color: #198754; font-weight: bold;background: #ccc;padding:5px 0;font-size:30px'
    );
  }
};
