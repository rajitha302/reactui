export const fetchApi = async () => {
    try {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return "error";
    }
  };

  export default fetchApi
  