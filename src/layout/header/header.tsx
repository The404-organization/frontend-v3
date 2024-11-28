import { LogoIcon } from '@/assets/icons/logo';
import { Button } from '@/shared/ui/button/button';
import { MenuLink } from '@/shared/ui/menu-link/menu-link';
import styles from './header.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<LogoIcon className={styles.logo} />
			<nav className={styles.navigation}>
				<MenuLink label="Mission" link="" />
				<MenuLink label="Fractionalization" link="" />
				<MenuLink label="Trading" link="" />
				<MenuLink label="Liquidity pools" link="" />
				<MenuLink label="why erc-404" link="" />
				<MenuLink label="Team" link="" />
			</nav>
			<Button
				wrapperClassName={styles.buttonWrapper}
				buttonClassName={styles.buttonContent}
				label="Buy now"
			/>
		</header>
	);
};
