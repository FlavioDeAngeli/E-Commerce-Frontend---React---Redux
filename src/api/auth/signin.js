import { API_BASE_URL } from "../../config";

const fetchAddUser = async ({ firstname, lastname, username, password }) => {
  console.log("call fetch add user");
  const url = `${API_BASE_URL}users/add`;
  const body = JSON.stringify({
    firstName: firstname,
    lastName: lastname,
    userName: username,
    password: password,
  });
  const fetchedData = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body,
  });
  const data = await fetchedData.json();
  console.log(data);
  return data;
};

export default fetchAddUser;
