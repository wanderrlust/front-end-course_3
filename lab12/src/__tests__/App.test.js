import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

jest.mock("../components/UserProfile", () => {
	return {
		__esModule: true,
		default: ({ fetchUserData }) => {
			const mockData = {
				name: "Іван Кучмак",
				age: 20,
				email: "kuchmak@gmail.com",
			};
			return (
				<div>
					<h2>Профіль користувача</h2>
					<p>Ім'я: {mockData.name}</p>
					<p>Вік: {mockData.age}</p>
					<p>Email: {mockData.email}</p>
				</div>
			);
		},
		fetchUserData: jest.fn().mockResolvedValue({
			name: "Іван Кучмак",
			age: 20,
			email: "kuchmak@gmail.com",
		}),
	};
});

test("Відображається компонент Header", () => {
	render(<App />);
	const headerElement = screen.getByText(/Заголовок додатку/i);
	expect(headerElement).toBeInTheDocument();
});

test("Відображається компонент UserProfile після натискання кнопки", async () => {
	render(<App />);

	const buttonElement = screen.getByText(/Показати профіль користувача/i);
	fireEvent.click(buttonElement);

	const nameElement = await screen.findByText(/Ім'я: Іван Кучмак/i);
	const ageElement = await screen.findByText(/Вік: 20/i);
	const emailElement = await screen.findByText(/Email: kuchmak@gmail.com/i);

	expect(nameElement).toBeInTheDocument();
	expect(ageElement).toBeInTheDocument();
	expect(emailElement).toBeInTheDocument();
});
