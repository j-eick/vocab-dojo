import Link from 'next/link';
import styled, {css} from 'styled-components';

console.clear();

export default function LinkTemplate({children, href, variant}) {
	return (
		<>
			<Link href={href} passHref>
				<CustomLinkDesign variant={variant}>{children}</CustomLinkDesign>
			</Link>
		</>
	);
}

const CustomLinkDesign = styled.div`
	${({variant}) =>
		variant === 'startSession' &&
		css`
			padding: 15px 30px;
			border-radius: 10px;
			text-decoration: none;
			cursor: pointer;

			background-color: lightblue;
		`}
`;
