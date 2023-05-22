import {mdiCards} from '@mdi/js';
import Icon from '@mdi/react';
import {useEffect} from 'react';
import styled from 'styled-components';

import {useToggleStore} from '../../hooks/useToggleStore';

import LinkTemplate from '.';

export default function StartSessionLink({variant}) {
	const cardsInList = useToggleStore(state => state.cardsInList);

	useEffect(() => {
		console.log(cardsInList);
	}, [cardsInList]);

	const enterDojoHandler = () => {
		console.log(cardsInList);
		if (!cardsInList) {
			return null;
		}
	};

	return (
		<LinkTemplate href="/session" variant={variant} onClick={enterDojoHandler}>
			<StyledDiv>
				<StyledP>Enter Dojo</StyledP>
				<Icon path={mdiCards} size={2} />
			</StyledDiv>
		</LinkTemplate>
	);
}

const StyledDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
`;

const StyledP = styled.p`
	padding-right: 10px;
	font-size: var(--fontsize_ButtonText);
`;
