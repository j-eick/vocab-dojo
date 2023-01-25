import styled from 'styled-components';

console.clear();

const StyledNav = styled.nav`
	display: grid;
	align-items: center;
	justify-content: space-around;
	position: absolute;
	bottom: 0;
	width: 90vw;
	min-height: 60px;
	background-color: lightgoldenrodyellow;
`;
const StyledUl = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: inherit;
`;
const StyledLi = styled.li`
	display: grid;
	justify-content: center;
	margin: 0 20px;
	padding: 5px 0;
	border: 1px solid black;
	border-radius: 20px;
`;

export default function Footer() {
	return (
		<StyledNav>
			<StyledUl>
				<StyledLi>🏠</StyledLi>
				<StyledLi>📂</StyledLi>
				<StyledLi>🧸</StyledLi>
			</StyledUl>
		</StyledNav>
	);
}
