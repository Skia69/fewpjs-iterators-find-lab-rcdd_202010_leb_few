const superbowlWin = (arr) => { 
  let result = arr.find(el => el.result === 'W')
  if(result) return result.year
  return undefined
}