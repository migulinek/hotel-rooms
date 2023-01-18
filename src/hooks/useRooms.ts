import { useQuery } from '@tanstack/react-query';
import fetchRooms from '../services/fetchRooms';
import { Room } from '../models/Rooms';

export default function useRooms(): Array<Array<Room>> {
  const results = useQuery([], fetchRooms);
  return [results.data ?? []];
}
