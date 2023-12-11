// create a function and following the progressions inside the function.

// Progression 1: Create a promise call which fetches data
// Progression 2: Display the fetched data in the form of list
// Progression 3: When the promise call is rejected then throw an error

console.log("bonjour")
function gettingthedata() {
  let result = ""
  let storedata = fetch("https://jsonplaceholder.typicode.com/users")
  
  storedata.then((store) => {
    console.log(store)
    return store.json()
  })
  .then((store) => {
    console.log(store)
    updatedata(store)
  })
  .catch((error) => {
    updateerror(error)
  })
  
  let updatedata = (store) => {
    store.forEach((user) => {
    // document.getElementById("mydiv").innerHTML +=
    result += `
    <div class="player">
    <div class="strength">Name: ${user.name}</div>
    <div>Email: ${user.email}</div>
    <div>Phone: ${user.phone}</div>
    <div>Website: ${user.website}</div>
    <div>Company: ${user.company.name}</div>
    <div>City: ${user.address.city}</div>
    <div>Zipcode: ${user.address.zipcode}</div>
    </div>`
  })
  document.getElementById("btnGet").onclick = () => {
    document.getElementById("message").innerHTML = `<h2>Lists of Users</h2>`
    document.getElementById("mydiv").innerHTML = result
    }
  }


  let updateerror = (error) => {
    console.log("Promise rejected.")
    console.log(error.message)
  }
}

gettingthedata()