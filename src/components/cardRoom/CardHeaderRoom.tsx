import { Card } from 'react-bootstrap';
import { CheckedRooms } from '../../models/Rooms';
import { getCheckedRoomById } from '../../models/roomUtils.ts/getCheckedRoomById';
import AvaliabilityBadge from '../avaliabilityBadge/AvaliabilityBadge';

const CardHeaderRoom = ({
  checkedRooms,
  id,
  name
}: CheckedRooms & { id: number; name: string }) => {
  return (
    <Card.Header>
      <h5>
        {name}{' '}
        <AvaliabilityBadge
          key={id}
          id={id}
          availabilityStatus={getCheckedRoomById(checkedRooms, id)?.availabilityStatus}
          price={getCheckedRoomById(checkedRooms, id)?.price}
        />
      </h5>
    </Card.Header>
  );
};
export default CardHeaderRoom;
