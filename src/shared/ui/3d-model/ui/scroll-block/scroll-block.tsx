import { createPortal } from 'react-dom';
import { ScrollBlockProps } from './scroll-block.props';

export const ScrollBlock = ({ position, ...props }: ScrollBlockProps) => {
	if (typeof window === 'undefined' || window.innerWidth > 600) {
		return null;
	}

	return (
		<>
			{createPortal(
				<div
					{...props}
					style={{
						position: 'absolute',
						zIndex: 100,
						width: position?.width,
						height: position?.height,
						top: position?.top,
						left: position?.left,
					}}
				/>,
				document.body,
			)}
		</>
	);
};
