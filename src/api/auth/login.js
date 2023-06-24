import { API_BASE_URL } from "../../config";
/*
    username: 'kminchelle',
    password: '0lelplR'
*/
const fetchAuth = async ({ username, password }) => {
  const url = `${API_BASE_URL}auth/login`;
  const body = JSON.stringify({
    username: username,
    password: password,
  });

  try {
    const fetchedData = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
    });
    const data = await fetchedData.json();
    return data;
  } catch (error) {
    console.log("Invalid credentials");
  }
};

export default fetchAuth;

//TODO - catch invalid credential response error (400)
