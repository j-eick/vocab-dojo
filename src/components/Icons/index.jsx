import styled, {css} from 'styled-components';

export default function IconTemplate({children, variant}) {
	return <StyledIcon variant={variant}>{children}</StyledIcon>;
}

const StyledIcon = styled.div`
	position: absolute;
	top: 15px;
	right: 15px;
	cursor: pointer;

	${({variant}) =>
		variant === 'close_icon' &&
		css`
			padding-top: 5px;
			padding-left: 5px;
			padding-right: 4px;

			&:hover {
				border: 1px solid whitesmoke;
				border-radius: 50%;
			}
		`}
`;
