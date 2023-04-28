// import {Zap} from '@styled-icons/fa-solid/Brain';

import LinkTemplate from '.';

export default function StartSession({variant}) {
	return (
		<LinkTemplate href="/session" variant={variant}>
			<p>
				Lets go
				{/* <RedZap /> */}
			</p>
		</LinkTemplate>
	);
}

// const RedZap = styled(Zap)`
// 	color: red;
// `;
