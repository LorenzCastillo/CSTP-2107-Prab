import { useEffect, useRef, useState } from "react";
import styles from "./UncontrolledForm.module.css";

const UncontrolledForm = () => {

	const [userInfo, setUserInfo] = useState({});
	const [isFormSubmitted, setFormSubmitted] = useState(false);

	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	useEffect(() => {
		console.log("APPLICATION LOADING...");

		return () => {
			console.log("COMPONENT IS DESTROYED");
		};

	}, [isFormSubmitted]);

	const handleSubmitForm = (event) => {
		event.preventDefault();
		setUserInfo({
			name: nameRef.current.value,
			email: emailRef.current.value,
			password: passwordRef.current.value
		});

		setFormSubmitted((prevState) => !prevState);
	};

	return (
		<>
			<form className={styles.formContainer} onSubmit={handleSubmitForm}>
				<h1>SIGNUP FORM!</h1>
				<div className={styles.formControl}>
					<label htmlFor="name">Name</label>
					<input ref={nameRef} required type="text" placeholder="Enter Name"/>
				</div>

				<div className={styles.formControl}>
					<label htmlFor="email">Email</label>
					<input ref={emailRef} required type="text" placeholder="Enter Email"/>
				</div>

				<div className={styles.formControl}>
					<label htmlFor="password">Password</label>
					<input ref={passwordRef} required type="password" placeholder="Enter Password"/>
				</div>

				<button className={styles.button}>Submit</button>
			</form>

			<p>
				Name: {userInfo.name} <br />
				Email: {userInfo.email} <br />
				Password: {userInfo.password}
			</p>
		</>
	);
};

export default UncontrolledForm;