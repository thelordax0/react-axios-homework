import getData from "./data.js"



getData(1).then((res)=>{
    console.log(res.user.data,res.post.data)
})