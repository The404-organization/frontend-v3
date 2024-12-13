import clsx from 'clsx';
import styles from './text-block.module.css';
import { TextBlockProps } from './text-block.props';

export const TextBlock = ({
	title,
	textItems,
	className,
	...props
}: TextBlockProps) => {
	return (
		<div className={clsx(styles.wrapper, className)} {...props}>
			<p className={clsx(styles.title, styles[title.color])}>
				{title.label}
			</p>
			<div className={styles.textWrapper}>
				{textItems.map(textItem => (
					<div className={styles.textWrapper}>
						<p className={styles.text}>{textItem.title}</p>
						<div>
							{textItem.items.map(item => (
								<div className={styles.itemWrapper}>
									<div className={styles.circle} />
									<p className={styles.text}>{item}</p>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
