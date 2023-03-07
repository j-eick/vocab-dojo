// import {useRouter} from 'next/router';

import {GlobalStyle} from '../styles';

console.clear();

export default function App({Component, pageProps}) {
	// const {asPath} = useRouter();
	// const getData = () => {
	// 	if (asPath === '/') {
	// 		return [{href: '/', name: 'home'}];
	// 	}
	// 	if (asPath === '/add-vocab') {
	// 		return [{href: '/add-vocab', name: 'add-vocab'}];
	// 	}
	// };
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}
