import { Building, BuildingCheck, BuildingFillX } from 'react-bootstrap-icons';
import { CheckedRooms } from '../models/Rooms';
import { isRoomAvaliable } from '../models/roomUtils.ts/isRoomAvaliable';

const ThumbnailRoom = ({ checkedRooms, id }: CheckedRooms & { id: number }) => {
  const unchecked: boolean = checkedRooms.length === 0;
  const avaliability: string = isRoomAvaliable(checkedRooms, id) ? 'avaliable' : 'not-avaliable';
  const isAvaliable: boolean = avaliability === 'avaliable';

  return unchecked ? (
    <Building className="unchecked" />
  ) : isAvaliable ? (
    <BuildingCheck className={avaliability} />
  ) : (
    <BuildingFillX className={avaliability} />
  );
};
export default ThumbnailRoom;
