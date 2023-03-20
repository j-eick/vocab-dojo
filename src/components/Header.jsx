import styled from 'styled-components';

import ProfileButton from './Button/ProfileButton';

const StyledHeader = styled.header`
	width: 100%;
	height: 100px;

	padding: 0 5%;
	display: flex;
	align-items: center;

	background-color: yellow;
`;

console.clear();

export default function Header() {
	return (
		<>
			<StyledHeader>
				<ProfileButton />
			</StyledHeader>
		</>
	);
}
