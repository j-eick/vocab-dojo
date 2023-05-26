import styled from 'styled-components';

// import ProfileButton from './Button/ProfileButton.jsx';
import Nav from './Nav.jsx';

const Canvas = styled.div`
	display: grid;
	place-items: center;
	width: 100vw;
	min-height: 100vh;
	background-color: #c1d6ec;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23d4e4f1' fill-opacity='0.3' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const ResponsiveContainer = styled.div`
	position: relative;
	width: 100%;
	min-height: 100%;

	@media (min-width: 376px) {
		width: 375px;
		min-height: 667px;
	}
`;

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: calc(667px - 60px);
	background: rgb(221, 231, 244);
	background: linear-gradient(55deg, rgba(221, 231, 244, 1) 0%, rgba(191, 206, 226, 1) 10%);

	@media (min-width: 376px) {
		border-top-right-radius: 35px;
		border-top-left-radius: 35px;
		border-top: 1px solid whitesmoke;
		border-right: 1px solid whitesmoke;
		border-left: 1px solid whitesmoke;

		@media (min-width: 500px), (min-height: 750px) {
			box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
		}
	}
`;

export default function Layout({children}) {
	return (
		<>
			<Canvas>
				<ResponsiveContainer>
					<StyledMain>{children}</StyledMain>
					<Nav />
				</ResponsiveContainer>
			</Canvas>
		</>
	);
}
