import React from 'react';
import styles from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <section className={styles.sidebar}>
      <h2 className={styles.title}>categories</h2>
      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink to={`./categories/${1}`}>LInk</NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.footer}>
        <a href="./help" target="_blank" className={styles.link}>
          Help
        </a>{' '}
        <a
          href="./terms"
          target="_blank"
          className={styles.link}
          style={{ textDecoration: 'underline' }}
        >
          Terms & Conditions
        </a>
      </div>
    </section>
  );
}

export default Sidebar;
