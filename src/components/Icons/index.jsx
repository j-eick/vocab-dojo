import styled from 'styled-components';

export default function IconTemplate({children}) {
	return <StyledIcon>{children}</StyledIcon>;
}

const StyledIcon = styled.div`
	position: absolute;
	top: 15px;
	right: 15px;
`;
