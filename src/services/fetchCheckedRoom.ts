import apiUrl from './apiUrl';
import { CheckedRoom } from '../models/Rooms';

const fetchCheckedRoom = async (): Promise<Array<CheckedRoom> | null> => {
  const checkedAllRoomsUrl = `${apiUrl}checkedRooms`;
  const resAll: Response = await fetch(checkedAllRoomsUrl);
  if (!resAll.ok) {
    throw new Error(`The url ${checkedAllRoomsUrl} cannot response properly`);
  } else if (resAll.ok) {
    return await resAll.json();
  }

  return null;
};

export default fetchCheckedRoom;
