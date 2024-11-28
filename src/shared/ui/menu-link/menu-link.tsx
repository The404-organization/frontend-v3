import Link from 'next/link';
import styles from './menu-link.module.css';
import { MenuLinkProps } from './menu-link.props';

export const MenuLink = ({ label, link }: MenuLinkProps) => {
	return (
		<Link href={link} className={styles.wrapper}>
			<p className={styles.label}>{label}</p>
			<div className={styles.line} />
		</Link>
	);
};
