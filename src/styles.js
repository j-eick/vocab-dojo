import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

	:root {
		--fontsize_HeaderTitle: 2rem;
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font: inherit;
		font-size: 1rem;
		vertical-align: baseline;
	}

	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote::before, blockquote::after,
	q::before, q::after {
		content: '';
		content: none;
	}
	table {
		border-spacing: 0;
		border-collapse: collapse;
	}

	html {
		background: black;
		font-size: 62.5%;
	}

	body {
		min-height: 100vh;
		background: lightcoral;
	}
`;
