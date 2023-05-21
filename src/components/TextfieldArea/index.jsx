import styled, {css} from 'styled-components';

export default function TextfieldArea({children, variant}) {
	return <StyledTextfieldArea variant={variant}>{children}</StyledTextfieldArea>;
}

const StyledTextfieldArea = styled.div`
	${({variant}) =>
		variant === 'textarea_hardToRemember' &&
		css`
			margin-top: 100px;
			margin-bottom: 50px;
			width: 80%;

			display: flex;
			flex-direction: column;
		`}

	${({variant}) =>
		variant === 'textarea_lastAdded' &&
		css`
			margin-bottom: 50px;
			width: 80%;

			display: flex;
			flex-direction: column;
		`}
`;
