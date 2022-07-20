function validate() {
    var min = Number(document.getElementById("min").value);
    var max = Number(document.getElementById("max").value);
    var mul = Number(document.getElementById("mul").value);
    var factor = min * mul;
    console.log(factor);

    if (min == max || mul == max) {
        document.getElementById("min").style.borderColor = "red";
        document.getElementById("mul").style.borderColor = "red";
        document.getElementById("max").style.borderColor = "red";
        alert("Wrong");
    } else if (min > max) {
        document.getElementById("min").style.borderColor = "red";
        alert("Min should be less than max");
    } else if (mul > max && mul <= min) {
        document.getElementById("mul").style.borderColor = "red";
        alert("Mul will be wrong")
    } else if (max != factor) {
        document.getElementById("max").style.borderColor = "red";
        alert("Factor is wrong");
    } else {
        alert("All conditions are true");
    }
}