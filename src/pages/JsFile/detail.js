function plus() {
    const preValue = document.getElementById("counter").value;
    document.getElementById("counter").value = parseInt(preValue) + 1;
}

function minus() {
    const preValue = document.getElementById("counter").value;
    if (parseInt(preValue) != 0) {
        document.getElementById("counter").value = parseInt(preValue) - 1;
    }
}

function rotate() {
    document.getElementById("rotateSVG").classList.toggle("rotate-180");
}