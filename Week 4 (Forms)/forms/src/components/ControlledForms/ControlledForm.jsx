import { useState } from "react";
import styles from "./ControlledForm.module.css";

const ControlledForm = () => {

	// const [name, setName] = useState();
	// const [email, setEmail] = useState();
	// const [password, setPassword] = useState();

	const [userData, setUserData] = useState({});

	const handleSubmitForm = (event) => {
		event.preventDefault();
		console.log(userData);
	};

	return (
		<>
			<form className={styles.formContainer} onSubmit={handleSubmitForm}>
				<h1>SIGNUP FORM!</h1>
				<div className={styles.formControl}>
					<label htmlFor="name">Name</label>
					<input required onChange={(event) => setUserData({...userData, name: event.target.value})} value={userData.name} type="text" placeholder="Enter Name"/>
				</div>

				<div className={styles.formControl}>
					<label htmlFor="email">Email</label>
					<input required onChange={(event) => setUserData({...userData, email: event.target.value})} value={userData.email} type="text" placeholder="Enter Email"/>
				</div>

				<div className={styles.formControl}>
					<label htmlFor="password">Password</label>
					<input required onChange={(event) => setUserData({...userData, password: event.target.value})} value={userData.password} type="password" placeholder="Enter Password"/>
				</div>

				<button className={styles.button}>Submit</button>
			</form>

			<p>
        Name: {userData.name} <br />
        Email: {userData.email} <br />
        Password: {userData.password}
			</p>
		</>
	);
};

export default ControlledForm;