import React, { useState } from "react";

 const BookShelfChanger=({book,shelf,onMove})=>{
    const [value,setValue]=useState(shelf)

    const handleChange=(event)=>{
        const{value}=event.target;
        setValue(value)
        onMove(book,value);
    }

    return(
        <div className="book-shelf-changer">
            <select value={value}onChange={handleChange}>
                <option value="move" disabled>Move To...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want To Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>





            </select>

        </div>
    )
 }

 export default BookShelfChanger;