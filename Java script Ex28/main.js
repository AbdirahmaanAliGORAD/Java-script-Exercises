function fetchUserData() {
    return new Promise ((resolve, reject) => {
        const success = true;
        setTimeout(() => {
            if (success) {
                resolve ({id: 7031458, name: "Cabdullaahi", city: "bosaaso"});

            }else {
                reject("fadlan dib u soo sax");
            }
        }, 2000);
    } 
    )
}

async function displayUserData() {
    try {
        const user = await fetchUserData () 
        console.log(user);
    }catch(err)  {
        console.log(err)
    }
}

displayUserData();