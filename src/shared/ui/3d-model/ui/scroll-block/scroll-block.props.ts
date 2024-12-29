import { ElementPosition } from '@/shared/types/element-position';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ScrollBlockProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	position: ElementPosition | null;
}
