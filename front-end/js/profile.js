async function getUser(){
    const res= await fetch(`http://localhost:3003/api/getuser/${_id}`)
    console.log(res);
    const data = await res.json()
    console.log(data);
    document.getElementById("left").innerHTML=`<img  src="../images/cute-woman-chuckle-holding-breath.jpg" alt="">
            <div class="username">${data.username}</div>
            
            <div class="details">
                <h5>Email: </h5>
                <div class="email">${data.email}</div>
               
            </div>
            <div class="details">
                <h5>Phone: </h5>
                <div class="phone">${data.phone}</div>
               
            </div>
            <div class="details">
                <h5>Place: </h5>
                <div class="place">${data.place}</div>
               
            </div>
            <div class="details">
                <h5>Address: </h5>
                <div class="address">${data.address}</div>
               
            </div>
            <div class="details">
                <h5>Pincode: </h5>
                <div class="pincode">${data.pincode}</div>
               
            </div>

            <a href="./editProfile.html"><button class="edit-btn">EDIT</button></a>
            <a href=""><button class="logout-btn">LOG OUT</button></a>

        </div>`
    
    

} 
getUser()