import styles from './Navigation.module.css';

function Navbar() {
  return (
    <nav className={styles.navigation}>
      <div className="nav-logo">
        <img src="/images/Frame 2 1.png" alt="" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
