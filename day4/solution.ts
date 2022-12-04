import { readFileSync } from 'fs';

function syncReadFile(filename: string) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}
const inputData: string[] = syncReadFile('./day4/input.txt');

let badPairs: number = 0;
for (let index = 0; index < inputData.length; index++) {
    const pair: string[] = inputData[index].split(',');
    const elf0: string[] = pair[0].split('-')
    const elf1: string[] = pair[1].split('-')
    const section0: number = parseInt(elf0[0])
    const section1: number = parseInt(elf0[1])
    const section2: number = parseInt(elf1[0])
    const section3: number = parseInt(elf1[1])
    // const sections : number[] = [section0 , section1 , section2 , section3];

    if ((section0 <= section2 && section1 >= section3) || (section2 <= section0 && section3 >= section1)) badPairs++
}
// star2 (section0 <= section2 && section1 >= section3) || (section2 <= section0 && section3 >= section1)

badPairs = 0;
function range(start : number, end : number) {
    let list: number[] = [];
    for (let k = start; k <= end; k++) {
        list.push(k);
    }
    return list
}
for (let index = 0; index < inputData.length; index++) {
    const pair: string[] = inputData[index].split(',');
    const elf0: string[] = pair[0].split('-')
    const elf1: string[] = pair[1].split('-')
    const section0: number = parseInt(elf0[0])
    const section1: number = parseInt(elf0[1])
    const section2: number = parseInt(elf1[0])
    const section3: number = parseInt(elf1[1])
    const arr0: number[] = range(section0,section1 )
    const arr1: number[] = range(section2,section3 )
    const filteredArray : number[] = arr0.filter(value => arr1.includes(value));
    // console.log(section1);
    
    if (filteredArray.length !== 0) badPairs++
}

console.log(badPairs);
