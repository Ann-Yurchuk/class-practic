import { useState, useEffect } from 'react';
import { fetchEventsById } from 'servises/api';
import { useParams } from 'react-router-dom';

export const useFetchEvent = () => {
  const { evtId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetchEventsById(evtId).then(setEvent);
  }, [evtId]);
  return event;
};
