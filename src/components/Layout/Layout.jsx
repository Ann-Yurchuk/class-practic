import { Outlet, useLocation } from 'react-router-dom';
import { StyledLink } from './Layout.styled';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      {!location.pathname.includes('details') && (
        <header>
          <nav>
            <ul>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="events">Events</StyledLink>
              </li>
            </ul>
          </nav>
        </header>
      )}
      <Outlet />
    </>
  );
};

export default Layout;
