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
			height: 20px;

			margin-top: 30px;
			padding: 20px 30px 30px 30px;
			border: none;
			border-radius: 10px;
			text-decoration: none;
			cursor: pointer;

			background-color: lightblue;
		`}
`;
