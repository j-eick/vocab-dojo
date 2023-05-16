import {mdiCards} from '@mdi/js';
import Icon from '@mdi/react';
import styled from 'styled-components';

import LinkTemplate from '.';

export default function StartSessionLink({variant}) {
	return (
		<LinkTemplate href="/session" variant={variant}>
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
