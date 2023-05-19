import { Link } from 'react-router-dom';
import { chatRooms } from '../../data/chatRooms';
import './styles.css';
import React from 'react';

function Landing() {
    const [data,setData]=React.useState(chatRooms);
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const submit = (event) => {
        event.preventDefault();
        const newRoom = {
            id: event.target.title.value,
            title: event.target.description.value
        }
        setData([...data,newRoom]);
    }
    return (
        <>
            <h2>Choose a Chat Room</h2>
            <ul className="chat-room-list">
                {data.map((room) => (
                    <li key={room.id}>
                        <Link to={`/room/${room.id}`}>{room.title}</Link>
                    </li>
                ))}
            </ul>
            <div className="create-room">
                <h2>Create a Chat Room</h2>
                <form onSubmit={submit}>
                    <input type="text" placeholder="Enter a room name" name="title"  value={title} onChange={e => setTitle(e.target.value)} />
                    <input type="text" placeholder="Enter desription" name="description" value={description} onChange={e => setDescription(e.target.value)} />
                    <button type="submit">Create</button>
                </form>
            </div>
        </>
    );
}

export { Landing };
