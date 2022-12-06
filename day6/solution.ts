import { readFileSync } from 'fs'

function syncReadFile(filename: string) {
    const contents = readFileSync(filename, 'utf-8')
    const arr = contents.split(/\r?\n/)
    return arr
}
const inputData: string[] = syncReadFile('./day6/input.txt')
const message = [...inputData[0]]
const star1 = (lengthOfSignal : number) => {

    for (let i = 0; i < message.length; i++) {
        const element = message.slice(i,i+lengthOfSignal);
        const signalCheck =  [...new Set(element) ]                
        if(signalCheck.length === lengthOfSignal) return i+lengthOfSignal;
    }
}
console.log(star1(4));
const star2 = star1(14)
console.log(star2);
