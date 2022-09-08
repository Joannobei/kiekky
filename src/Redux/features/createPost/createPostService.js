import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const createPost = async (postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    },
  }; 
  // console.log(config);
const response = await axios.post(API_URL + 'post/create', postData, config); 
console.log(response.data.data);
return response.data.data;
};



const createPostService = {
  createPost,
};

export default createPostService;
