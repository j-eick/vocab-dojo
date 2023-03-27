import Button from './Button';

export default function StartLearning() {
	return (
		<Button href="/session" onClick={() => console.log('test')} variant={'startLearning'}>
			Study
		</Button>
	);
}
