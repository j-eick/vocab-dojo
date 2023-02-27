import styled from 'styled-components';

import Header from './Header.jsx';
import Nav from './Nav.jsx';

const Canvas = styled.div`
	display: grid;
	place-items: center;
	width: 100vw;
	min-height: 100vh;

	background-color: lightgreen;
`;

const ResponsiveContainer = styled.div`
	width: 100%;
	min-height: 100%;

	@media (min-width: 376px) {
		position: relative;
		width: 375px;
		min-height: 667px;
		border: 1px solid black;
	}
`;

const StyledMain = styled.main`
	display: grid;
	grid-template-columns: 1fr;
	min-height: calc(100vh - 160px);
	background-color: orange;
`;

export default function Layout({children}) {
	return (
		<>
			<Canvas>
				<ResponsiveContainer>
					<Header />
					<StyledMain>{children}</StyledMain>
					<Nav />
				</ResponsiveContainer>
			</Canvas>
		</>
	);
}
