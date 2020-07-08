import Axios from "axios";

const fetchTodos = async (setTodos, setLoading, source) => {
  const authToken = localStorage.getItem("AuthToken");

  try {

    console.log('fetching')
    Axios.defaults.headers.common = { Authorization: `${authToken}` };

    const response = await Axios.get("/api/todos",  {
      cancelToken: source.token
    });
    const data = await response.data;

    
    setTodos(data)
    setLoading(false)

    
  } catch (error) {
    // setLoading(false)
  }
};

export default fetchTodos;
