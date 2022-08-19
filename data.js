import axios from "axios"

export default async (user_id)=>{
    
    const user =await axios("https://jsonplaceholder.typicode.com/users/"+user_id)

    const post =await axios("https://jsonplaceholder.typicode.com/posts?userId="+user_id)

    return {user,post}
}