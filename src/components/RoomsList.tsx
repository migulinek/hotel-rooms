import { CheckedRoom, Room } from '../models/Rooms';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import useRooms from '../hooks/useRooms';
import fetchCheckedRoom from '../services/fetchCheckedRoom';
import Section503 from './errorComponents/Section503';
import { sortedRoomsByPrice } from '../models/roomUtils.ts/sortedRoomsByPriceAsc';
import CardHeaderRoom from './CardHeaderRoom';
import CardBodyRoom from './CardBodyRoom';

const RoomsList = () => {
  const [rooms] = useRooms();

  const [checkedRooms, setCheckedRooms] = useState([]) as Array<Array<CheckedRoom>>;

  const checkAvailability = async () => {
    const checkedRooms = await fetchCheckedRoom();
    // @ts-ignore
    setCheckedRooms(checkedRooms);
  };

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <h2 className="text-center pt-5">Choose a room:</h2>
          {sortedRoomsByPrice(rooms).length > 0 ? (
            sortedRoomsByPrice(rooms).map((room: Room) => (
              <div className="col-6 mb-5">
                <Card key={room.id}>
                  <CardHeaderRoom checkedRooms={checkedRooms} id={room.id} name={room.name} />
                  <CardBodyRoom checkedRooms={checkedRooms} room={room} />
                </Card>
              </div>
            ))
          ) : (
            <Section503 />
          )}
        </div>
        <div className="row">
          <Button size="lg" variant="warning" className="py-3 h4" onClick={checkAvailability}>
            Check availability
          </Button>
        </div>
      </div>
    </>
  );
};
export default RoomsList;
