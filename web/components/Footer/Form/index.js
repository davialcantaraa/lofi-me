import { useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

function Form() {
	const mailchimpURL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;
	const [error, setError] = useState('');
	const mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	const CustomInput = ({ status, message, onValidated }) => {
		let email;
		const submit = () => {
			if (email.value.match(mail_format)) {
				email &&
					email.value.indexOf('@') > -1 &&
					onValidated({
						EMAIL: email.value,
					});
				setError('');
			} else {
				setError('invalid e-mail');
			}
		};

		return (
			<div>
				{status === 'sending' && (
					<div style={{ color: 'blue' }}>sending...</div>
				)}
				{status === 'error' && (
					<div
						style={{ color: 'red' }}
						dangerouslySetInnerHTML={{ __html: message }}
					/>
				)}
				{status === 'success' && (
					<div
						style={{ color: 'green' }}
						dangerouslySetInnerHTML={{ __html: message }}
					/>
				)}
				{error && <div style={{ color: 'red' }}>{error}</div>}
				<input
					style={{ color: 'black' }}
					ref={(node) => (email = node)}
					type="email"
					placeholder="Your email"
				/>
				<button onClick={submit}>Submit</button>
			</div>
		);
	};

	return (
		<div>
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
		</div>
	);
}

export default Form;
