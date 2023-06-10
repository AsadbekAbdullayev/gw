import { useEffect, useState } from 'react';
import axios from 'axios';

function useRequest(method, url, data) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios({
          method: method,
          url: url,
          data: data,
        });
        setResponse(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [method, url, data]);

  return { response, error, isLoading };
}
export default useRequest;
