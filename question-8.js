// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้

async function getJson(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let json = await response.json();  
    return json.map(data => data.name);
     
 }
 
 let newUser = await getJson();
 
 console.log(newUser)

