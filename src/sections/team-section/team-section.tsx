import { poppinsFont, quantumFont } from '@/shared/ui/fonts';
import clsx from 'clsx';
import { MEMBERS } from './team-section.constants';
import styles from './team-section.module.css';

export const TeamSection = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.content}>
				<img
					src="/team-section/background.png"
					className={styles.background}
				/>
				<p className={clsx(styles.title, quantumFont.className)}>
					Team
				</p>
				<div className={styles.members}>
					{MEMBERS.map(member => (
						<div
							key={member.name}
							className={styles.member}
							style={{
								background: `linear-gradient(#142841, #142841) padding-box, linear-gradient(0deg, ${member.color(0.5)} 0%, ${member.color(0)} 100%) border-box`,
							}}>
							<img
								src={member.photo}
								alt={`${member.name} photo`}
								className={styles.memberPhoto}
							/>
							<p
								style={{ color: member.color(1) }}
								className={clsx(
									styles.memberName,
									poppinsFont.className,
								)}>
								{member.name}
							</p>
							<p className={styles.memberRole}>{member.role}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
