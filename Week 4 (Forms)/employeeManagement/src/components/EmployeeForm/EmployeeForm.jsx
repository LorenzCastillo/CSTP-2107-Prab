import styles from "./EmployeeForm.module.css";

const EmployeeForm = () => {
	return (
		<form className={styles.formContainer}>
			<div className={styles.formControl}>
				<label htmlFor="name">Name</label>
				<input type="text" placeholder="Enter Employee Name" />
			</div>

			<div className={styles.formControl}>
				<label htmlFor="email">Email</label>
				<input type="text" placeholder="Enter Employee Email" />
			</div>

			<div className={styles.formControl}>
				<label htmlFor="date">Date of Joining</label>
				<input type="text" placeholder="Enter Joining Date" />
			</div>

			<div className={styles.formControl}>
				<label htmlFor="experience">Has Experience</label>
				<select name="experienece">

				</select>
			</div>
		</form>
	);
};

export default EmployeeForm;