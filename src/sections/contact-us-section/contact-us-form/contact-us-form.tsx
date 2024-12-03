'use client';

import { Button } from '@/shared/ui/button/button';
import { Input } from '@/shared/ui/input/input';
import { Textarea } from '@/shared/ui/textarea/textarea';
import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import styles from './contact-us-form.module.css';

interface Values {
	name: string;
	email: string;
	message: string;
}

const validationSchema = Yup.object().shape({
	name: Yup.string().required(),
	email: Yup.string().email().required(),
	message: Yup.string().max(3000).required(),
});

export const ContactUsForm = () => {
	const handleSubmit = async (
		values: Values,
		formikHelpers: FormikHelpers<Values>,
	) => {
		try {
			await fetch('/api/submit-form', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: values.name,
					email: values.email,
					message: values.message,
				}),
			});
		} catch (error) {
			console.log('Failed to submit form:', error);
		} finally {
			formikHelpers.resetForm();
		}
	};

	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				message: '',
			}}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}>
			{({ isSubmitting }) => (
				<Form className={styles.formWrapper}>
					<img
						className={styles.background}
						src="/contact-us-section/background.png"
						alt=""
					/>
					<Input
						id="name"
						name="name"
						className={styles.nameInput}
						placeholder="Enter you name"
					/>
					<Input
						id="email"
						name="email"
						className={styles.emailInput}
						placeholder="Enter you email"
					/>
					<Textarea
						id="message"
						name="message"
						className={styles.messageInput}
						placeholder="Enter you message"
					/>
					<Button
						type="submit"
						label="Send message"
						loading={isSubmitting}
						loaderClassName={styles.loader}
						wrapperClassName={styles.button}
					/>
				</Form>
			)}
		</Formik>
	);
};
