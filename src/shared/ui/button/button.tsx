import clsx from 'clsx';
import Link from 'next/link';
import { outfitFont } from '../fonts';
import styles from './button.module.css';
import { ButtonProps } from './button.props';

export const Button = ({
	label,
	link,
	loading,
	wrapperClassName,
	buttonClassName,
	loaderClassName,
	...props
}: ButtonProps) => {
	if (link) {
		return (
			<Link
				href={link}
				target="_blank"
				className={clsx(styles.wrapper, wrapperClassName)}
				{...(props as any)}>
				<div className={clsx(styles.button, buttonClassName)}>
					<p className={clsx(styles.label, outfitFont.className)}>
						{label}
					</p>
				</div>
			</Link>
		);
	}

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
