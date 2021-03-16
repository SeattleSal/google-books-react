// google books request
// api calls to stored books
import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const query = "HarryPotter";

const API = {
  // search books from googlebooks
  getBooks: (search) => {
    // async don't have to build custom promise (????)
    return axios.get(BASEURL + search);
  },
};
// add the following:
// set favorite book
// get favorite books
// delete favorite books

// can setup example return data that would be returned later
// example: return { data: []}
// return {
//   data: [
//     {
//       author: ["Joe Joe"],
//       description: "book about stuff",
//       image: "abc",
//       link: "xyz",
//       title: "book about stuff",
//     },
//     {
//         author: ["Bob Bob"],
//         description: "book about stuff",
//         image: "abc",
//         link: "xyz",
//         title: "book about bob",
//       }
//   ],
// };
//   },

export default API;
