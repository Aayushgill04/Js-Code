/* Here the memory being used is the stack memory since the datatypes 
being stored are primitive. Hence, when you call the element, it is 
assigned a copy of the value of that element. */

let varOne = "Aayush";
let varTwo = varOne;
varTwo = "Ritvik";

let userOne = {
    email:"aayushgill@gmail.com",
    upi: "aayush@axis"
}

let userTwo = userOne;
userTwo.email = "aayushgill0408@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);

/* this has happened because the non-primitive datatypes are stored
in heap memory where when you call an element, you call it by reference. 
Hence, the change occurs in the actual value of the element. */