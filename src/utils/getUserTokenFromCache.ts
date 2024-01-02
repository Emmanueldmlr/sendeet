export const getUserTokenFromCache = () => {
  try {
    if (typeof window != undefined) {
      const storedData = localStorage.getItem("USER");
      if (storedData) {
        const parsedData = JSON.parse(storedData); //changes user token stored to json

        return parsedData.token;
      }
    }
  } catch (e) {
    console.error("Error getting user token from cache:", e);
    console.log("Error");
    return null;
  }
};
