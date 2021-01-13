const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(obj){
  let result = obj.find(ele => ele.result === "W")

  if (result) {
    return result.year
  } else {
    return undefined
  }
  
}


// ele.year === winYear