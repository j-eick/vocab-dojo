export default function LabelInput({name, value, onChange, children}) {
	return (
		<>
			<label>
				{children}
				<input
					type="text"
					name={name}
					value={value}
					onChange={event => onChange(event.target.value)}
				/>
			</label>
		</>
	);
}
