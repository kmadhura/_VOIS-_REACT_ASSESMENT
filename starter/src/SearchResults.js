import React from 'react'
import Book from './Book'

const SearchResults=({searchBooks,myBooks,onMove})=>{
    const updatedBooks=searchBooks.map(book=>{
        const myBook=myBooks.find(b=>b.id===book.id);
        if(myBook){
            book.shelf=myBook.shelf;
        }
        else{
            book.shelf='none';
        }
        return book;
    })



    return(
<div className='search-books-results'>
    <ol className='books-grid'>
        {updatedBooks.map(book=>(
            <Book key={book.id} book={book} onMove={onMove}/>
        ))}
    </ol>

</div>

    )
}

export default SearchResults;