import styles from './button.module.css';
import { ButtonProps } from './button.props';

export const Button = ({ label }: ButtonProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.button}>
				<p className={styles.label}>{label}</p>
			</div>
		</div>
	);
};
