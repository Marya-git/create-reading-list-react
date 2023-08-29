import {useState} from 'react';

function BookCreate({onSubmit}){
    const [title, SetTitle] = useState('');
    
    const handleSubmit =  (event) => {
        event.preventDefault();
        onSubmit(title)
        SetTitle('')
    };
    return(
        <div className='book-create'>
            <h3>Create Your Favorite Book List!</h3>
            <form onSubmit={handleSubmit}>
                <label style={{fontSize: '20px'}}><b>Title:</b></label>
                <input className='input' value={title} onChange={(e) => SetTitle(e.target.value)} /> 
                <button className='button'>Add a Book</button>
            </form>    
        </div>
    );
}

export default BookCreate;