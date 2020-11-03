export const fetchApi = async () => {
    try {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  export default fetchApi


  // const fetchApi = async () => {
  //   try {
  //     const response = await fetch("https://restcountries.eu/rest/v2/all");
  //     const data = response.json();
  //     return data;
  //   } catch (error){
  //     console.error("error catched :", error);
  //   }
  // };
  