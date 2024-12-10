import { ArrowsIcon } from '@/assets/icons/arrows-icon';
import { LocationIcon } from '@/assets/icons/location-icon';
import { MainIcon } from '@/assets/icons/main-icon';
import { poppinsFont } from '@/shared/ui/fonts';
import clsx from 'clsx';
import { ContactUsForm } from './contact-us-form/contact-us-form';
import styles from './contact-us-section.module.css';

export const ContactUsSection = () => {
	return (
		<section className={styles.wrapper}>
			<p className={clsx(styles.title, poppinsFont.className)}>
				<span className={styles.blue}>Contact</span> us
			</p>
			<div className={styles.schema}>
				<div className={styles.schemaItemBlock}>
					<MainIcon className={styles.schemaIcon} />
					<div>
						<p className={styles.schemaText}>admin@the404.io</p>
					</div>
				</div>
				<ArrowsIcon className={styles.arrowIcon} />
				<div className={styles.schemaItemBlock}>
					<LocationIcon className={styles.schemaIcon} />
					<div>
						<p className={styles.schemaText}>
							State/province/area:
						</p>
						<p className={styles.schemaText}>Brooklyn NY</p>
					</div>
				</div>
			</div>
			<ContactUsForm />
		</section>
	);
};
