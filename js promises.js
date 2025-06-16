// without promise
function walkDog(callback) {
    setTimeout(()=>{
        console.log("you walk dog");
        callback();
    },1500);
}

function cleanKitchen(callback) {
    setTimeout(()=>{
        console.log("cleaned Kitchen");
        callback();
    },1500);
}

function takOutTrash(callback) {
    setTimeout(()=>{
        console.log("Taken Out Trash");
        callback();
    },1500);
}

walkDog(()=>{
    cleanKitchen(()=>{
        takOutTrash(()=>console.log("finished"));
    })
})


// with promise


function walkDog2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogwalked= true;
            if (dogwalked) {
                resolve("walked the dog2");
            }
            else{
                reject("you didnt walk the dog")
            }

            
        }, 1500);
    })
}

function cleanKitchen2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleanedkitchen= true;
            if (cleanedkitchen) {
                resolve("cleaned kitchen");
            }
            else{
                reject("you didnt clean kitchen")
            }



        }, 1500);
    })
}

function takOutTrash2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tookoutrash= false;
            if (tookoutrash) {
                resolve("took out trash");
            }
            else{
                reject("you didnt take out trash");
            }
        
        
        }, 1500);
    })
}

walkDog2().then(value=>{console.log(value);return cleanKitchen2()})
            .then(value=>{console.log(value);return takOutTrash2() })
            .then(value=>{console.log(value);console.log("finished2")})
            .catch(error=>console.error(error));





