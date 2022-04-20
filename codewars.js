// CODE WARS RECENT WORK

// Tests are written below all functions

// Run me in terminal :)

const how_many_headaches_recieved_writing_these_functions = 47;

// function adds numbers together regardless if they are bigger than javascripts max integer size.
// While loops were used in place of for loops to increased speed

function sumStrings(a,b) {
    let answer = []
    let carry = 0
    if(a.length > 15 || b.length > 15) {
      let arr = a.split('').reverse()
      let brr = b.split('').reverse()
      let i = 0
      let length
      if(a.length > b.length) {
        length = a.length
      } else {
        length = b.length
      }
       while (i < length) {
        if (i > a.length - 1) {
          let j = i
          let first = true
          while (j < length) {
            if (first) {
              answer.unshift(Number(brr[j]) + Number(carry))
              first = false
            } else {
              answer.unshift(brr[j])
            }
            j++
          }
          return answer.join('')
        } else if (i > b.length - 1) {
          let j = i
          let first = true
          while (j < length) {
            if (first) {
              answer.unshift(Number(arr[j]) + Number(carry))
              first = false
            } else {
              answer.unshift(arr[j])
            }
            j++
          }
          return answer.join('')
        }
        let calc = Number(arr[i]) + Number(brr[i]) + Number(carry);
        if (calc >= 10) {
          copy = calc.toString().split("")
          carry = Number(copy[0])
          answer.unshift(Number(copy[1]))
        } else {
          carry = 0
          answer.unshift(calc)
        }
          i++
      }
      if(carry > 0) {
        answer.unshift(carry)
      }
      return answer.join('')
      
    } else {
        return (Number(a) + Number(b)).toString()
    }
  }

  // Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

  function pigIt(str){
    let arr = str.split(' ')
    let newArr = []
    var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g
    arr.map(word => {
      if (word.search(regex) !== -1) {
        newArr.push(word)
        return
      }
      let char = word[0]
      word = word.substring(1)
      word = word + char + "ay"
      newArr.push(word)
    })
    return newArr.join(' ')
  }

  // A format for expressing an ordered list of integers is to use a comma separated list of either individual integers
  // or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. 
  // The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
  // Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.



  function solution(list){
    let arr = []
    let arr2 = []
    for(let i = 0; i < list.length; i++) {
      if(list[i] === list[i + 1] - 1) {
        arr2.push(list[i])
      } else if(list[i] !== list[i+1] - 1 && arr2.length > 0) {
        arr2.push(list[i])
        if (arr2.length < 3) {
          for(let j = 0; j < arr2.length; j++) {
            arr.push(arr2[j])
          }
        } else {
          let string = `${arr2[0]}-${arr2[arr2.length-1]}`
          arr.push(string)
        }
        arr2 = []
      } else {
        arr.push(list[i])
      }
    }
    return arr.toString(',')
  }

  //////////////////////// TESTS /////////////////////////////

  // sumStrings test
  // numbers to be added | answer
  console.log('\nCodewars Progress!')
  console.log('\nSum Strings as Numbers, 4 Kyu\nhttps://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript\n')
  console.log(sumStrings('123','456'), '579')
  console.log(sumStrings('-100', '400'), '300')
  console.log('\n(large number tests taken directly from Codewars)\n')
  console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'), '712577413488402631964821329')
  console.log(sumStrings('50095301248058391139327916261','81055900096023504197206408605'), '131151201344081895336534324866')

  // pigIt tests
  // phrase to be translated, translation

  console.log('\nSimple Pig Latin, 5 Kyu\nhttps://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript/\n')
  console.log(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
  console.log(pigIt('This is my string'),'hisTay siay ymay tringsay')
  console.log(pigIt('Dura lex sed lex'),'uraDay exlay edsay exlay')
  console.log(pigIt('Morituri nolumus mori'),'orituriMay olumusnay orimay')

  // range extraction tests
  // list of integers | correctly formatted string in range format

  console.log('\nRange Extraction, 4 Kyu\nhttps://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript/\n')
  console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20")
  console.log(solution([-3, -2, -1, 2, 10, 15, 16, 18, 19, 20]), '-3--1,2,10,15,16,18-20\n')
  console.log(solution([-83,
    -81,
    -79,
    -77,
    -75,
    -74,
    -71,
    -70,
    -68,
    -67,
    -65,
    -62,
    -60,
    -59,
    -56,
    -55,
    -54,
    -51,
    -50,
    -49,
    -46,
    -45,
    -42,
    -39,
    -36,
    -35,
    -33,
    -31,
    -30]), '\nEQUALS\n -83,-81,-79,-77,-75,-74,-71,-70,-68,-67,-65,-62,-60,-59,-56--54,-51--49,-46,-45,-42,-39,-36,-35,-33,-31,-30')