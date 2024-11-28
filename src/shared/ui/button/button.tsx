import clsx from 'clsx';
import styles from './button.module.css';
import { ButtonProps } from './button.props';

export const Button = ({
	label,
	wrapperClassName,
	buttonClassName,
}: ButtonProps) => {
	return (
		<div className={clsx(styles.wrapper, wrapperClassName)}>
			<div className={clsx(styles.button, buttonClassName)}>
				<p className={styles.label}>{label}</p>
			</div>
		</div>
	);
};
