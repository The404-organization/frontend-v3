import clsx from 'clsx';
import { LocationIcon } from '../../location-icon/location-icon';
import { TextBlock } from '../../text-block/text-block';
import { YearItemProps } from '../types';
import styles from './fourth-year-item.module.css';

export const FourthYearItem = ({ className, ...props }: YearItemProps) => {
	return (
		<div className={clsx(styles.wrapper, className)} {...props}>
			<TextBlock
				className={styles.textBlock}
				title={{
					label: 'Maturity Phase',
					color: 'blue',
				}}
				textItems={[
					{
						title: 'Token Appreciation:',
						items: ['$FOF value increases to $0.50'],
					},
					{
						title: 'Staking Rewards:',
						items: [
							'New Total Staked Tokens: 1,331,000 $FOF',
							'Rewards Earned: 133,100 $FOF',
						],
					},
					{
						title: 'Total Value at Year-End:',
						items: [
							'Token Value: 1,331,000 $FOF × $0.50 = $665,500',
							'taking Rewards Value: 133,100 $FOF × $0.50 = $66,550',
						],
					},
					{
						title: 'Total: $732,050',
						items: [],
					},
				]}
			/>
			<LocationIcon
				color="blue"
				className={styles.location}
				title={{ label: '4', style: 'reverse' }}
			/>
			<svg
				className={styles.arrow}
				width="48"
				height="148"
				viewBox="0 0 48 148"
				fill="none">
				<path
					d="M47.1592 146.816H26.219C12.4119 146.816 1.21903 135.624 1.21903 121.816V0.561645"
					stroke="#5DF5FF"
					stroke-width="2"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
	);
};
