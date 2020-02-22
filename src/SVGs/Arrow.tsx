import React from 'react';

interface ArrowSVGProps {
	isRight?: boolean;
}
export const Arrow = (arrowProps: ArrowSVGProps) => {
	const className = arrowProps.isRight ? "arrow rightArrow" : "arrow";
	return (
		<svg className={className} width="11" height="17" viewBox="0 0 11 17" xmlns="http://www.w3.org/2000/svg">
			<title>Artboard 16</title>
			<path d="M2.632 10l6.53 6 1.069-.9-7.272-6.6 7.183-6.6-.98-.9-6.53 6L1 8.5 2.632 10z" fill="#000000" fillRule="evenodd"/>
		</svg>
	)
};