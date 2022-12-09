import { readFileSync } from 'fs'

function syncReadFile(filename: string) {
  const contents = readFileSync(filename, 'utf-8')
  const arr = contents.split(/\r?\n/)
  let grid: any[] = []
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    grid.push([...element])
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const element = grid[i][j];
        
    }
  }
  return grid;
}

const inputData: any[] = syncReadFile('./day8/input.txt')

let visibleCount: number = 0;
// star1

for (let i = 0; i < inputData.length; i++) {
  for (let j = 0; j < inputData[i].length; j++) {
    const element = inputData[i][j];
    const y: any[] = inputData[i];
    const x: any[] = inputData.map(d=>d[j])
    // edges
    if (i === 0 || j === 0 || i === inputData.length - 1 || j === inputData[0].length - 1)
      visibleCount++;

    else {
      const north = x.slice(0, i)
      const west = y.slice(0, j)
      const east = y.slice(j + 1, y.length)
      const south = x.slice(i + 1, x.length)
      const up=north.filter(x=> x >= element).length
      const left=west.filter(x=> x >= element).length
      const right =east.filter(x=> x >= element).length
      const down =south.filter(x=> x >= element).length  
      if(up ===0 || down ===0 || left === 0|| right === 0 )
      visibleCount++
    }
  }
}
let scenicScore: number = 0;
// star2

for (let i = 0; i < inputData.length; i++) {
  for (let j = 0; j < inputData[i].length; j++) {
    const element = inputData[i][j];
    const y: any[] = inputData[i];
    const x: any[] = inputData.map(d=>d[j])
      const north = x.slice(0, i)
      const west = y.slice(0, j)
      const east = y.slice(j + 1, y.length)
      const south = x.slice(i + 1, x.length)
      let up=0
      let left=0
      let right =0
      let down =0
      // if (i === 1 && j === 2) {
      //   console.log(north);
        
      // }
      for (let k = north.length-1; k >= 0; k--) {
        const e = north[k];
        up++

        if(e >= element) break
      }
      for (let k = 0; k < south.length; k++) {
        const e = south[k];
        down++
        if(e >= element) break
      }
      for (let k = west.length-1; k >= 0; k--) {
        const e = west[k];
        left++
        if(e >= element) break
      }
      for (let k = 0; k < east.length; k++) {
        const e = east[k];
        right++
        if(e >= element) break
      }

      // if (i === 1 && j === 2) {
      //   console.log(up,down,left,right);
        
      // }
      if(up*down*left*right > scenicScore ) 
      { 
        console.log( i , j , up , left ,down , right);

        scenicScore = up*down*left*right;
        console.log(scenicScore);
        
      }
  }
}

// console.log(scenicScore);
