import { ReactNode } from 'react';

export type Requirement = {
	type: 'RAM';
	valueGB: number;
};

export interface ModelProps {
	modelSrc: string;
	textureSrc?: string;
	scale?: number;
	enablePan?: boolean;
	enableZoom?: boolean;
	enableRotate?: boolean;
	defaultRender?: ReactNode;
	requirements?: Requirement[];
	canvasStyle?: React.CSSProperties;
	canvasClassName?: string;
	initialRotate?: {
		x?: number;
		y?: number;
		z?: number;
	};
}
