import clsx from 'clsx';
import { LocationIcon } from '../../location-icon/location-icon';
import { TextBlock } from '../../text-block/text-block';
import { YearItemProps } from '../types';
import styles from './third-year-item.module.css';

export const ThirdYearItem = ({ className, ...props }: YearItemProps) => {
	return (
		<div className={clsx(styles.wrapper, className)} {...props}>
			<TextBlock
				className={styles.textBlock}
				title={{
					label: 'Expansion Phase',
					color: 'purple',
				}}
				textItems={[
					{
						title: 'Token Appreciation:',
						items: ['$FOF value increases to $0.40'],
					},
					{
						title: 'Staking Rewards:',
						items: [
							'New Total Staked Tokens: 1,210,000 $FOF',
							'Rewards Earned: 121,000 $FOF',
						],
					},
					{
						title: 'Total Value at Year-End:',
						items: [
							'Token Value: 1,210,000 $FOF × $0.40 = $484,000',
							'taking Rewards Value: 121,000 $FOF × $0.40 = $48,400',
						],
					},
					{
						title: 'Total: $532,400',
						items: [],
					},
				]}
			/>
			<LocationIcon
				color="purple"
				className={styles.location}
				title={{ label: '3', style: 'reverse' }}
			/>
			<svg
				className={styles.arrow}
				width="48"
				height="112"
				viewBox="0 0 48 112"
				fill="none">
				<path
					d="M47.7979 110.062L26.8515 110.062C13.0444 110.062 1.85153 98.8696 1.85153 85.0625L1.85154 0.98582"
					stroke="#FF8CFF"
					strokeWidth="2"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	);
};
