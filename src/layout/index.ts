export const zoomFunction = `
function windowZoom() {
	if (typeof window === 'undefined') return;

	const zoom = Math.max(window.innerWidth / 1920, 1);
	window.document.body.style.zoom = zoom;
}

windowZoom();
window.addEventListener('resize', windowZoom);
`;
