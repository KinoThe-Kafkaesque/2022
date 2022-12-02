const { readFileSync } = require('fs');
let overAllScore=0;
class Hand {
    constructor(type, cost) {
        this.type = type
        this.cost = cost
    }

}
const rock = new Hand('rock', 1)
const paper = new Hand('paper', 2)
const scissors = new Hand('scissors', 3)
const r = {
    hand: rock,
    beats: scissors,
    losesTo: paper
}
const p = {
    hand: paper,
    beats: rock,
    losesTo: scissors
}
const s = {
    hand: scissors,
    beats: paper,
    losesTo: rock
}


// class Match {
//     constructor(kaiji, me) {
//         switch (kaiji) {
//             case  'A': kaiji = r 
//             break;
//             case 'B': kaiji = p
//             break;
//             case  'C': kaiji = s
//             break;
//             default :break;
//         }
//         switch (me) {
//             case 'X': me = r
//             break;
//             case 'Y': me = p
//             break;
//             case  'Z': me = s
//             break;
//             default : break;
//         }
//         this.kaiji = kaiji
//         this.me = me
//         this.score = this.calcScore(kaiji, me)

//     }

//     calcScore(kaiji, me) {
//         let score;
//         if (kaiji.beats.type === me.hand.type) score = 0;
//         if (kaiji.hand.type === me.hand.type)  score = 3;
//         if (kaiji.losesTo.type === me.hand.type) score =  6;
//         score = score + me.hand.cost;
//         return score
//     }
// }
// // reading file
// function syncReadFile(filename) {
//     const contents = readFileSync(filename, 'utf-8');
//     const arr = contents.split(/\r?\n/);
//     let matchs = []
//     j = 0;
//     for (let i = 0; i < arr.length; i++) {

//         const hands = arr[i].split(' ')
//         matchs.push(new Match(hands[0], hands[1]))
//     }
//     return matchs;
// }
// const star1 = syncReadFile('./day2/input.txt');
// aggregating score
// for (let index = 0; index < star1.length; index++) {
//     const element = star1[index];
//     overAllScore += element.score
    
// }


class Match {
    constructor(kaiji, me) {
        switch (kaiji) {
            case  'A': kaiji = r 
            break;
            case 'B': kaiji = p
            break;
            case  'C': kaiji = s
            break;
            default :break;
        }
        switch (me) {
            case 'X': me = kaiji.beats
            break;
            case 'Y': me = kaiji.hand
            break;
            case  'Z': me = kaiji.losesTo
            break;
            default : break;
        }
        this.kaiji = kaiji
        this.me = me
        this.score = this.calcScore(kaiji, me)

    }

    calcScore(kaiji, me) {
        let score;
        // console.log(me);
        if (kaiji.beats.type === me.type) score = 0;
        if (kaiji.hand.type === me.type)  score = 3;
        if (kaiji.losesTo.type === me.type) score =  6;
        score = score + me.cost;
        return score;
    }
    

}

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    let games = []
    j = 0;
    for (let i = 0; i < arr.length; i++) {
        const result = arr[i].split(' ')
        games.push(new Match(result[0], result[1]))
    }
    return games;
}
const star2 = syncReadFile('./day2/input.txt');
for (let index = 0; index < star2.length; index++) {
    const element = star2[index];
    overAllScore += element.score
}
console.log(overAllScore);
