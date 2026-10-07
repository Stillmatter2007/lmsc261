let hoursUsed = Number(prompt("How long have you been using this shit? "));
function maxLifeSpan(hoursUsed) {
    const maxLifeSpan = 1000;
    if (typeof hoursUsed != "number") {
        return "please enter valid number";
    }
    if (hoursUsed < 800) {
        return "suit in working condition";
    } 
    else if (hoursUsed < maxLifeSpan) {
        return "suit needs replacement soon, do it now dumbass you wanna die in vacuum or what";
    } 
    else {
        return "suit no longer safe to use";
    }
}
print (maxLifeSpan(hoursUsed));
