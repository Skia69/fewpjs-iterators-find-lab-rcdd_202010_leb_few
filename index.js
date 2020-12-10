const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (arr) => { 
  let result = arr.find(el => el.year === 'W')
  return !!result ? result.year : undefined
}