import axios from 'axios';

axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';
const API_KEY = 'tIj1kC332ExvV8vs1uBAp1fasaO5ERpG';

export async function fetchEvents() {
  const res = await axios('events', { params: { apikey: API_KEY } });
  return res.data._embedded.events;
}

export async function fetchEventsById(id) {
  const res = await axios(`events/${id}`, { params: { apikey: API_KEY } });
  return res.data;
}
