import styled from 'styled-components';

import Footer from './Footer.jsx';
import Header from './Header.jsx';

const StyledMain = styled.main`
	display: grid;
	grid-template-columns: 1fr;
	width: 375px;
	min-height: calc(100vh - 160px);
	background-color: orange;
	font-size: ;
`;

export default function Layout({children}) {
	return (
		<>
			<Header />
			<StyledMain>{children}</StyledMain>
			<Footer />
		</>
	);
}
