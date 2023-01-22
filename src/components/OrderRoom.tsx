import { useState } from 'react';
import { CartPlusFill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import { CheckedRooms, Room } from '../models/Rooms';
import { isRoomAvaliable } from '../models/roomUtils.ts/isRoomAvaliable';
import { logRoomBooking } from '../models/roomUtils.ts/logRoomBooking';

const OrderRoom = ({ checkedRooms, room }: CheckedRooms & { room: Room }) => {
  const [radioId, setRadioId] = useState(0);

  function selectRoom(id: number) {
    if (!isRoomAvaliable(checkedRooms, id)) {
      return;
    }

    setRadioId(id);
  }

  return (
    <>
      {isRoomAvaliable(checkedRooms, room.id) && (
        <Form.Check
          id={`radio-${room.id}`}
          name="test"
          type="radio"
          key={room.id}
          checked={radioId === room.id}
          onClick={() => selectRoom(+room.id)}
        />
      )}
      <Button
        size="lg"
        variant={isRoomAvaliable(checkedRooms, room.id) ? 'success' : 'light'}
        disabled={radioId === 0 || !isRoomAvaliable(checkedRooms, room.id)}
        onClick={() => logRoomBooking(checkedRooms, room)}>
        <CartPlusFill /> Book {isRoomAvaliable(checkedRooms, room.id)}
      </Button>
    </>
  );
};
export default OrderRoom;
