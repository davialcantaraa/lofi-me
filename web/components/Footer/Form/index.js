import MailchimpSubscribe from 'react-mailchimp-subscribe';
import styles from './styles.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineError, MdCheckCircle } from 'react-icons/md';

const toastErrorIcon = () => {
	return <MdOutlineError size={40} />;
};
const toastSuccessIcon = () => {
	return <MdCheckCircle size={40} />;
};

const toastOptions = {
	errorOption: {
		className: styles.toastError,
		progressClassName: styles.toastErrorProgress,
		icon: toastErrorIcon,
	},
	successOption: {
		className: styles.toastSuccess,
		progressClassName: styles.toastSuccessProgress,
		icon: toastSuccessIcon,
	},
};

function Form() {
	const mailchimpURL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;
	// eslint-disable-next-line no-useless-escape
	const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	const formPreventDefault = (e) => {
		e.preventDefault();
	};

	const CustomInput = ({ status, message, onValidated }) => {
		let email;
		const submit = async () => {
			if (email.value.match(mailFormat)) {
				const sendMail = async () => {
					email &&
						email.value.indexOf('@') > -1 &&
						(await onValidated({
							EMAIL: email.value,
						}));
				};
				await sendMail();
				status === 'error' &&
					toast.error('this e-mail is already subscribed, try another one');
				status === 'success' && toast.success('done!');
				status = null;
			} else {
				toast.error('invalid email', toastOptions.errorOption);
				status = null;
			}
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
				</form>
				<div style={{ display: 'none' }}></div>
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
			<ToastContainer limit={1} autoClose={2000} />
		</>
	);
}

export default Form;
