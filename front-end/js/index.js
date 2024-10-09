const Token=localStorage.getItem("Token")
// console.log(token);
async function getUser(){
    const res= await fetch("http://localhost:3003/api/getuser",{headers:{"authorization":`Bearer ${Token}`}})
    console.log(res);
    const dd = await res.json()
    console.log(dd);
    
    console.log(dd.user);
    document.getElementById("profile").innerHTML=`<a href="./pages/profile.html">${dd.user}</a>`
    
    

} 
getUser()


