import { readFileSync } from 'fs'

function syncReadFile(filename: string) {
    const contents = readFileSync(filename, 'utf-8')
    const arr = contents.split(/\r?\n/)
    return arr
}
const inputData: any[] = syncReadFile('./day5/input.txt')
const crates: string[] = syncReadFile('./day5/crates.txt')

for (let index = 0; index < inputData.length; index++) {
    let e = inputData[index]
    e = e.replace('move', '')
        .replace('to', '')
        .replace('from', '')
    inputData[index] = e.split(' ').filter((e: any) => e !== '')

}

//STAR1
// const star1 = () => {
//     for (let i = 0; i < inputData.length; i++) {
//         const element = inputData[i]
//         const quota: number = parseInt(element[0])
//         const src: number = parseInt(element[1]) - 1
//         const target: number = parseInt(element[2]) - 1

//         for (let j = 0; j < quota; j++) {
//             // [...crates[target]].push(([...crates[src]].pop()) as string)
//             const crate = crates[src].charAt(crates[src].length - 1);
//             crates[src] = crates[src].substring(0, (crates[src].length) - 1)

//             crates[target] += crate
//         }
//     }
// }

// const star2 = () => {
for (let i = 0; i < inputData.length; i++) {
    const element = inputData[i]
    const quota: number = parseInt(element[0])
    const src: number = parseInt(element[1]) - 1
    const target: number = parseInt(element[2]) - 1

    const crate = crates[src].substring(crates[src].length - quota, crates[src].length)
    console.log(crate);
    
    crates[src] = crates[src].substring(0, crates[src].length - quota)

    crates[target] += crate
}
// }
// star2();
console.log(crates)
