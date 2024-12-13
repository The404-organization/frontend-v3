import clsx from 'clsx';
import { LocationIcon } from '../../location-icon/location-icon';
import { TextBlock } from '../../text-block/text-block';
import { YearItemProps } from '../types';
import styles from './second-year-item.module.css';

export const SecondYearItem = ({ className, ...props }: YearItemProps) => {
	return (
		<div className={clsx(styles.wrapper, className)} {...props}>
			<TextBlock
				className={styles.textBlock}
				title={{
					label: 'Growth Phase',
					color: 'blue',
				}}
				textItems={[
					{
						title: 'Token Appreciation:',
						items: ['$FOF value increases to $0.30'],
					},
					{
						title: 'Staking Rewards:',
						items: [
							'New Total Staked Tokens: 1,100,000 $FOF',
							'Rewards Earned: 110,000 $FOF',
						],
					},
					{
						title: 'Total Value at Year-End:',
						items: [
							'Token Value: 1,100,000 $FOF × $0.30 = $330,000',
							'taking Rewards Value: 110,000 $FOF × $0.30 = $33,000',
						],
					},
					{
						title: 'Total: $363,000',
						items: [],
					},
				]}
			/>
			<LocationIcon
				color="blue"
				className={styles.location}
				title={{ label: '2', style: 'reverse' }}
			/>
			<svg
				className={styles.arrow}
				width="59"
				height="557"
				viewBox="0 0 59 557"
				fill="none">
				<path
					d="M58.209 1.89258H26.9225C13.1154 1.89258 1.92246 13.0855 1.92246 26.8926V556.922"
					stroke="#5DF5FF"
					strokeWidth="2"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	);
};
