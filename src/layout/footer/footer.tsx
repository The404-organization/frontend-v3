import { LogoIcon } from '@/assets/icons/logo';
import {
	DiscordIcon,
	FacebookIcon,
	TelegramIcon,
	XIcon,
	YouTubeIcon,
} from '@/assets/icons/socials';
import { TopArrowIcon } from '@/assets/icons/top-arrow-icon';
import { poppinsFont } from '@/shared/ui/fonts';
import clsx from 'clsx';
import styles from './footer.module.css';
import { NewsletterInput } from './newsletter-input/newsletter-input';
import { SocialButton } from './social-button/social-button';

export const Footer = () => {
	return (
		<footer className={styles.wrapper}>
			<div className={styles.footer}>
				<div className={styles.topLineWrapper}>
					<div className={styles.line} />
					<button className={styles.scrollButton}>
						<TopArrowIcon className={styles.topArrowIcon} />
					</button>
				</div>
				<div className={styles.logoBlock}>
					<LogoIcon className={styles.logo} />
					<p className={styles.text}>
						We have a passion for NFTs and trading
					</p>
					<div className={styles.socials}>
						<SocialButton
							link="https://google.com"
							icon={YouTubeIcon}
						/>
						<SocialButton link="https://google.com" icon={XIcon} />
						<SocialButton
							link="https://google.com"
							icon={FacebookIcon}
						/>
						<SocialButton
							link="https://google.com"
							icon={TelegramIcon}
						/>
						<SocialButton
							link="https://google.com"
							icon={DiscordIcon}
						/>
					</div>
				</div>
				<div className={styles.links}>
					<p className={styles.text}>Mission</p>
					<p className={styles.text}>Fractionalization</p>
					<p className={styles.text}>Trading</p>
					<p className={styles.text}>Liquidity pools</p>
					<p className={styles.text}>Why erc-404</p>
					<p className={styles.text}>Team</p>
				</div>
				<div className={styles.newsletterBlock}>
					<p
						className={clsx(
							styles.newsletterTitle,
							poppinsFont.className,
						)}>
						Subscribe Newsletter
					</p>
					<p className={styles.text}>
						Exerci tation ullamcorper suscipit lobortis nisl aliquip
						ex ea commodo
					</p>
					<NewsletterInput />
				</div>
				<div className={styles.privacyLinksWrapper}>
					<p className={styles.text}>
						© Copyright {new Date().getFullYear()} The 404. All
						Rights Reserved Copyright
					</p>
					<div className={styles.privacyLinks}>
						<p className={styles.text}>Terms and conditions</p>
						<p className={styles.text}>Privacy policy</p>
					</div>
				</div>
			</div>
		</footer>
	);
};