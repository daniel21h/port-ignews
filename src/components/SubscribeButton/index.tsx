import { useRouter } from 'next/router';
import styles from './styles.module.scss';

export function SubscribeButton() {
  const { push } = useRouter();

  async function handleSubscribe() {
    push('/posts');
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}