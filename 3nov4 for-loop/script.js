// loops

for (let i = 0; i < 10; i++) {
    const element = i;

    if (i == 4) {
        console.log("found");
    }

    console.log(element);
    
}

for (let i = 0; i < 3; i++) {
    console.log(`this is i value ${i}`);
    for (let j = 0; j < 3; j++) {
        // console.log(`this is i ${i} and this is j ${j}`);
        console.log(i + '*' + j + '=' + i*j);
        
    }
        
    }

let arr =  ["kk", "tiwari", "superman", "batman"]

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
    
}

// break and continue

for (let index = 1; index <= 20; index++) {
    

    if (index == 5) {
        console.log("found");
        break;
    }

    console.log(index);
}

for (let index = 1; index <= 20; index++) {
    

    if (index == 5) {
        console.log("found");
        continue;
    }

    console.log(index);
}
    
