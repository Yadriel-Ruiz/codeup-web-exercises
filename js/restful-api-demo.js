"use strict";
fetch('http://localhost:3000/books')
    .then(response => response.json())
    .then(books => console.log(books))
    .catch(error => console.error(error));


// uses books/1 to get the book with an id of 1
fetch('http://localhost:3000/books/1')
    .then(response => response.json())
    .then(book => {
        // do something with the `book` data
        console.log(book);
    })
    .catch(error => console.error(error));


//This one includes the information about the author by using a second fetch request
fetch('http://localhost:3000/books/1')
    .then(response => response.json())
    .then(book => {
        // Roght here is the second fetch request
        fetch(`http://localhost:3000/authors/${book.authorId}`)
            .then(response => response.json())
            .then(author => {
                // Log the book and author data to the console
                console.log(book);
                console.log(author);
                // This one includes the author information in the book object
                book.author = author;
                console.log(book);
            })
            .catch(error => console.error(error));
    })
    .catch(error => console.error(error));


// This one uses async/await to get the book and author data
//you can write export before the const in order to use it in another file
//in order to use it in another file you have to import it

// export const getBookAndAuthor = async (id) => {
//import { getBookAndAuthor } from './restful-api-demo.js';
const getBookAndAuthor = async (id) => {
    try {
        // Get the book data
        const bookUrl = `http://localhost:3000/books/${id}`;
        const bookResponse = await fetch(bookUrl);
        const book = await bookResponse.json();
        // Get the author data
        const authorUrl = `http://localhost:3000/authors/${book.authorId}`;
        const authorResponse = await fetch(authorUrl);
        const author = await authorResponse.json();
        // Add the author to the book object
        book.author = author;
        // Return the book object
        return book;
    } catch (error) {
        console.error(error);
    }
}
// Call the getBookAndAuthor function in order to get the book and author data by using the above code

getBookAndAuthor(1)
    .then(book => console.log(book))
    .catch(error => console.error(error));

// async IIFE (Immediately Invoked Function Expression)
(async () => { // <-- this is our main thread
    const book = await getBookAndAuthor(1);
    console.log(book);
})();

//this function adds all the authors to the books when called
const getAllBooksAndAuthors = async () => {
    try {
        // Get all the books
        const booksUrl = 'http://localhost:3000/books';
        const booksResponse = await fetch(booksUrl);
        const books = await booksResponse.json();
        // Get all the authors
        const authorsUrl = 'http://localhost:3000/authors';
        const authorsResponse = await fetch(authorsUrl);
        const authors = await authorsResponse.json();
        // Add the author to each book object
        books.forEach(book => {
            const author = authors.find(author => author.id === book.authorId);
            book.author = author;
        });
        // Return the books array
        return books;
    } catch (error) {
        console.error(error);
    }
}

// async IIFE (Immediately Invoked Function Expression)
(async () => { // <-- this is our main thread

    // const book = await getBookAndAuthor(1);
    // console.log(book);

    const books = await getAllBooksAndAuthors();
    console.log(books);

})();

// you can import multiple functions from a file by using the following syntax
// import { getBookAndAuthor, getAllBooksAndAuthors } from './restful-api-demo.js';

//this will create a new book and add it to the database
const createBook = async (book) => {
    try {
        const url = 'http://localhost:3000/books';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        };
        const response = await fetch(url, options);
        const newBook = await response.json();
        return newBook;
    } catch (error) {
        console.error(error);
    }
}

// async IIFE (Immediately Invoked Function Expression)
(async () => { // <-- this is our main thread

    // const book = await getBookAndAuthor(1);
    // console.log(book);

    // const books = await getAllBooksAndAuthors();
    // console.log(books);

    const newBook = await createBook({
        title: 'The Great Gatsby',
        authorId: 5,
        publishedYear: 1925,
        genre: 'Tragedy',
        summary: 'A tragic love story set in the roaring twenties.',
        ISBN: '9780743273565'
    });
    console.log(newBook);

})();

//this will delete a book from the database
const updateBook = async (id, book) => {
    try {
        const url = `http://localhost:3000/books/${id}`;
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        };
        const response = await fetch(url, options);
        const updatedBook = await response.json();
        return updatedBook;
    } catch (error) {
        console.error(error);
    }
}

// async IIFE (Immediately Invoked Function Expression)
//this will update the book with the id of 1
(async () => { // <-- this is our main thread

    // const book = await getBookAndAuthor(1);
    // console.log(book);

    // const books = await getAllBooksAndAuthors();
    // console.log(books);

    const newBook = await createBook({
        title: 'The Great Gatsby',
        authorId: 5,
        publishedYear: 1925,
        genre: 'Tragedy',
        summary: 'A tragic love story set in the roaring twenties.',
        ISBN: '9780743273565'
    });
    console.log(newBook);

    const updatedNewBook = await updateBook(newBook.id, {
        title: newBook.title,
        authorId: newBook.authorId,
        publishedYear: newBook.publishedYear,
        genre: newBook.genre,
        summary: 'A tragic love story set in the roaring twenties. The story primarily concerns the young and mysterious' +
            ' millionaire Jay Gatsby and his quixotic passion and obsession with the beautiful former debutante Daisy Buchanan.',
        ISBN: newBook.ISBN
    });
    console.log(updatedNewBook);

})();

//this is to delete a book from the database
const deleteBook = async (id) => {
    try {
        const url = `http://localhost:3000/books/${id}`;
        const options = {
            method: 'DELETE'
        };
        const response = await fetch(url, options);
        const deletedBook = await response.json();
        return deletedBook;
    } catch (error) {
        console.error(error);
    }
}

// async IIFE (Immediately Invoked Function Expression)
(async () => { // <-- this is our main thread

    // const book = await getBookAndAuthor(1);
    // console.log(book);

    // const books = await getAllBooksAndAuthors();
    // console.log(books);

    const newBook = await createBook({
        title: 'The Great Gatsby',
        authorId: 5,
        publishedYear: 1925,
        genre: 'Tragedy',
        summary: 'A tragic love story set in the roaring twenties.',
        ISBN: '9780743273565'
    });
    console.log(newBook);

    const updatedNewBook = await updateBook(newBook.id, {
        title: newBook.title,
        authorId: newBook.authorId,
        publishedYear: newBook.publishedYear,
        genre: newBook.genre,
        summary: 'A tragic love story set in the roaring twenties. The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion and obsession with the beautiful former debutante Daisy Buchanan.',
        ISBN: newBook.ISBN
    });
    console.log(updatedNewBook);

    const deletedNewBook = await deleteBook(updatedNewBook.id);
    console.log(`"${deletedNewBook.title}" has been deleted.`);

})();