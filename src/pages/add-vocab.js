import {useState} from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';

console.clear();

const StyledForm = styled.form``;

export default function AddVocab() {
	const [card, setCard] = useState({
		frontSide: '',
		backSide: '',
	});

	const handleChange = event => {
		setCard({
			...card,
			[event.target.id]: event.target.value,
		});
	};
	const handleSubmit = event => {
		event.preventDefault();
		console.log(card.frontSide + ' ' + card.backSide);
		event.target.elements.frontSide.value = '';
		event.target.elements.backSide.value = '';
	};

	return (
		<>
			<Layout>
				<StyledForm onSubmit={handleSubmit}>
					<label htmlFor="frontSide">
						Enter vocabulary
						<input
							id="frontSide"
							type="text"
							onChange={handleChange}
							value={setCard.frontSide}
						/>
					</label>
					<label htmlFor="backSide">
						Enter explanation
						<input
							id="backSide"
							type="text"
							onChange={handleChange}
							value={setCard.backSide}
						/>
					</label>

					{/*  ----- SUBMIT -----  */}
					<input type="submit" value="Submit" />
				</StyledForm>
			</Layout>
		</>
	);
}
