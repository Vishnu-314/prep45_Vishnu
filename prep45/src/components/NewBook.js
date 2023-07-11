import React, { useState } from 'react';

function NewBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');


  const handleAddBook = () => {
    // Send the POST request to the server
    fetch('http://localhost:5000/api/addBook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      //The body property is set to a JSON string representing an object containing the title and author values. The title and author are likely variables holding the book's title and author information.
      body: JSON.stringify({ title, author }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        ; // Handle the server response as needed
      })
      //catch() block will execute, and the error will be logged to the console.
      .catch((error) => {
        console.error(error);
      });
//This line redirects the user to the root URL ("/"), which may result in reloading the page or navigating to a different page.
      window.location.href = "/";
  };

  return (
    <div>

<nav className="navbar bg-light justify-content-center">
  <div className="d-flex justify-content-center">
    <a className="navbar-brand" href="#">The Book Library</a>
  </div>
</nav>

      <button
        type="button"
        className="btn btn-dark my-2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@getbootstrap"
      >
        Add A Book
      </button>

      {/* Modal content */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                New message
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Title:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    Author:
                  </label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleAddBook}>
                Add To Library
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewBook;
