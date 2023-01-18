import apiUrl from './apiUrl';

const fetchRooms = async () => {
  const url: string = `${apiUrl}rooms`;
  const res: Response = await fetch(url);
  if (!res.ok) {
    throw new Error(`The url ${url} cannot response properly`);
  } else if (res.ok) {
    return await res.json();
  }
};

export default fetchRooms;
