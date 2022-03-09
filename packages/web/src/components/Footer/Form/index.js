import { useRef } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import styles from './styles.module.scss';

function Form() {
	const mailchimpURL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;
	// eslint-disable-next-line no-useless-escape
	const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	const messageRef = useRef(null);

	const formPreventDefault = (e) => {
		e.preventDefault();
	};

	const CustomInput = ({ status, message, onValidated }) => {
		let email;
		const submit = async () => {
			email.value.match(mailFormat);
			email &&
				email.value.indexOf('@') > -1 &&
				(await onValidated({
					EMAIL: email.value,
				}));
		};

		return (
			<>
				<form className={styles.form} onSubmit={formPreventDefault}>
					<input
						ref={(node) => (email = node)}
						type="email"
						placeholder="your favorite e-mail"
					/>
					<button type="submit" onClick={submit}>
						Submit
					</button>
					{status === 'sending' && (
						<p ref={messageRef} className={styles.sending}>
							sending...
						</p>
					)}
					{status === 'success' && (
						<p ref={messageRef} className={styles.success}>
							done!
						</p>
					)}
					{status === 'error' && (
						<p ref={messageRef} className={styles.error}>
							this e-mail is already subscribed
						</p>
					)}
				</form>
			</>
		);
	};

	return (
		<>
			<MailchimpSubscribe
				url={mailchimpURL}
				render={({ subscribe, status, message }) => (
					<CustomInput
						status={status}
						message={message}
						onValidated={(formData) => subscribe(formData)}
					/>
				)}
			/>
		</>
	);
}

export default Form;
