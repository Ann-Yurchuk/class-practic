import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Home from '../pages/Home';
import Events from '../pages/Events';
import EventSubPage from 'components/EventSubPage/EventSubPage';
import Details from '../pages/Details';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />}>
            <Route path=":eventId" element={<EventSubPage />} />
          </Route>
          <Route path="events/:eventId/details" element={<Details />} />
        </Route>
      </Routes>
    </div>
  );
};
