'use client';

import { Model } from '@/shared/ui/3d-model/ui/model/model';
import { poppinsFont } from '@/shared/ui/fonts';
import { LinkButton } from '@/shared/ui/link-button/link-button';
import clsx from 'clsx';
import { useSearchParams } from 'next/navigation';
import styles from './welcome-section.module.css';

export const WelcomeSection = () => {
	const searchParams = useSearchParams();
	const display3D = searchParams.get('display3D') === 'true';

	return (
		<section className={styles.wrapper}>
			<div className={styles.blur} />
			<img className={styles.largeCircle} src="/common/circle.png" />
			<img className={styles.smallCircle} src="/common/circle.png" />
			<div className={styles.content}>
				{display3D ? (
					<Model
						scale={1.4}
						canvasClassName={styles.monkeyModel}
						enablePan={false}
						enableRotate={false}
						enableZoom={false}
						initialRotate={{ y: -2.6 }}
						requirements={[
							{
								type: 'RAM',
								valueGB: 6,
							},
						]}
						textureSrc="/textures/monkey.png"
						defaultRender={
							<img
								className={styles.monkey}
								src="/welcome-section/monkey.png"
								alt=""
							/>
						}
						modelSrc="/models/monkey.glb"
					/>
				) : (
					<img
						className={styles.monkey}
						src="/welcome-section/monkey.png"
						alt=""
					/>
				)}
				<div className={styles.textContent}>
					<p className={clsx(styles.title, poppinsFont.className)}>
						Trade <span className={styles.blue}>N</span>
						<span className={styles.violet}>F</span>
						<span className={styles.pink}>T</span>s Like Memes
					</p>
					<p className={clsx(styles.subtitle, poppinsFont.className)}>
						Convert High-Value NFTs Into Fractional-Erc-404 Tokens
					</p>
					<LinkButton
						label="White paper"
						url="https://404-project.gitbook.io/404-lite-paper/"
					/>
				</div>
			</div>
		</section>
	);
};
