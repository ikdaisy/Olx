document.getElementById("signup").addEventListener("submit",async(e)=>{
    e.preventDefault();
    const username=document.getElementById("username").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const cpassword=document.getElementById("cpassword").value;
    const place=document.getElementById("place").value;
    const address=document.getElementById("address").value;
    const phone=parseInt(document.getElementById("phone").value);
    const pincode=parseInt(document.getElementById("pincode").value);
    fetch("http://localhost:3003/api/signup",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({username,email,password,cpassword,place,address,phone,pincode})
    }).then((res)=>{
        console.log(res);
        if(res.status==201){
            alert("success")
            console.log(res);  
            window.location.href="../pages/signin.html"
        }
        else if (res.status==404){
            alert("error")
        }
        else{
            alert("error")
        }
        
    }).catch((error)=>{
        console.log(error);
        
    });
})