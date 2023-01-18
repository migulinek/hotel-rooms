import apiUrl from './apiUrl';
import { CheckedRoom } from '../models/Rooms';

const fetchCheckedRoom = async (id: number): Promise<CheckedRoom> => {
  const url: string = `${apiUrl}checkedRooms/${id}`;
  const res: Response = await fetch(url);
  if (!res.ok) {
    throw new Error(`The url ${url} cannot response properly`);
  } else if (res.ok) {
    return await res.json();
  }
  return { id: -1 };
};

export default fetchCheckedRoom;
