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

const FormBox = ({ handleClose, data, taskid, setrerender }) => {
	const [description, setdescription] = useState(data.description);
	const [due, setdue] = useState(data.dueDate);
	const [assignedBy, setassignedBy] = useState(data.assignedBy);
	const [assignedTo, setassignedTo] = useState(data.assignedTo);
	const [status, setstatus] = useState(data.status);

	const onSubmit = (e) => {
		e.preventDefault();
		axios
			.get("http://localhost/task_api/updateTasks.php?id=" + taskid, {
				params: { description, dueDate: due, status, assignedBy, assignedTo },
			})
			.then((res) => {
				if (res.data.success) {
					setrerender(taskid);
					alert("Data Update Successfully!");
				} else {
					alert(res.data.message);
				}
			})
			.catch((err) => alert(err));
	};

	return (
		<Form onSubmit={onSubmit}>
			<Modal.Header closeButton>
				<Modal.Title>Form</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<FormGroup>
					<FormLabel>Description</FormLabel>
					<FormControl
						type="text"
						value={description}
						name={"description"}
						onChange={(e) => setdescription(e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<FormLabel>Due</FormLabel>
					<FormControl
						value={due}
						type="date"
						name="dueDate"
						onChange={(e) => setdue(e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<FormLabel>Status</FormLabel>
					<FormControl
						value={status}
						as="select"
						name="status"
						onChange={(e) => setstatus(e.target.value)}
					>
						<option value="">Select Status</option>
						<option value={"pending"}>Pending</option>
						<option value={"completed"}>Completed</option>
					</FormControl>
				</FormGroup>
				<FormGroup>
					<FormLabel>Assigned By</FormLabel>
					<FormControl
						value={assignedBy}
						type="text"
						name="assignedBy"
						onChange={(e) => setassignedBy(e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<FormLabel>Assigned To</FormLabel>
					<FormControl
						value={assignedTo}
						name={"assignedTo"}
						type="text"
						onChange={(e) => setassignedTo(e.target.value)}
					/>
				</FormGroup>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="primary" type="submit" onClick={(e) => onSubmit(e)}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Form>
	);
};

export default FormBox;
