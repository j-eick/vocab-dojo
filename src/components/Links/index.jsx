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
			padding: 12px 20px;
			border-radius: 15px;
			cursor: pointer;

			box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 4px;
			background-color: #dde7f4;
			&:hover {
				background: #e1e8f3;
			}
		`}
`;
