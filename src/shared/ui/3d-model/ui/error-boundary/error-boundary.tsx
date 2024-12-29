import { Component, ErrorInfo } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './error-boundary.types';

export class ErrorBoundary extends Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);

		this.state = {
			hasError: false,
		};
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log('ErrorBoundary caught an error:', error, errorInfo);

		this.setState({
			hasError: true,
		});
	}

	render() {
		if (this.state.hasError && this.props.defaultRender) {
			return this.props.defaultRender;
		}

		if (this.state.hasError) {
			return null;
		}

		return this.props.children;
	}
}
