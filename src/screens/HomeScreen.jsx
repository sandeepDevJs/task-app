import React, { useEffect, useState } from "react";
import axios from "axios";
import TableData from "../components/TableData";
import LoginModal from "../components/loginModal";
import { loginCheck } from "../utils/loginCheck";

const HomeScreen = () => {
	const [state, setstate] = useState([]);
	const [err, setErr] = useState();
	const [rerender, setrerender] = useState(0);

	useEffect(() => {
		axios
			.get("http://localhost/task_api/getTasks.php")
			.then((response) => response)
			.then((rs) => setstate(rs.data.data))
			.catch((err) =>
				setErr(err.response ? err.response.message : err.response)
			);
	}, [rerender]);

	let userInfo = loginCheck();

	return (
		<div>
			{err && <p className="text-danger">{err}</p>}
			{userInfo && <TableData data={state} setrerender={setrerender} />}
			{!userInfo && <LoginModal setrerender={setrerender} />}
		</div>
	);
};

export default HomeScreen;
