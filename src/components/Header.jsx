import {useRouter} from 'next/router';
import styled from 'styled-components';

const StyledHeader = styled.header`
	display: grid;
	place-items: center;
	width: 100%;
	height: 90px;
	background-color: yellow;
`;
const StyledH1 = styled.h1`
	font-size: var(--fontsize_HeaderTitle);
`;

console.clear();

export default function Header() {
	const {asPath} = useRouter();

	return (
		<>
			<StyledHeader>
				{asPath === '/' ? <StyledH1>Vocab-Dojo</StyledH1> : null}
				{asPath === '/add-vocab' ? <StyledH1>Add new Word</StyledH1> : null}
				{asPath === '/vocabList' ? <StyledH1>Vocab-List</StyledH1> : null}
			</StyledHeader>
		</>
		//<StyledH1>General Info</StyledH1>
	);
}
