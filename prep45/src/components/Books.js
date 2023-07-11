import React, { useEffect, useState } from 'react';

const Books = () => {
    const [books, setBooks] = useState([]);
  //The useEffect hook is used to perform side effects in a functional component. It takes two arguments: a function and an optional dependency array.
    useEffect(() => {

        //an asynchronous function fetchBooks is defined. This function is responsible for fetching books from the server.


        //Within the fetchBooks function, a try-catch block is used to handle any errors that may occur during the asynchronous operations.
      const fetchBooks = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/getAllBooks', {
            method: 'GET',
          });
          if (!response.ok) {
            throw new Error('Error fetching books');
          }

          // the response data is parsed using response.json() to extract the JSON payload.
          const data = await response.json();
          console.log(data.result);

          //The setBooks function is called with data.result to update the state of the books variable, presumably defined using the useState hook. This will trigger a re-render of the component with the updated book data.
          setBooks(data.result);

          //If any error occurs during the try block or the fetchBooks function, it will be caught in the catch block, and the error will be logged to the console.
        } catch (error) {
          console.error('Error fetching books:', error);
        }
      };
      fetchBooks();
    }, []);


    //this will work same a above route but here we are fetching the route to delete the book with specific id
    const handleDeleteBook = async (id) => {
      try {
        const response = await fetch(`http://localhost:5000/api/deleteBook/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Error deleting book');
        }
        const data = await response.json();
        console.log(data);
        // Update the books state by removing the deleted book
        setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
      } catch (error) {
        console.error('Error deleting book:', error);
      }
    };
  
    return (
      <div>
        {books.map((book) => (
          <div className="card mx-auto p-2 my-2" style={{ width: '18rem' }} key={book._id}>
            <div className="card-body">
              <h3>Title: {book.title}</h3>
              <p>Author: {book.author}</p>
              <button type="button" className="btn btn-danger" onClick={() => handleDeleteBook(book._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Books;
  