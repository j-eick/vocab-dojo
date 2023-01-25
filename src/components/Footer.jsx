import styled from 'styled-components';

const StyledNav = styled.nav`
	background-color: lightgoldenrodyellow;
	position: absolute;
	bottom: 0;
	min-height: 9%;
	width: 90%;
`;

export default function Footer() {
	return (
		<StyledNav>
			<div>© 2022 by Josh</div>
		</StyledNav>
	);
}
