import Card from 'react-bootstrap/esm/Card';
import { CheckedRooms, Room } from '../../models/Rooms';
import CardBodyRoom from './CardBodyRoom';
import CardHeaderRoom from './CardHeaderRoom';
import './CardRoom.scss';

const CardRoom = ({ checkedRooms, room }: CheckedRooms & { room: Room }) => {
  return (
    <Card key={room.id}>
      <CardHeaderRoom checkedRooms={checkedRooms} id={room.id} name={room.name} />
      <CardBodyRoom checkedRooms={checkedRooms} room={room} />
    </Card>
  );
};
export default CardRoom;
