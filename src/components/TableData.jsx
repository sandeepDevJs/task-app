import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import ModalBox from "./Modal";
import { loginCheck } from "../utils/loginCheck";

const TableData = ({ data, setrerender }) => {
	const [err, setErr] = useState();
	const [success, setsuccess] = useState(0);

	const [showModal, setshowModal] = useState(0);
	const [taskId, settaskId] = useState(0);

	const deleteTask = (id) => {
		axios
			.get("http://localhost/task_api/deleteTak.php?task_id=" + id)
			.then((res) => {
				if (res.data.success) {
					setrerender(id - 1);
					setsuccess(1);
				} else {
					setErr(res.data.message);
				}
			})
			.catch((err) => setErr(err));
	};

	const editTask = () => {
		setshowModal(1);
	};

	if (success) {
		alert("data deleted!");
		setsuccess(0);
	}

	let userInfo = loginCheck();
	console.log(userInfo);

	return (
		<div>
			{err && <p className="text-danger">{err.message}</p>}
			<ModalBox
				show={showModal}
				taskid={taskId}
				handleClose={() => setshowModal(0)}
				setrerender={setrerender}
			/>
			<Table hover responsive>
				<thead>
					<tr>
						<th>id</th>
						<th>Description</th>
						<th>Due</th>
						<th>Status</th>
						<th>AssignedBy</th>
						<th>AssignedTo</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{data.map((dt) => (
						<tr key={dt.task_id}>
							<td>{dt.task_id}</td>
							<td>{dt.description}</td>
							<td>{dt.dueDate}</td>
							<td>{dt.status}</td>
							<td>{dt.assignedBy}</td>
							<td>{dt.assignedTo}</td>
							<td>
								<Button
									variant="danger"
									onClick={() => deleteTask(dt.task_id)}
									disabled={userInfo.role === "employee"}
								>
									Delete
								</Button>
							</td>
							<td>
								<Button
									variant="success"
									onClick={() => {
										settaskId(dt.task_id);
										editTask();
									}}
									disabled={userInfo.role === "employee"}
								>
									Edit
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default TableData;
