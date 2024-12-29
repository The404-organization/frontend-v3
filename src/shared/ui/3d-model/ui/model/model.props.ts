import { ReactNode } from 'react';

export type Requirement = {
	type: 'RAM';
	valueGB: number;
};

type Animation =
	| {
			enabled: true;
			startEvent: 'click' | 'hover' | 'load';
	  }
	| {
			enabled: false;
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
	animation?: Animation;
	initialRotate?: {
		x?: number;
		y?: number;
		z?: number;
	};
}
