import {useState} from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';

console.clear();

const StyledForm = styled.form``;

export default function AddVocab() {
	const [input, setInput] = useState('');

	const submitHandler = () => {
		//
	};

	return (
		<>
			<Layout>
				<StyledForm onSubmit={submitHandler}>
					<label>
						Name:
						<input
							type="text"
							value={input}
							onChange={e => {
								setInput(e.target.value);
							}}
						/>
					</label>
					<input type="submit" value="Submit" />
				</StyledForm>
			</Layout>
		</>
	);
}
