import styled from 'styled-components';

import Header from './Header.jsx';
import Nav from './Nav.jsx';

const StyledMain = styled.main`
	display: grid;
	grid-template-columns: 1fr;
	min-height: calc(100vh - 160px);
	background-color: orange;
`;

export default function Layout({children}) {
	return (
		<>
			<Header />
			<StyledMain>{children}</StyledMain>
			<Nav />
		</>
	);
}
