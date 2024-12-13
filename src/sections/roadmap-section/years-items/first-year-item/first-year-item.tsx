import clsx from 'clsx';
import { LocationIcon } from '../../location-icon/location-icon';
import { TextBlock } from '../../text-block/text-block';
import { YearItemProps } from '../types';
import styles from './first-year-item.module.css';

export const FirstYearItem = ({ className, ...props }: YearItemProps) => {
	return (
		<div className={clsx(styles.wrapper, className)} {...props}>
			<TextBlock
				className={styles.textBlock}
				title={{
					label: 'Initial Phase',
					color: 'purple',
				}}
				textItems={[
					{
						title: 'Token Appreciation:',
						items: ['$FOF value increases to $0.20'],
					},
					{
						title: 'Staking Rewards:',
						items: [
							'Annual Reward Rate: 10%',
							'Staked Tokens: 1,000,000 $FOF',
							'Rewards Earned: 100,000 $FOF',
						],
					},
					{
						title: 'Total Value at Year-End:',
						items: [
							'Token Value: 1,000,000 $FOF × $0.20 =$200,000',
							'Staking Rewards Value: 100,000 $FOF × $0.20 = $20,000',
						],
					},
					{
						title: 'Total: $220,000',
						items: [],
					},
				]}
			/>
			<LocationIcon
				color="purple"
				className={styles.location}
				title={{ label: '1', style: 'reverse' }}
			/>
			<svg
				className={styles.arrow}
				width="57"
				height="533"
				viewBox="0 0 57 533"
				fill="none">
				<path
					d="M56.0664 1.28125H26.7149C12.9078 1.28125 1.71493 12.4741 1.71493 26.2812V532.522"
					stroke="#FF8CFF"
					stroke-width="2"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
	);
};
