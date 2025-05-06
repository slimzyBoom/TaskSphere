function isTokenValid(token) {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 > Date.now(); // exp is in seconds
    } catch (e) {
      return false;
    }
  }
  

export default isTokenValid;