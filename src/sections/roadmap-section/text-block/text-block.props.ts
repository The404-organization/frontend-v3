import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TextBlockProps
	extends Omit<
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
		'title'
	> {
	title: {
		label: string;
		color: 'blue' | 'purple';
	};
	textItems: {
		title: string;
		items: string[];
	}[];
}
