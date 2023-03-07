import Head from 'next/head';

import Layout from '../components/Layout';

export default function VocabListPage() {
	return (
		<Layout>
			<Head>
				<title key="title">About</title>
				<meta key="description" name="description" content="About" />
			</Head>
		</Layout>
	);
}
