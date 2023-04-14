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
	background-color: lightgoldenrodyellow;
`;
const StyledUl = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: inherit;
`;
const StyledLi = styled.li`
	display: grid;
	justify-content: center;
	margin: 0 20px;
	padding: 10px 30px;
	border: 1px solid black;
	border-radius: 20px;
`;

export default function Nav() {
	return (
		<StyledNav>
			<StyledUl>
				<StyledLi>
					<Link href="/" aria-label="Home">
						🏠
					</Link>
				</StyledLi>
				<StyledLi>
					<Link href="/create-vocab" aria-label="Add new vocab">
						🧸
					</Link>
				</StyledLi>
				<StyledLi>
					{/* <Link href={`/allVocabs/${id}`}>📂</Link> */}
					<Link href="/allVocabs">📂</Link>
				</StyledLi>
			</StyledUl>
		</StyledNav>
	);
}
