const BookLoading = () => {
    return (
        <div className='max-w-5xl mx-auto flex justify-center items-center py-8'>
            <h2>Loading book details...</h2>
            <span className="loading loading-spinner text-info"></span>
        </div>
    );
};

export default BookLoading;