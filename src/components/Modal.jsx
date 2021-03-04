import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import FormBox from "./FormBox";
import { loginCheck } from "../utils/loginCheck";

const ModalBox = ({ show, handleClose, taskid, setrerender }) => {
	const [singdata, setsingdata] = useState({
		description: "",
		dueDate: "",
		assignedBy: "",
		assignedTo: "",
		status: "",
	});
	const [err, setErr] = useState();

	useEffect(() => {
		axios
			.get("http://localhost/task_api/getTaskById.php?id=" + taskid)
			.then((res) => {
				if (res.data.success) {
					setsingdata(res.data.data);
				} else {
					setErr(res.data.message);
				}
			})
			.catch((err) => setErr(err));
	}, [taskid]);

	let userInfo = loginCheck();

	return (
		<div>
			{err && <p className="text-danger">{err.message}</p>}
			<Modal show={show} onHide={handleClose}>
				{singdata && (
					<FormBox
						taskid={taskid}
						data={singdata}
						handleClose={handleClose}
						setrerender={setrerender}
					/>
				)}
			</Modal>
		</div>
	);
};

export default ModalBox;
