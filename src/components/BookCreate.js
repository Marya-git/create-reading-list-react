import {useState,useContext} from 'react';
import BooksContext from '../context/books';

function BookCreate(){
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const {createBook} = useContext(BooksContext);
    
    const handleSubmit =  (event) => {
        event.preventDefault();
        createBook(title,author);
        setTitle('');
        setAuthor('');
    };
    return(
        <div className='book-create'>
            <h3>Create Your Favorite Book List!</h3>
            <form onSubmit={handleSubmit}>
                <label style={{fontSize: '20px'}}><b>Title:</b></label>
                <input className='input' value={title} onChange={(e) => setTitle(e.target.value)} /> 
                <label style={{fontSize: '20px'}}><b>Author:</b></label>
                <input className='input' value={author} onChange={(e) => setAuthor(e.target.value)} />
                <button className='button'>Add a Book</button>
            </form>    
        </div>
    );
}

export default BookCreate;