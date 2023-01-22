import Card from 'react-bootstrap/esm/Card';
import { CheckedRooms, Room } from '../../models/Rooms';
import { getCheckedRoomById } from '../../models/roomUtils.ts/getCheckedRoomById';
import OrderRoom from '../OrderRoom';
import RoomPrice from '../RoomPrice';
import ThumbnailRoom from '../ThumbnailRoom';

const CardBodyRoom = ({ checkedRooms, room }: CheckedRooms & { room: Room }) => {
  return (
    <>
      <Card.Body>
        <div className="container text-center">
          <div className="row">
            <div className="col building">
              <ThumbnailRoom checkedRooms={checkedRooms} id={room.id} />
            </div>
            <div className="col price">
              <RoomPrice
                price={room.price.value}
                currencyCode={room.price.currencyCode}
                checkedPrice={getCheckedRoomById(checkedRooms, room.id)?.price?.value}
              />
            </div>
            <div className="col buy">
              <OrderRoom checkedRooms={checkedRooms} room={room} />
            </div>
          </div>
        </div>
      </Card.Body>
    </>
  );
};
export default CardBodyRoom;
