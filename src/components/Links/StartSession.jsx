import LinkTemplate from '.';

export default function StartSession({variant}) {
	return (
		<LinkTemplate href="/session" variant={variant}>
			<div>Lets go</div>
		</LinkTemplate>
	);
}
