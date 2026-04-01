// synchronous function

function fetchUserData() {
    alert("fetching user data")
    return  {id: "Abuu Abdullaahi", age: 30, city: "Bosaaso"}
}

console.log("kadib markaad okey tiraahdo, waxaa la soo bandhigi doonaa xogta userka")

const user = fetchUserData();

// Asynchronous function

function  fetchUserDataAsync  (callback) {
    setTimeout(() => {
        const user = {id: "Saciid", age: 30, city: "Bosaaso"};
    }, 3000);
    callback (user)
};
console.log("kadib markaad okey tiraahdo, waxaa la soo bandhigi doonaa xogta userka");

fetchUserDataAsync((user) =>{
    console.log(user);
})
