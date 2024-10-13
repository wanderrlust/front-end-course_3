export default function Item({title, description}) {
	return (
		<li className="item">
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	);
}
