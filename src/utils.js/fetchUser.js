import Axios from "axios";

const fetchUser = async (setLoading, setUser, history) => {
  const authToken = localStorage.getItem("AuthToken");

  try {
    Axios.defaults.headers.common = { Authorization: `${authToken}` };

    const response = await Axios.get("/user");
    const data = await response.data.userCredentials;

    setUser(data)
    setLoading(false)

    
  } catch (error) {
    console.log(error);
    if (error.response.status === 403) {
      history.push('/login');
    }
    setLoading(false)
  }
};

export default fetchUser;
