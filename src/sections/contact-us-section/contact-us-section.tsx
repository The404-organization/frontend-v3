import { ArrowsIcon } from '@/assets/icons/arrows-icon';
import { LocationIcon } from '@/assets/icons/location-icon';
import { MainIcon } from '@/assets/icons/main-icon';
import { PhoneIcon } from '@/assets/icons/phone-icon';
import { Button } from '@/shared/ui/button/button';
import { poppinsFont } from '@/shared/ui/fonts';
import { Input } from '@/shared/ui/input/input';
import { Textarea } from '@/shared/ui/textarea/textarea';
import clsx from 'clsx';
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
						<p className={styles.schemaText}>company@gmail.com</p>
						<p className={styles.schemaText}>infoweb@gmail.com</p>
					</div>
				</div>
				<ArrowsIcon className={styles.arrowIcon} />
				<div className={styles.schemaItemBlock}>
					<PhoneIcon className={styles.schemaIcon} />
					<div>
						<p className={styles.schemaText}>+84 0977425031</p>
						<p className={styles.schemaText}>+998 765 775 34</p>
					</div>
				</div>
				<ArrowsIcon className={styles.arrowIcon} />
				<div className={styles.schemaItemBlock}>
					<LocationIcon className={styles.schemaIcon} />
					<div>
						<p className={styles.schemaText}>
							State/province/area:
						</p>
						<p className={styles.schemaText}>Georgia 198</p>
					</div>
				</div>
			</div>
			<div className={styles.formWrapper}>
				<img
					className={styles.background}
					src="/contact-us-section/background.png"
					alt=""
				/>
				<Input
					className={styles.nameInput}
					placeholder="Enter you name"
				/>
				<Input
					className={styles.emailInput}
					placeholder="Enter you email"
				/>
				<Textarea
					className={styles.messageInput}
					placeholder="Enter you message"
				/>
				<Button label="Send message" wrapperClassName={styles.button} />
			</div>
		</section>
	);
};
