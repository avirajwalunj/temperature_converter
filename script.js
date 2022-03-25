const inputSelect = document.querySelector('#ip-units')
const input = document.querySelector('#input-box')

const outputSelect = document.querySelector('#op-units')
const output = document.querySelector('#output-value')

inputSelect.addEventListener('change', result_change)
outputSelect.addEventListener('change', insert_change)

function result_change() {
  if (
    inputSelect.selectedOptions[0].value === outputSelect.selectedOptions[0].value) {
    if (outputSelect.selectedIndex < 2) {
      outputSelect.selectedIndex += 1;
    } else {
      outputSelect.selectedIndex = 0;
    }
  }
}


function insert_change() {
  if (outputSelect.selectedOptions[0].value === inputSelect.selectedOptions[0].value) {
    if (inputSelect.selectedIndex < 2) {
      inputSelect.selectedIndex += 1
    } else {
      inputSelect.selectedIndex = 0
    }
  }
}

function convert() {
  if (input.value == '') {
    output.value == '';
    alert("please Enter a valid value in inputbox")
  }
  // celcius to Fahrenheit
  else if (inputSelect.selectedOptions[0].value === 'Celcius' && outputSelect.selectedOptions[0].value === 'Fahrenheit') {
    const answer = (9 * (input.value)) / 5 + 32;
    output.value = answer + ' °F';
  }
  // celcius to kelvin
  else if (inputSelect.selectedOptions[0].value === 'Celcius' && outputSelect.selectedOptions[0].value === 'Kelvin') {
    const answer = Number(input.value) + 273.15;
    output.value = answer + ' K';
  }
  // Fahrenheit to Kelvin
  else if (inputSelect.selectedOptions[0].value === 'Fahrenheit' && outputSelect.selectedOptions[0].value === 'Kelvin') {
    const answer = (((input.value - 32) * 5) / 9 + 273.15).toFixed(2)
    output.value = answer + ' K';
  }
  // Fahrenheit to celcius
  else if (inputSelect.selectedOptions[0].value === 'Fahrenheit' && outputSelect.selectedOptions[0].value === 'Celcius') {
    const answer = (((input.value - 32) * 5) / 9).toFixed(2)
    output.value = answer + ' K';
  }

  // Kelvin to Celcius
  else if (inputSelect.selectedOptions[0].value === 'Kelvin' && outputSelect.selectedOptions[0].value === 'Celcius') {
    const answer = (input.value - 273.15).toFixed(2)
    output.value = answer + ' K';
  }

  // Kelvin to Fahrenheit
  else if (inputSelect.selectedOptions[0].value === 'Kelvin' && outputSelect.selectedOptions[0].value === 'Fahrenheit') {
    const answer = (((input.value - 273.15) * 9) / 5 + 32).toFixed(2)
    output.value = answer + ' K';
  }

}
