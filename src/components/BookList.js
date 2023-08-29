import BookShow from './BookShow';

function BookList({books, onDelete, onEdit}){
    const showBooks =  books.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>;
    });
    return (
        <div className='book-list'>
            {showBooks}
            
        </div>
    )
}

export default BookList;