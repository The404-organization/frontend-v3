import Link from 'next/link';
import styles from './social-button.module.css';
import { SocialButtonProps } from './social-button.props';

export const SocialButton = ({ link, icon: Icon }: SocialButtonProps) => {
	return (
		<Link target="_blank" className={styles.link} href={link}>
			<button className={styles.button}>
				<Icon className={styles.icon} />
			</button>
		</Link>
	);
};
