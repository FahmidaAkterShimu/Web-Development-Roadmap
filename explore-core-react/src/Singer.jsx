import './App.css'
export default function Singer({ singerName, singerAge }) {
    return (
        <div className='singer'>
            <h3>Name: {singerName}</h3>
            <p>age: {singerAge} </p>
        </div>
    )
}