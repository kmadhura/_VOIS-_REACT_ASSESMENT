import React ,{useState} from 'react'


const SearchBooksInput=({onSearch})=>{
    const [value,setValue]=useState('');

    const handleChange=(event)=>{
        const val=event.target.value;
        setValue(val);
        if(val.length>=1)
        {onSearch(val)}
    }


return(
    <div className='search-books-input-wrapper'>
     <input 
     type="text"
     value={value}
     placeholder='Search by title or author'
     onChange={handleChange}
     autoFocus
     ></input>
    </div>
)

}

export default SearchBooksInput;