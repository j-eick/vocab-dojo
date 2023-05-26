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
							<StyledDiv>
								<Icon path={mdiHomeVariant} size={2} />
							</StyledDiv>
						) : (
							<Icon path={mdiHomeVariantOutline} size={2} />
						)}
					</Link>
				</StyledLi>
				<StyledLi>
					<Link href="/create-vocab" aria-label="Add new vocab">
						{router.asPath === '/create-vocab' ? (
							<StyledDiv>
								<Icon path={mdiCardPlus} size={2} />
							</StyledDiv>
						) : (
							<Icon path={mdiCardPlusOutline} size={2} />
						)}
					</Link>
				</StyledLi>
				<StyledLi>
					<Link href="/allVocabs">
						{router.asPath === '/allVocabs' ? (
							<StyledDiv>
								<Icon path={mdiListBox} size={2} />
							</StyledDiv>
						) : (
							<Icon path={mdiListBoxOutline} size={2} />
						)}
					</Link>
				</StyledLi>
			</StyledUl>
		</StyledNav>
	);
}

const StyledNav = styled.nav`
	height: 60px;
	bottom: 0;

	background: rgb(221, 231, 244);
	background: linear-gradient(55deg, #acc1dd 10%), #ceddf1 0%;

	@media (min-width: 376px) {
		border-bottom-left-radius: 35px;
		border-bottom-right-radius: 35px;
		/* border-left: 1px solid whitesmoke;
		border-right: 1px solid whitesmoke;
		border-bottom: 1px solid whitesmoke; */

		@media (min-width: 500px), (min-height: 750px) {
			box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
		}
	}
`;
const StyledUl = styled.ul`
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;
const StyledLi = styled.li`
	height: 60px;
	width: 70px;

	display: grid;
	place-items: center;

	cursor: pointer;
`;

const StyledDiv = styled.div`
	width: 50px;
	padding: 0px 10px;

	border-bottom: 2px solid black;
	border-radius: 5px;
`;
