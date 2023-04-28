import styled from 'styled-components';

import ProfileButton from './Button/ProfileButton.jsx';
import Nav from './Nav.jsx';

const Canvas = styled.div`
	display: grid;
	place-items: center;
	width: 100vw;
	min-height: 100vh;
	background: rgb(234, 240, 247);
	background: linear-gradient(207deg, rgba(234, 240, 247, 1) 0%, rgba(212, 223, 234, 1) 57%);
`;

const ResponsiveContainer = styled.div`
	position: relative;
	width: 100%;
	min-height: 100%;

	@media (min-width: 376px) {
		width: 375px;
		min-height: 667px;
		border: 1px solid black;
	}
`;

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: calc(667px - 60px);
	background: rgb(221, 231, 244);
	background: linear-gradient(55deg, rgba(221, 231, 244, 1) 0%, rgba(191, 206, 226, 1) 10%);
`;

export default function Layout({children}) {
	return (
		<>
			<Canvas>
				<ResponsiveContainer>
					<ProfileButton></ProfileButton>
					<StyledMain>{children}</StyledMain>
					<Nav />
				</ResponsiveContainer>
			</Canvas>
		</>
	);
}
