const superbowlWin = (arr) => { 
  let res = arr.find(el => el.result === 'W')
  return res ? res.year : undefined
}