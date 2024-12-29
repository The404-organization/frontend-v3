'use client';

import { useElementPosition } from '@/shared/hooks/use-element-position';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { LegacyRef, Suspense, useState } from 'react';
import { ErrorBoundary } from '../error-boundary/error-boundary';
import { ModelRender } from '../model-render/model-render';
import { Requirements } from '../requirements/requirements';
import { ScrollBlock } from '../scroll-block/scroll-block';
import { ModelProps } from './model.props';

export const Model = ({
	modelSrc,
	textureSrc,
	initialRotate,
	scale,
	enablePan,
	enableRotate,
	enableZoom,
	defaultRender,
	requirements,
	animation,
	canvasClassName,
	canvasStyle,
}: ModelProps) => {
	const { elementRef, position } = useElementPosition();
	const [animationPlay, setAnimationPlay] = useState<boolean>(
		Boolean(animation?.enabled && animation?.startEvent === 'load'),
	);

	const handleMouseEnter = () => {
		if (animation?.enabled && animation?.startEvent === 'hover') {
			setAnimationPlay(true);
		}
	};

	const handleMouseLeave = () => {
		if (animation?.enabled && animation?.startEvent === 'hover') {
			setAnimationPlay(false);
		}
	};

	const handleClick = () => {
		if (animation?.enabled && animation?.startEvent === 'click') {
			setAnimationPlay(!animationPlay);
		}
	};

	return (
		<ErrorBoundary defaultRender={defaultRender}>
			<Requirements
				defaultRender={defaultRender}
				requirements={requirements || []}>
				<ScrollBlock
					position={position}
					onClick={handleClick}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				/>
				<Canvas
					style={canvasStyle}
					ref={elementRef as LegacyRef<HTMLCanvasElement>}
					className={canvasClassName}
					onClick={handleClick}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					camera={{ position: [0, 0, 3] }}>
					<ambientLight intensity={0.5} />
					<directionalLight
						position={[Math.PI, Math.PI, Math.PI]}
						intensity={2}
					/>
					<Suspense fallback={null}>
						<ModelRender
							scale={scale}
							modelSrc={modelSrc}
							textureSrc={textureSrc}
							initialRotate={initialRotate}
							animationPlay={animationPlay}
						/>
					</Suspense>
					<OrbitControls
						enablePan={enablePan}
						enableZoom={enableZoom}
						enableRotate={enableRotate}
					/>
				</Canvas>
			</Requirements>
		</ErrorBoundary>
	);
};
