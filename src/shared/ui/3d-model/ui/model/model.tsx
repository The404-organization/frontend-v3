'use client';

import { useElementPosition } from '@/shared/hooks/use-element-position';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { LegacyRef, Suspense } from 'react';
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
	canvasClassName,
	canvasStyle,
}: ModelProps) => {
	const { elementRef, position } = useElementPosition();

	return (
		<ErrorBoundary defaultRender={defaultRender}>
			<Requirements
				defaultRender={defaultRender}
				requirements={requirements || []}>
				<ScrollBlock position={position} />
				<Canvas
					style={canvasStyle}
					ref={elementRef as LegacyRef<HTMLCanvasElement>}
					className={canvasClassName}
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
