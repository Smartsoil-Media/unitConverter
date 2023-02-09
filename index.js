let inputEl = document.getElementById("unit")

let lengthEl = document.getElementById("length-text")
let volumeEl = document.getElementById("volume-text")
const massEl = document.getElementById("mass-text")

const convertBtn = document.getElementById("convert-btn")


const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204


convertBtn.addEventListener("click", function() {
    let baseValue = parseFloat(inputEl.value)
    let lengthValue = (baseValue * meterToFeet).toFixed(2)
    let lengthResult = (baseValue / meterToFeet).toFixed(2)

    let volumeValue = (baseValue * literToGallon).toFixed(2)
    let volumeResult = (baseValue / literToGallon).toFixed(2)

    let massValue = (baseValue * kiloToPound).toFixed(2)
    let massResult = (baseValue / kiloToPound).toFixed(2)

    lengthEl.textContent = `${baseValue} meters = ${lengthValue} feet 
    | ${baseValue} feet = ${lengthResult} meters`

    volumeEl.textContent = `${baseValue} liters = ${volumeValue} gallons |
    ${baseValue} gallons = ${volumeResult} liters `

    massEl.textContent = `${baseValue} kilograms = ${massValue} pounds |
    ${baseValue} pounds = ${massResult} kilograms `
})




document.getElementById("unit").addEventListener("input", function(e) {
    if (this.value.length > 4) {
      this.value = this.value.slice(0, 4);
    }
  });