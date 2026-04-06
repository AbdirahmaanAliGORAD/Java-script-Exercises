async function fetchData () {
    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                
            }


        })
        const data = await response.json();
        console.log(data);


    } catch (error) {
        console.log(error);
    }
}