function solution(n, m, section) {
  let painted = 0;
  let part = 0;
  section.forEach((n) => {
      if(n > part) {
          part = n + m -1 ;
          painted++;
      }
  });
  return painted;
}