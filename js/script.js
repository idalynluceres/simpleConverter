// document.write("Hello World!");

function yard() {
    let x = document.getElementById("value").value;
    const yard = parseFloat(x) / 36;

    alert("The value is " + yard + " yard/yards.");
}

function meter() {
    let x = document.getElementById("value").value;
    const meter = parseFloat(x) / 39.37;

    alert("The value is " + meter + " meter/meters.");
}

function feet() {
    let x = document.getElementById("value").value;
    const feet = parseFloat(x) / 12;

    alert("The value is " + feet + " foot/feet.");
}