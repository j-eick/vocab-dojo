import styled from 'styled-components';

export const StyledUl = styled.ul`
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;

	border: 1px solid black;
`;

export const StyledLi = styled.li`
	width: 100%;

	display: grid;
	grid-template-columns: 1fr;
	gap: 15px;

	align-items: left;
	background-color: lightcoral;
`;

export const StyledCard = styled.div`
	padding: 0 20px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 15px;
`;

export const StyledP = styled.p`
	padding: 0 10px;
	background-color: lightcyan;
`;
