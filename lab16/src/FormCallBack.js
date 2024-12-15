import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function App() {
	const validationSchema = Yup.object({
		name: Yup.string().required("Ім'я є обов'язковим"),
		email: Yup.string()
			.email('Невірний формат електронної пошти')
			.required("Електронна пошта є обов'язковою"),
		message: Yup.string()
			.min(10, 'Повідомлення повинно містити щонайменше 10 символів')
			.required("Повідомлення є обов'язковим"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = (data) => {
		console.log('Дані форми:', data);
	};

	return (
		<div className="container">
			<h1>Форма зворотного зв'язку</h1>
			<form onSubmit={handleSubmit(onSubmit)} className="form">
				<div className="form-group">
					<label htmlFor="name">Ім'я</label>
					<input id="name" type="text" {...register('name')} />
					{errors.name && (
						<p className="error">{errors.name.message}</p>
					)}
				</div>

				<div className="form-group">
					<label htmlFor="email">Електронна пошта</label>
					<input id="email" type="email" {...register('email')} />
					{errors.email && (
						<p className="error">{errors.email.message}</p>
					)}
				</div>

				<div className="form-group">
					<label htmlFor="message">Повідомлення</label>
					<textarea id="message" rows="5" {...register('message')} />
					{errors.message && (
						<p className="error">{errors.message.message}</p>
					)}
				</div>

				<button type="submit" className="submit-btn">
					Надіслати
				</button>
			</form>
		</div>
	);
}

export default App;
