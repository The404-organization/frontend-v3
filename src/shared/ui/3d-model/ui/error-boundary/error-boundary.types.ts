import { ReactNode } from 'react';

export interface ErrorBoundaryProps {
	children: ReactNode;
	defaultRender?: ReactNode;
}

export interface ErrorBoundaryState {
	hasError: boolean;
}
