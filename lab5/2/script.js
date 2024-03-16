const fs = require("fs")
const filePath = "./text.txt"

let text = fs.readFileSync(filePath,  {encoding:"utf8", flag:"r"})

console.log('первая версия файла:\n' + text)

const reverseText = text.split('').reverse().join('')

fs.writeFileSync(filePath, reverseText, { encoding: "utf8" })

text = fs.readFileSync(filePath,  {encoding:"utf8", flag:"r"})
console.log('последняя версия файла:\n' + text)п