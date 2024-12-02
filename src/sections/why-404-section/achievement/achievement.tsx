import { poppinsFont } from '@/shared/ui/fonts';
import clsx from 'clsx';
import styles from './achievement.module.css';
import { AchievementProps } from './achievement.props';

export const Achievement = ({
	valueKey,
	value,
	color,
	wrapperClassName,
	valueClassName,
	keyClassName,
}: AchievementProps) => {
	return (
		<div className={clsx(styles.wrapper, wrapperClassName)}>
			{value ? (
				<>
					<p
						className={clsx(
							styles.value,
							poppinsFont.className,
							valueClassName,
						)}
						style={{ color }}>
						{value}
					</p>
					<p className={clsx(styles.key, keyClassName)}>{valueKey}</p>
				</>
			) : (
				<p className={clsx(styles.key, keyClassName)}>{valueKey}</p>
			)}
		</div>
	);
};
