// import {useRouter} from 'next/router';

import {Nunito} from '@next/font/google';

import {GlobalStyle} from '../styles';

console.clear();

const nunito = Nunito({
	subsets: ['latin'],
});

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
		<div className={nunito.className}>
			<GlobalStyle />
			<Component {...pageProps} />
		</div>
	);
}
