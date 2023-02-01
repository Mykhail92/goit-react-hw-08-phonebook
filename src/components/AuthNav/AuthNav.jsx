import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: '12px',
    fontWeight: '700',
    color: '#2a363b',
  },
};

export const AuthNav = () => {
  return (
    <div>
      <NavLink style={styles.link} to="/register">
        Register
      </NavLink>
      <NavLink style={styles.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
