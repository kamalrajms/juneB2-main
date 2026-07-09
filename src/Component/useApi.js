import axios from "axios";
import { useState, useEffect } from "react";

function useApi(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, [url]);

  return { data, error, loading };
}
export default useApi;

// obj={
//     data:[]
// }
