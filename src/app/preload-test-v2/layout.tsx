import { ReactNode } from 'react';

const mobileImageSrc =
	'https://i.ytimg.com/vi/Tfu252cYFVc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBd6FHPqn8ohOm8BPCoYjxTL7HvFA';
const mobileMedia = '(max-width: 768px)';

export default function PreloadTestLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<>
			<link
				rel="preload"
				as="image"
				href={mobileImageSrc}
				media={mobileMedia}
				fetchPriority="high"
			/>
			{children}
		</>
	);
}

