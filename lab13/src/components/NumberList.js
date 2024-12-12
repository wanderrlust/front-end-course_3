import React, { useState } from 'react';
import _ from 'lodash';
import './NumberList.css';

const NumberList = () => {
	const [numbers, setNumbers] = useState(generateRandomNumbers());
	const [sortedNumbers, setSortedNumbers] = useState([]);
	const [evenNumbers, setEvenNumbers] = useState([]);
	const [average, setAverage] = useState(0);

	function generateRandomNumbers() {
		return Array.from({ length: 10 }, () =>
			Math.floor(Math.random() * 100)
		);
	}

	const handleGenerateNewList = () => {
		const newNumbers = generateRandomNumbers();
		setNumbers(newNumbers);
		setSortedNumbers([]);
		setEvenNumbers([]);
		calculateAverage(newNumbers);
	};

	const handleSortNumbers = () => {
		const sorted = _.sortBy(numbers);
		setSortedNumbers(sorted);
	};

	const handleFilterEvenNumbers = () => {
		const evens = _.filter(numbers, (num) => num % 2 === 0);
		setEvenNumbers(evens);
	};

	const calculateAverage = (nums) => {
		const avg = _.mean(nums);
		setAverage(avg);
	};

	React.useEffect(() => {
		calculateAverage(numbers);
	}, [numbers]);

	return (
		<div className="number-list-container">
			<h1 className="title">Лабораторна 13 (робота з Lodash)</h1>

			<div className="section">
				<h3 className="section-title">Початковий список чисел:</h3>
				<p className="number-list">{numbers.join(', ')}</p>
			</div>

			<div className="section">
				<h3 className="section-title">Відсортований список чисел:</h3>
				<p className="number-list">
					{sortedNumbers.length > 0
						? sortedNumbers.join(', ')
						: 'Немає даних'}
				</p>
			</div>

			<div className="section">
				<h3 className="section-title">Парні числа:</h3>
				<p className="number-list">
					{evenNumbers.length > 0
						? evenNumbers.join(', ')
						: 'Немає даних'}
				</p>
			</div>

			<div className="section">
				<h3 className="section-title">Середнє значення:</h3>
				<p className="average-value">{average.toFixed(2)}</p>
			</div>

			<div className="button-group">
				<button className="button" onClick={handleGenerateNewList}>
					Згенерувати новий список
				</button>
				<button className="button" onClick={handleSortNumbers}>
					Сортувати список
				</button>
				<button className="button" onClick={handleFilterEvenNumbers}>
					Фільтрувати парні числа
				</button>
			</div>
		</div>
	);
};

export default NumberList;
