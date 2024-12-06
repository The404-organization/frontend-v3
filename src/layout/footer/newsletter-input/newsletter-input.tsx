'use client';

import { SubscribeIcon } from '@/assets/icons/subscribe-icon';
import { outfitFont } from '@/shared/ui/fonts';
import clsx from 'clsx';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import styles from './newsletter-input.module.css';

interface Values {
	email: string;
}

const validationSchema = Yup.object().shape({
	email: Yup.string().email().required(),
});

export const NewsletterInput = () => {
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
					email: values.email,
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
			initialValues={{ email: '' }}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}>
			{({ isSubmitting }) => (
				<Form className={styles.wrapper}>
					<Field
						id="email"
						name="email"
						placeholder="Your Email"
						className={clsx(styles.input, outfitFont.className)}
					/>
					<button className={styles.subscribeButton} type="submit">
						{isSubmitting ? (
							<div className={styles.loader} />
						) : (
							<SubscribeIcon />
						)}
					</button>
				</Form>
			)}
		</Formik>
	);
};
