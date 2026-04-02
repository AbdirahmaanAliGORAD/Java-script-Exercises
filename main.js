async function fetchData(){
    console.log("waa kashaqaynta Exercise 29");

    const response = await fetch ("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    console.log("response:", response);
    console.log("data:", data);
}

fetchData();