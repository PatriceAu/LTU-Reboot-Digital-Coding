var temperature = 41;
var location = "house";

if (temperature < 0 && location === "house") {
    console.log("Stay inside");
}
else if (temperature < 30) {
    console.log("Put a hat and coat on");
}
else if (temperature < 50) {
    console.log("Put a coat on");
}
else {
    console.log("vest and shorts OK");
}
