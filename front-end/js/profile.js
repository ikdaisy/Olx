const url=window.location.href
console.log(url);
const urlParams=new URLSearchParams(url.split("?")[1])
console.log(urlParams);
const id=urlParams.get("id");
console.log(id);

async function getUser(){
    // const res= await fetch("http://localhost:3003/api/getuser")
    // console.log(res);
    // const dd = await res.json()
 
 
    
    

} 
getUser()
