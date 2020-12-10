const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (arr) => { 
  let result = arr.find(el => el.year === 'W')
  if(!!result) {
    return result.year
  }else {
  return undefined }
}