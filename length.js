document.querySelector("#submit").addEventListener("click", function() {
    let length = Number(document.getElementById("item_one").value)
    let newValue = 0
    let rounded = 0
    const convertFrom = document.getElementById("item_two").value.toLowerCase()
    const convertTo = document.getElementById("item_three").value.toLowerCase()

    if (convertFrom === "millimeter" && convertTo === "centimeter") {
        newValue = length / 10
        rounded = newValue.toFixed(2)
        document.getElementById("data").textContent = `${length}mm = ${rounded}cm`

    } else if (convertFrom === "millimeter" && convertTo === "meter") {
        newValue = length / 1000
        rounded = newValue.toFixed(2)
        document.getElementById("data").textContent = `${length}mm = ${rounded}m`

    } else if (convertFrom === "millimeter" && convertTo === "inch") {
        newValue = length / 25.4
        rounded = newValue.toFixed(2)
        document.getElementById("data").textContent = `${length}mm = ${rounded}inch`

    } else if (convertFrom === "millimeter" && convertTo === "foot") {
        newValue = length / 304.8
        rounded = newValue.toFixed(2)
        document.getElementById("data").textContent = `${length}mm = ${rounded}ft`
    
    } else if (convertFrom === "millimeter" && convertTo === "yard") {
        newValue = length / 914.4
        rounded = newValue.toFixed(2)
        document.getElementById("data").textContent = `${length}mm = ${rounded}yd`
        
    } else {
        alert(`Unable to convert ${convertFrom} to ${convertTo} `)
        return
    }