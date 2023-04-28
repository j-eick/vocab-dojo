import styled, {css} from 'styled-components';

export default function TextfieldArea({children, variant}) {
	return <StyledTextfieldArea variant={variant}>{children}</StyledTextfieldArea>;
}

const StyledTextfieldArea = styled.div`
	${({variant}) =>
		variant === 'textFieldArea' &&
		css`
			margin-top: 20px;
			display: flex;
			flex-direction: column;

			width: 80%;
			&: nth-child(1) {
				margin-top: 120px;
			}
			&: nth-child(2) {
				margin-bottom: 50px;
			}
		`}
`;
