function solution(wallpaper) {
  let maxPos = [0, 0]
  let minPos = [Infinity, Infinity]
  const pos = []
  // 파일이 있는 위치의 좌표를 모두 검사
  wallpaper.forEach((x, xIdx) => {
      [...x].forEach((y, yIdx) => {
          if(y === '#') {
              if(xIdx < minPos[0]) minPos[0] = xIdx
              if(xIdx > maxPos[0]) maxPos[0] = xIdx
              if(yIdx < minPos[1]) minPos[1] = yIdx
              if(yIdx > maxPos[1]) maxPos[1] = yIdx
          }
      })
  })
  // 끝 좌표는 좌표의 우측 하단이므로 x, y에 각각 1씩 더해줌
  maxPos = maxPos.map(a => a+1)
  return [...minPos, ...maxPos]
}

/*
function solution(wallpaper) {
    let left = [];
    let top = [];
    let right = []
    let bottom = [];
    wallpaper.forEach((v,i) => {
        [...v].forEach((val,ind) => {
            if(val === "#") {
                left.push(i)
                top.push(ind)
                right.push(i + 1)
                bottom.push(ind + 1)
            }
        })
    })
    return [Math.min(...left), Math.min(...top), Math.max(...right), Math.max(...bottom)]
}
*/