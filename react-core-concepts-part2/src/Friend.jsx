export default function Friend({ friend }) {
    const { name, usrname, email, phone, address } = friend;

    return (
        <div className="card">
            <h4>Name: {name}</h4>
            <p>User Name: {usrname}</p>
            <p>Email: {email} </p>
            <p>Phone: {phone} </p>
            <p>Address: {address.city} </p>
        </div>
    )
}