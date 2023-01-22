import { Badge } from 'react-bootstrap';
import { CheckedRoom, AvailabilityStatus } from '../models/Rooms';

const AvaliabilityBadge = ({ id, availabilityStatus }: CheckedRoom) => {
  function status(availability: AvailabilityStatus): 'success' | 'danger' | 'info' | 'dark' {
    switch (availability) {
      case 'available':
        return 'success';
      case 'error':
        return 'danger';
      case 'onRequest':
        return 'info';
      case 'soldOut':
        return 'dark';
      default:
        return 'info';
    }
  }

  return availabilityStatus ? (
    <>
      <Badge key={id} bg={status(availabilityStatus)}>
        {availabilityStatus}
      </Badge>
    </>
  ) : null;
};
export default AvaliabilityBadge;
