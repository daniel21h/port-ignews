import { ActiveLink } from '../ActiveLink';
import { FiMenu } from 'react-icons/fi';

import { SignInButton } from '../SignInButton';

import styles from './styles.module.scss';
import Link from 'next/link';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <FiMenu size={30} className={styles.menu} />
        <Link href="/">
          <img src="/images/logo.svg" alt="ig.news" className={styles.logo} />
        </Link>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a className={styles.active}>Home</a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}