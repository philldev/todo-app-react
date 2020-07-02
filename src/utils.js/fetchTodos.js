import Axios from "axios";

const fetchTodos = async (setTodos, setLoading) => {
  const authToken = localStorage.getItem("AuthToken");

  try {
    Axios.defaults.headers.common = { Authorization: `${authToken}` };

    const response = await Axios.get("/todos");
    const data = await response.data;

    
    setTodos(data)
    setLoading(false)

    
  } catch (error) {
    // setLoading(false)
  }
};

export default fetchTodos;
