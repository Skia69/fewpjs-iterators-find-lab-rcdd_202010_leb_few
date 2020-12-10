const superbowlWin = (arr) => { 
  let res = arr.find(el => el.result === 'W')
  if(res) return res.year
  return undefined
}