import {mdiHomeVariant, mdiHomeVariantOutline} from '@mdi/js';
import {mdiCardPlus, mdiCardPlusOutline} from '@mdi/js';
import {mdiListBox, mdiListBoxOutline} from '@mdi/js';
import Icon from '@mdi/react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styled from 'styled-components';

console.clear();

export default function Nav() {
	const router = useRouter();

	return (
		<StyledNav>
			<StyledUl>
				<StyledLi>
					<Link href="/" aria-label="Home">
						{router.asPath === '/' ? (
							<Icon path={mdiHomeVariant} size={2.2} />
						) : (
							<Icon path={mdiHomeVariantOutline} size={2.2} />
						)}
					</Link>
				</StyledLi>
				<StyledLi>
					<Link href="/create-vocab" aria-label="Add new vocab">
						{router.asPath === '/create-vocab' ? (
							<Icon path={mdiCardPlus} size={2.2} />
						) : (
							<Icon path={mdiCardPlusOutline} size={2.2} />
						)}
					</Link>
				</StyledLi>
				<StyledLi>
					<Link href="/allVocabs">
						{router.asPath === '/allVocabs' ? (
							<Icon path={mdiListBox} size={2.2} />
						) : (
							<Icon path={mdiListBoxOutline} size={2.2} />
						)}
					</Link>
				</StyledLi>
			</StyledUl>
		</StyledNav>
	);
}

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
