export const loginCheck = () => {
	let data = localStorage.getItem("loginInfo")
		? JSON.parse(localStorage.getItem("loginInfo"))
		: "";
	if (!data) {
		return false;
	} else {
		return data;
	}
};
