function fetchUserData () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const success = true;
            if (success) {
                resolve({ name: "Saciid Ali Ahmed", age: 30 });
            }   else {
                reject ("cillad ayaa dhacday");
            }

        }, 2000);
    })
}

fetchUserData()
    .then((data) => console.log("user data", data))

    .catch((error) => console.log("error", error));