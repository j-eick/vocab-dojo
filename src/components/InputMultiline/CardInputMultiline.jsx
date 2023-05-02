import InputMultiline from '.';

export default function CardInputMultiline({id, text, name, onChange, variant, placeholder}) {
	return (
		<InputMultiline
			id={id}
			type={text}
			name={name}
			onChange={onChange}
			variant={variant}
			placeholder={placeholder}
		/>
	);
}
