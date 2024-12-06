import clsx from 'clsx';
import { outfitFont } from '../fonts';
import styles from './button.module.css';
import { ButtonProps } from './button.props';

export const Button = ({
	label,
	loading,
	wrapperClassName,
	buttonClassName,
	loaderClassName,
	...props
}: ButtonProps) => {
	return (
		<button className={clsx(styles.wrapper, wrapperClassName)} {...props}>
			<div className={clsx(styles.button, buttonClassName)}>
				{loading ? (
					<div className={clsx(styles.loader, loaderClassName)} />
				) : (
					<p className={clsx(styles.label, outfitFont.className)}>
						{label}
					</p>
				)}
			</div>
		</button>
	);
};
