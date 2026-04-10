import Link from "next/link";

export const metadata = {
    title: 'All Users',
    description: 'all the users information',
}


const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return (
        <div>
            <h2 className="text-3xl text-center my-4">Users are coming here</h2>
            <div className="max-w-280 mx-auto grid grid-cols-3 gap-8">
                {
                    users.map(user =>
                        <div key={user.id} className="card bg-primary text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title">{user.name}</h2>
                                <p>{user.username}</p>
                                <div className="card-actions justify-end">
                                    <Link href={`/users/${user.id}`}>
                                        <button className="btn">Show details</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default UsersPage;