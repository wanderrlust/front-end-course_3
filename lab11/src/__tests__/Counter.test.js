import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "../components/Counter";

describe("Counter component", () => {
	test("Відображає початкове значення лічильника", () => {
		render(<Counter />);
		const counterValue = screen.getByText(/Лічильник: 0/i);
		expect(counterValue).toBeInTheDocument();
	});

	test("Збільшує значення лічильника при натисканні кнопки", () => {
		render(<Counter />);
		const button = screen.getByRole("button", { name: /Збільшити/i });
		fireEvent.click(button);
		const counterValue = screen.getByText(/Лічильник: 1/i);
		expect(counterValue).toBeInTheDocument();
	});

	test("Скидає значення лічильника при натисканні кнопки 'Скинути'", () => {
		render(<Counter />);
		const incrementButton = screen.getByRole("button", {
			name: /Збільшити/i,
		});
		const resetButton = screen.getByRole("button", { name: /Скинути/i });

		fireEvent.click(incrementButton);
		let counterValue = screen.getByText(/Лічильник: 1/i);
		expect(counterValue).toBeInTheDocument();

		fireEvent.click(resetButton);
		counterValue = screen.getByText(/Лічильник: 0/i);
		expect(counterValue).toBeInTheDocument();
	});
});
