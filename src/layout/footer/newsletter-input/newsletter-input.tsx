import { SubscribeIcon } from '@/assets/icons/subscribe-icon';
import styles from './newsletter-input.module.css';

export const NewsletterInput = () => {
	return (
		<div className={styles.wrapper}>
			<input placeholder="Your Email" className={styles.input} />
			<button className={styles.subscribeButton}>
				<SubscribeIcon />
			</button>
		</div>
	);
};
