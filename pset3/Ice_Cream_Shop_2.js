const conesSoldPerHour = 14;
for (let hour = 1; hour <= 12; hour++) {
    let conesSoldTotal = (conesSoldPerHour * hour)
    let conesLeft = 168 - (conesSoldTotal)
    print(conesSoldTotal + " sold at hour " + hour);
    print(conesLeft + " left")
}