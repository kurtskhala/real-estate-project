import { useState, useEffect } from "react";

export const useFetchData = (ending) => {
  const [data, setData] = useState([]);
  const url = `https://api.real-estate-manager.redberryinternship.ge/api/${ending}`;
  async function fetchData(url) {
    const token = "9d0edd5e-8c31-46e9-8c85-552fab1a74bc";

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const result = await response.json();
        return result;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  useEffect(() => {
    fetchData(url)
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      })
  }, [url]);
  

  return [data];
};
