const API_URL = process.env.REACT_APP_API_URL;

export const fetchFromAPI = async (endpoint, options) => {
  const response = await fetch(`${API_URL}${endpoint}`, options);
  if (!response.ok) {
    throw new Error(`API call failed: ${response.status}`);
  }
  return response.json();
};