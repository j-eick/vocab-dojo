import {mdiHomeVariant} from '@mdi/js';
import {mdiCardPlus} from '@mdi/js';
import {mdiFormatListBulleted} from '@mdi/js';
import Icon from '@mdi/react';
import Link from 'next/link';
import styled from 'styled-components';

console.clear();

const StyledNav = styled.nav`
	display: grid;
	bottom: 0;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	min-height: 70px;
	background: rgb(221, 231, 244);
	background: linear-gradient(55deg, #acc1dd 10%), #ceddf1 0%;
`;
const StyledUl = styled.ul`
	width: 70vw;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`;
const StyledLi = styled.li`
	margin: 0 20px;
	padding: 10px 10px;
	cursor: pointer;
`;

export default function Nav() {
	return (
		<StyledNav>
			<StyledUl>
				<StyledLi>
					<Link href="/" aria-label="Home">
						<Icon path={mdiHomeVariant} size={2.2} />
					</Link>
				</StyledLi>
				<StyledLi>
					<Link href="/create-vocab" aria-label="Add new vocab">
						<Icon path={mdiCardPlus} size={2.2} />
					</Link>
				</StyledLi>
				<StyledLi>
					<Link href="/allVocabs">
						<Icon path={mdiFormatListBulleted} size={2.2} />
					</Link>
				</StyledLi>
			</StyledUl>
		</StyledNav>
	);
}
