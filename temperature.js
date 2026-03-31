document.querySelector("#submit").addEventListener("click", function() {

    let temperature = Number(document.getElementById("item_one").value)
    let newValue = 0
    let rounded = 0
    const convertFrom = document.getElementById("item_two").value.toLowerCase()
    const convertTo = document.getElementById("item_three").value.toLowerCase()

    if (convertFrom === "celsius" && convertTo === "fahrenheit") {
        newValue = (temperature * 9/5) + 32
        rounded = newValue.toFixed(3)
        document.getElementById("data").textContent = `${temperature}℃ = ${rounded}°F`

    } else if (convertFrom === "fahrenheit" && convertTo === "celsius") {
        newValue = (temperature - 32) * 5/9
        rounded = newValue.toFixed(3)
        document.getElementById("data").textContent = `${temperature}°F = ${rounded}℃`

    } else if (convertFrom === "celsius" && convertTo === "kelvin") {
        newValue = temperature + 273.15
        rounded = newValue.toFixed(3)
        document.getElementById("data").textContent = `${temperature}℃ = ${rounded}K`
    
    } else if (convertFrom === "kelvin" && convertTo === "celsius") {
        newValue = temperature - 273.15
        rounded = newValue.toFixed(3)
        document.getElementById("data").textContent = `${temperature}K = ${rounded}℃`

    } else if (convertFrom === "fahrenheit" && convertTo === "kelvin") {
        newValue = (temperature - 32) * (5/9) + 273.15
        rounded = newValue.toFixed(3)
        document.getElementById("data").textContent = `${temperature}°F = ${rounded}K`

    } else if (convertFrom === "kelvin" && convertTo === "fahrenheit") {
        newValue = (temperature - 273.15) * 9/5 + 32
        rounded = newValue.toFixed(3)
        document.getElementById("data").textContent = `${temperature}K = ${rounded}°F`

    } else {
        alert(`Unable to convert ${convertFrom} to ${convertTo}, Please use the intended calculator.`)
        return
    }

    temperature_input.style.display = "none"
    temperature_result.style.display = "block"

})
