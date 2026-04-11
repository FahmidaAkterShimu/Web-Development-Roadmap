const ToDosPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await res.json();

    return (
        <div>
            <h2 className="text-4xl">To-Dos: {todos.length}</h2>
        </div>
    );
};

export default ToDosPage;