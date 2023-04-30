import InputMultiline from '.';

export default function FrontBackCardInput({id, text, name, onChange, variant}) {
	return <InputMultiline id={id} type={text} name={name} onChange={onChange} variant={variant} />;
}
