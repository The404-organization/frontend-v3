import clsx from 'clsx';
import { LocationIcon } from '../../location-icon/location-icon';
import { TextBlock } from '../../text-block/text-block';
import { YearItemProps } from '../types';
import styles from './fifth-year-item.module.css';

export const FifthYearItem = ({ className, ...props }: YearItemProps) => {
	return (
		<div className={clsx(styles.wrapper, className)} {...props}>
			<TextBlock
				className={styles.textBlock}
				title={{
					label: 'Maturity Phase',
					color: 'purple',
				}}
				textItems={[
					{
						title: 'Token Appreciation:',
						items: ['$FOF value increases to $0.60'],
					},
					{
						title: 'Staking Rewards:',
						items: [
							'New Total Staked Tokens: 1,464,100 $FOF',
							'Rewards Earned: 146,400 $FOF',
						],
					},
					{
						title: 'Total Value at Year-End:',
						items: [
							'Token Value: 1,464,100 $FOF × $0.60 = $878,460',
							'taking Rewards Value: 146,400 $FOF × $0.60 = $87,400',
						],
					},
					{
						title: 'Total: $965,860',
						items: [],
					},
				]}
			/>
			<LocationIcon
				color="purple"
				className={styles.location}
				title={{ label: '5', style: 'reverse' }}
			/>
			<svg
				className={styles.arrow}
				width="51"
				height="363"
				viewBox="0 0 51 363"
				fill="none">
				<path
					d="M50.9277 1.67578H26.7895C12.9824 1.67578 1.78952 12.8687 1.78952 26.6758V362.92"
					stroke="#FF8CFF"
					strokeWidth="2"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	);
};
