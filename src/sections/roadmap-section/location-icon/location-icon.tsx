import clsx from 'clsx';
import styles from './location-icon.module.css';
import { LocationIconProps } from './location-icon.props';

export const LocationIcon = ({
	color,
	className,
	title,
	...props
}: LocationIconProps) => {
	return (
		<div className={clsx(styles.wrapper, className)} {...props}>
			<svg
				className={clsx(styles.icon, styles[color])}
				width="114"
				height="144"
				viewBox="0 0 114 144"
				fill="#FF8CFF">
				<g clip-path="url(#clip0_4357_631)">
					<path d="M57.1323 0.787109C25.7263 0.787109 0.268555 26.2448 0.268555 57.6509C0.268555 62.3263 0.831562 66.8793 1.89638 71.2365C3.51197 77.8335 5.2989 83.1331 9.42354 90.036C13.5482 96.9267 19.8514 109.35 57.1201 143.901C94.3887 109.35 100.692 96.9267 104.817 90.036C108.941 83.1453 110.728 77.8335 112.344 71.2365C113.409 66.8915 113.972 62.3385 113.972 57.6509C113.984 26.2448 88.5261 0.787109 57.1323 0.787109Z" />
					<path d="M78.745 97.9851C101.053 86.0485 109.461 58.2875 97.5248 35.9792C85.5882 13.6708 57.8272 5.26281 35.5188 17.1994C13.2105 29.136 4.80249 56.897 16.7391 79.2054C28.6757 101.514 56.4367 109.922 78.745 97.9851Z" />
					<g opacity="0.2">
						<path
							d="M57.1323 15.1077C80.5583 15.1077 99.6027 34.1643 99.6027 57.5781C99.6027 80.9918 80.5461 100.048 57.1323 100.048C33.7185 100.048 14.6497 81.0163 14.6497 57.5903C14.6497 34.1643 33.7063 15.1077 57.1323 15.1077ZM57.1323 11.6562C31.7725 11.6562 11.1982 32.2183 11.1982 57.5903C11.1982 82.9624 31.7603 103.524 57.1323 103.524C82.5044 103.524 103.066 82.9624 103.066 57.5903C103.066 32.2183 82.4921 11.6562 57.1323 11.6562Z"
							fill="black"
						/>
					</g>
				</g>
				<defs>
					<clipPath id="clip0_4357_631">
						<rect
							width="113.715"
							height="143.102"
							fill="white"
							transform="translate(0.268555 0.787109)"
						/>
					</clipPath>
				</defs>
			</svg>
			<div className={clsx(styles.titleWrapper, styles[title.style])}>
				<p className={clsx(styles.text, styles.title)}>{title.label}</p>
				<p className={clsx(styles.text, styles.subtitle)}>Year</p>
			</div>
		</div>
	);
};
