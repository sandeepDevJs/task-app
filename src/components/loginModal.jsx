import React, { useState } from "react";
import {
	Modal,
	Button,
	Form,
	FormGroup,
	FormControl,
	FormLabel,
} from "react-bootstrap";
import axios from "axios";

const LoginModal = ({ setrerender }) => {
	const [id, setid] = useState();
	const [pass, setpass] = useState();

	const onSubmit = (e) => {
		e.preventDefault();
		axios
			.get("http://localhost/task_api/login.php", {
				params: {
					id,
					pass,
				},
			})
			.then((res) => {
				if (res.data.success) {
					setrerender("rerender");
					localStorage.setItem("loginInfo", JSON.stringify(res.data.data));
					alert("LoggedIn Successfully!");
				} else {
					alert(res.data.message);
				}
			})
			.catch((err) => alert(err));
	};

	return (
		<Modal show>
			<Form onSubmit={onSubmit}>
				<Modal.Header closeButton>
					<Modal.Title>Form</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<FormGroup>
						<FormLabel>id</FormLabel>
						<FormControl
							type="text"
							value={id}
							name={"id"}
							onChange={(e) => setid(e.target.value)}
						/>
					</FormGroup>
					<FormGroup>
						<FormLabel>Password</FormLabel>
						<FormControl
							value={pass}
							type="password"
							name="password"
							onChange={(e) => setpass(e.target.value)}
						/>
					</FormGroup>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" type="submit" onClick={(e) => onSubmit(e)}>
						Submit
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
};

export default LoginModal;
