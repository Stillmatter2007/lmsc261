let numFrogs = prompt("How many frogs are about to jump in?"); // string
const TooCrowded = 15; // number
let isTooCrowded = numFrogs >= TooCrowded; // boolean
let messageToPrint = isTooCrowded ? "It's too crowded!" : "Come on in!"
print(messageToPrint);
