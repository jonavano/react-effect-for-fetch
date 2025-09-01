import User from "./UsersListItem";
import { useEffect, useState } from 'react'


function UsersList() {
    const url = "https://boolean-uk-api-server.fly.dev/jonavano/contact";

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const jsonData = await response.json();
            // console.log(jsonData)
            setUsers(jsonData);
        };
        fetchData();
    }, [])

    return <ul className='users-list'>

        {users.map((user, index) => (
            <User key={index} user={user} />
        ))}

    </ul>;
}

export default UsersList;