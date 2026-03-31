document.querySelector("#submit").addEventListener("click", function() {
    let length = Number(document.getElementById("item_one").value)
    let newValue = 0
    let rounded = 0
    const convertFrom = document.getElementById("item_two").value.toLowerCase()
    const convertTo = document.getElementById("item_three").value.toLowerCase()
