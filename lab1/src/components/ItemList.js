export default function ItemList({items}) {
	return (
		<ul className="item_list">
			{items.map((item, index) => (
				<li key={index}>
					<h3>{item.title}</h3>
					<p>{item.description}</p>
				</li>
			))}
		</ul>
	);
}
