import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function FormComponent() {
	const validationSchema = Yup.object({
		username: Yup.string().required("Ім'я користувача є обов'язковим"),
		email: Yup.string()
			.email('Невірний формат електронної пошти')
			.required("Електронна пошта є обов'язковою"),
		password: Yup.string()
			.min(6, 'Пароль має містити мінімум 6 символів')
			.required("Пароль є обов'язковим"),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref('password')], 'Паролі повинні співпадати')
			.required("Підтвердження пароля є обов'язковим"),
	});

	const handleSubmit = (values) => {
		console.log('Дані форми:', values);
	};

	return (
		<div className="container">
			<h1>Форма реєстрації</h1>
			<Formik
				initialValues={{
					username: '',
					email: '',
					password: '',
					confirmPassword: '',
				}}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{() => (
					<Form className="form">
						<div className="form-group">
							<label htmlFor="username">Ім'я користувача</label>
							<Field type="text" id="username" name="username" />
							<ErrorMessage
								name="username"
								component="div"
								className="error"
							/>
						</div>

						<div className="form-group">
							<label htmlFor="email">Електронна пошта</label>
							<Field type="email" id="email" name="email" />
							<ErrorMessage
								name="email"
								component="div"
								className="error"
							/>
						</div>

						<div className="form-group">
							<label htmlFor="password">Пароль</label>
							<Field
								type="password"
								id="password"
								name="password"
							/>
							<ErrorMessage
								name="password"
								component="div"
								className="error"
							/>
						</div>

						<div className="form-group">
							<label htmlFor="confirmPassword">
								Підтвердження пароля
							</label>
							<Field
								type="password"
								id="confirmPassword"
								name="confirmPassword"
							/>
							<ErrorMessage
								name="confirmPassword"
								component="div"
								className="error"
							/>
						</div>

						<button type="submit" className="submit-btn">
							Зареєструватися
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default FormComponent;
