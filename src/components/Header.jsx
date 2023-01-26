import styled from 'styled-components';
// import Link from 'next/link';

const StyledHeader = styled.header`
	display: grid;
	place-items: center;
	width: 90%;
	height: 100px;
	background-color: yellow;
`;

const StyledH1 = styled.h1`
	font-size: var(--fontsize_HeaderTitle);
`;

export default function Header() {
	return (
		<StyledHeader>
			<StyledH1>General Info</StyledH1>
		</StyledHeader>
	);
}
