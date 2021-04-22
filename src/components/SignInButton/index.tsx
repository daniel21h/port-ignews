import { useRouter } from 'next/router';
import { FaGithub } from 'react-icons/fa';

import styles from './styles.module.scss';

export function SignInButton() {
  const { push } = useRouter();

  async function handleSubscribe() {
    push('/');
  }

  return (
    <button
      className={styles.signInButton}
      type="button"
      onClick={handleSubscribe}
    >
      <FaGithub color="#eba417" />
      <p>Sign in with Github</p>
    </button>
  )
}