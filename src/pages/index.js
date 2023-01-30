// import {nanoid} from 'nanoid';
import Head from 'next/head';
// import {useRouter} from 'next/router';
// import {useState} from 'react';

// import Button from '../components/Button';
import Layout from '../components/Layout';
// import useFetch from '../hooks/useFetch';
// import useStore from '../hooks/useStore';

console.clear();

export default function HomePage() {
	// const {asPath} = useRouter();
	// // Data
	// const {data, loading, error} = useFetch('/api/hello');

	// // Local state
	// const [id, setId] = useState(null);

	// // Global state
	// const counter = useStore(state => state.counter);
	// const decrementCounter = useStore(state => state.decrementCounter);
	// const incrementCounter = useStore(state => state.incrementCounter);
	// const setCounter = useStore(state => state.setCounter);

	return (
		<Layout>
			<Head>
				<title key="title">Vocab-Dojo</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
		</Layout>
	);
}
