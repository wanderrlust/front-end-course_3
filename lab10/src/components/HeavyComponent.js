import React, { useState, useEffect } from "react";

const HeavyComponent = () => {
	console.log("HeavyComponent was rendered");

	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			// Симуляция задержки загрузки
			await new Promise((resolve) => setTimeout(resolve, 2000));
			// Генерация большого массива данных
			const generatedData = Array.from({ length: 1000 }, (_, i) => ({
				id: i + 1,
				name: `User ${i + 1}`,
				email: `user${i + 1}@example.com`,
			}));
			setData(generatedData);
		};
		fetchData();
	}, []);

	return (
		<div className="heavy-comp">
			<h2>Heavy Component</h2>
			<ul>
				{data.map((item) => (
					<li key={item.id}>
						<strong>{item.name}</strong> - {item.email}
					</li>
				))}
			</ul>
		</div>
	);
};

export default HeavyComponent;
