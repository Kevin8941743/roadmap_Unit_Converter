document.querySelector("#submit").addEventListener("click", function() {


    let weight = Number(document.getElementById("item_one").value)
    let newValue = 0
    let rounded = 0
    const convertFrom = document.getElementById("item_two").value.toLowerCase()
    const convertTo = document.getElementById("item_three").value.toLowerCase()

    if (convertFrom === "milligram" && convertTo === "gram") {
        newValue = weight / 1000
        rounded = newValue.toFixed(3)
        document.getElementById("data").textContent = `${weight}mg = ${rounded}g`

    } else if (convertFrom === "milligram" && convertTo === "kilogram") {
        newValue = weight / 1000000
        rounded = newValue.toFixed(3)
        document.getElementById("data").textContent = `${weight}mg = ${rounded}kg`

    } else if (convertFrom === "milligram" && convertTo === "ounce") {
        newValue = weight / 28350
        rounded = newValue.toFixed(3)
        document.getElementById("data").textContent = `${weight}mg = ${rounded}oz`

    } else if (convertFrom === "milligram" && convertTo === "pound") {
        newValue = weight / 453600
        rounded = newValue.toFixed(3)
        document.getElementById("data").textContent = `${weight}mg = ${rounded}lb`

    } else {
        alert(`Unable to convert ${convertFrom} to ${convertTo}. Please use the intended calculator`)
        return
    }

    weight_input.style.display = "none"
    weight_result.style.display = "block"

})
