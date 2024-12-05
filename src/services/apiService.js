const URL = "https://jsonplaceholder.typicode.com";
const apiService = {
  getUser: async () =>{
    try{
      const response = await fetch(`${URL}/users`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }    
      return await response.json();
    }catch(error){
      console.error('Error en fetchData:', error.message);
      throw error
    }
  }
};
export default apiService;
