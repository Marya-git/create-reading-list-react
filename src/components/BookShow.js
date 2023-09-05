import { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";
import heart from '../svg/heart.svg';
import heartWhite from '../svg/heart-white.svg';


function BookShow({book}){
    const [showEidt, setShowEdit] =  useState(false);
    // const [click, setClick] = useState(0);
    const [heartColor, setHeartColor] = useState(false);
    const { deleteBookById, editBookById } = useContext(BooksContext);

    const deleteItem = () => {
        deleteBookById(book.id);
    }
    const eidtItem = () => {
        setShowEdit(!showEidt);
    }
     const handleEditSubmit = () => { 
        setShowEdit(false);
    }
    let content;
    if (book.author) {
        content = <><h3>{book.title}</h3><h2>by <i>{book.author}</i></h2></>;
    } else {
        content = <h3>{book.title}</h3>;
    }
    
    if (showEidt) {
        content = <BookEdit  book={book} onSubmit={handleEditSubmit}/>;
    }
    function handleClick(){
        // setClick(click + 1);
        setHeartColor(!heartColor);
    }
    // let heartImg = (heartColor === false)? <img className='heart' alt='heart' src={heartWhite} style={{width: 20 + click*10 + 'px'}}/>: <img className='heart' alt='heart' src={heart} style={{width: 20 + click*10 + 'px'}}/>
    let heartImg = (heartColor === false)? <img className='heart' alt='heart' src={heartWhite} style={{width: 15 +  'px'}}/>: <img className='heart' alt='heart' src={heart} style={{width: 15 + 'px'}}/>

    return (

        <div className="book-show"> 
            <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} /> 
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={eidtItem} ></button>
                <button className="delete" onClick={deleteItem} >x</button>
           </div>
           <div onClick={handleClick}>
                {heartImg}
           </div>
           
        </div>
    )
}

export default BookShow;