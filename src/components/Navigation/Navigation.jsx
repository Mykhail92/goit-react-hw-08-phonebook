import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: '12px',
    fontWeight: '700',
    color: '#2a363b',
  },
};

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink style={styles.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink style={styles.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
