import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { fetchEvents } from 'servises/api';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents()
      .then(setEvents)
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (!events) {
    return null;
  }

  return (
    <main>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link to={event.id}> {event.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </main>
  );
};

export default Events;
