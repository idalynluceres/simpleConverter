// document.write("Hello World!");

function yard() {
    let inches = document.getElementById("lengthInput").value;
    const yard = 36;
    const ans = inches / yard;
    const result = ans.toFixed(2);

    document.getElementById("result").innerHTML = result;
    document.getElementById("resultUnit").innerHTML = "Yards";
}

function meter() {
    let inches = document.getElementById("lengthInput").value;
    const meter = 39.37;
    const ans = inches / meter;
    const result = ans.toFixed(2);

    document.getElementById("result").innerHTML = result;
    document.getElementById("resultUnit").innerHTML = "Meters";
}

function feet() {
    let inches = document.getElementById("lengthInput").value;
    const feet = 12;
    const ans = inches / feet;
    const result = ans.toFixed(2);

    document.getElementById("result").innerHTML = result;
    document.getElementById("resultUnit").innerHTML = "Feet";
}