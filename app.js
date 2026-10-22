function getHello(a) {
  if (Number(a) > 7) {
    alert("Hello")
  }
}

function getHelloMessage(a) {
  if (typeof a === "string" && a.trim() === "John") {
    alert("Hello, John")
  } else {
    alert("There is no such name")
  }
}

function getNumbers(array) {
  alert(
    array
      .split(",")
      .map((item) => Number(item))
      .filter((item) => item % 3 === 0 && item !== 0)
      .join(", "),
  )
}

const num = prompt("Enter a number")
getHello(num)

const user = prompt("Enter a name")
getHelloMessage(user)

const numbers = prompt("Enter numbers separated by commas")
if (numbers !== null) {
  getNumbers(numbers)
}
