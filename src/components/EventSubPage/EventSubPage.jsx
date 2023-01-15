import { useFetchEvent } from 'hooks/useFetchEvent';
import { EventImg } from './EventSubPage.styled';
import { Link } from 'react-router-dom';

const EventSubPage = () => {
  const event = useFetchEvent();

  return (
    event && (
      <div>
        <h2>{event.name}</h2>
        <EventImg src={event.images[0].url} alt={event.name} />
        <Link to="details">More details</Link>
      </div>
    )
  );
};

export default EventSubPage;
