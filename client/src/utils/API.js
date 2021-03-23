// google books request
// api calls to stored books
import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// // const query = "HarryPotter";


// use async????
export default {
  getBooks: function(search) {
    return axios.get(BASEURL + search);
  },
  // Gets all books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getSavedBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteSavedBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("from utils api: " + bookData.imgURL)
    return axios.post("/api/books", bookData);
  }
};


// const API = {
//   // search books from googlebooks
//   getBooks: (search) => {
//     // async don't have to build custom promise (????)
//     return axios.get(BASEURL + search);
//   },

//   // save book
//   // async saveBook(book) {
//   //   return axios.post('/api/books', book);
//   // }
//   saveBook: (book) => {
//     console.log("book" + book)
//     return axios.post("/api/books", book);
//   }
// };
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

// export default API;
