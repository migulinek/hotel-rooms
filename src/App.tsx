import RoomsList from './components/RoomsList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel } from '@fortawesome/free-solid-svg-icons';

const CACHE_TIME: number = 1000 * 60 * 60 * 12;
const STALE_TIME: number = 1000 * 60 * 60 * 12;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: CACHE_TIME,
      cacheTime: STALE_TIME
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className="container-fluid text-bg-dark">
          <h1 className="text-center py-5">
            <FontAwesomeIcon icon={faHotel} /> Hotel Rooms
          </h1>
        </div>
        <RoomsList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
