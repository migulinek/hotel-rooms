import { CheckedRoom, Room } from '../models/Rooms';
import { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import useRooms from '../hooks/useRooms';
import fetchCheckedRoom from '../services/fetchCheckedRoom';
import AvaliabilityBadge from './AvaliabilityBadge';

const RoomsList = () => {
  const [rooms] = useRooms();
  const [radioId, setRadioId] = useState(0);
  const [checkedRooms, setCheckedRooms] = useState([]) as Array<Array<CheckedRoom>>;

  function selectRadio(id: number) {
    setRadioId(id);
  }

  async function checkRoom() {
    const newData = await fetchCheckedRoom(radioId);
    setCheckedRooms([...checkedRooms, newData]);
  }

  function getCheckedRoomById(id: number) {
    return checkedRooms.find((checkedRoom) => checkedRoom.id === id);
  }

  function isBookButtonAvaliable(id: number): boolean {
    return getCheckedRoomById(id)?.availabilityStatus === 'available';
  }

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <h2 className="text-center pt-5">Choose a room:</h2>
          {rooms.length > 0
            ? rooms.map((room: Room) => (
                <div className="col-6 mb-5">
                  <Button
                    value={room.id}
                    key={room.id}
                    onClick={() => selectRadio(+room.id)}
                    className="btn-wrapper btn btn-link bg-transparent"
                    variant="outline-light">
                    <Card key={room.id}>
                      <Card.Header>
                        <h5>
                          {room.name}{' '}
                          <AvaliabilityBadge
                            key={room.id}
                            id={room.id}
                            availabilityStatus={getCheckedRoomById(room.id)?.availabilityStatus}
                            price={getCheckedRoomById(room.id)?.price}
                          />
                        </h5>
                      </Card.Header>
                      <Card.Body>
                        <h4>
                          {!!getCheckedRoomById(room.id)?.price?.value &&
                          room.price.value !== getCheckedRoomById(room.id)?.price?.value ? (
                            <>
                              <span className="warning">
                                {getCheckedRoomById(room.id)?.price?.value} -{' '}
                                {room.price.currencyCode}
                              </span>
                              <span className="text-decoration-line-through">
                                {room.price.value} - {room.price.currencyCode}
                              </span>
                            </>
                          ) : (
                            <span>
                              {room.price.value} - {room.price.currencyCode}
                            </span>
                          )}
                        </h4>
                        <Form.Check
                          id={`radio-${room.id}`}
                          name="test"
                          type="radio"
                          key={room.id}
                          checked={radioId === room.id}
                        />
                        <Button
                          size="lg"
                          disabled={!isBookButtonAvaliable(room.id)}
                          onClick={() => {
                            console.log('Booked');
                          }}>
                          Book
                        </Button>
                      </Card.Body>
                    </Card>
                  </Button>
                </div>
              ))
            : null}
        </div>
        <div className="row">
          <Button
            size="lg"
            variant="warning"
            className="py-3 h4"
            disabled={!radioId}
            onClick={() => checkRoom()}>
            Check availability
          </Button>
        </div>
      </div>
    </>
  );
};
export default RoomsList;
