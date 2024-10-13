import Item from "./Item";

export default function ItemList({items}) {
	return (
		<ul className="item_list">
			{items.map((item, index) => (
				<Item key={index} title={item.title} description={item.description}></Item>
			))}
		</ul>
	);
}
