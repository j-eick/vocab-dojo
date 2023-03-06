export default function Button({type = 'button', onClick, children}) {
	return (
		<>
			<button type={type} onClick={onClick}>
				{children}
			</button>
		</>
	);
}
