// Lv. 1 추억 점수

function solution(name, yearning, photo) {
  return photo.map((cur, idx) => {
      // cur === ["may", "kein", "kain", "radi", ...]
      const rowScore = cur.map(el => {
          // el === 'may'
          const yearningIdx = name.indexOf(el)
          return yearningIdx !== -1 ? yearning[yearningIdx] : 0
      })
      
      return rowScore.reduce((acc, el, idx) => acc+el, 0)
  }, 0)
}
