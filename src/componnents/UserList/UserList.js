import axios from 'axios'
import React ,{useEffect,useState} from 'react'
import UserCard from '../component/UserCard/userCard'
function UserList() {
    const [users ,setUsers]=useState([])
    useEffect (()=> {
        axios.get("https://jsonplaceholder.typicode.com/todos/1")
        .then((res)=>setUsers(res.data))
        .catch((err)=>console.log(err))
    },[]
    )
    console.log(users)
    return (
    <div>
       {users.map((el)=>(<UserCard user={el} key={el.id}/>) )}
    </div>
    )
}

export default UserList
