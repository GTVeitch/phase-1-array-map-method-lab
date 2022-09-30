const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((string1) => {
    const brokenArray = [] = string1.split(" ")

    const brokenArray2 = [] = brokenArray.map((string2) => string2.charAt(0).toUpperCase() + string2.slice(1))

    const fixedArray  = /*[] = brokenArray2.map(() =>*/ brokenArray2.join(" ")//this dupes it for some reason
    const fixedArrayLength = fixedArray.length

    /*const correctArray = []
    for(let counter = 0; counter < fixedArrayLength; counter ++) {
       correctArray.push(fixedArray[counter])
    }*/
    return fixedArray
  })
}
