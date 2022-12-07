import { readFileSync } from 'fs'

function syncReadFile(filename: string) {
  const contents = readFileSync(filename, 'utf-8')
  const arr = contents.split(/\r?\n/)
  return arr
}
class TreeNode {
  descendants: TreeNode[];
  size: number;
  parent?: TreeNode;
  type: string;
  name: string;
  constructor(type: string, name: string, parent?: TreeNode, size?: number) {
    this.parent = parent;
    this.size = size ? size : 0;
    this.type = type;
    this.name = name
    this.descendants = [];
  }
}
const inputData: string[] = syncReadFile('./day7/input.txt')
let currentPath: any[] = []
let rootNode: TreeNode = new TreeNode('dir', 'root')
let workTree: TreeNode[] = [rootNode]
let currentNode: TreeNode = rootNode;
for (let i = 0; i < inputData.length; i++) {
  const element = inputData[i];
  const line = element.split(' ').filter((e: any) => e !== '')
  if (line[0] === '$') {
    if (line[1] === 'cd') {
      if (line[2] === '/') {
        currentNode = rootNode
      }
      else if (line[2] === '..') {
        currentNode = currentNode.parent ? currentNode.parent : currentNode;
      }
      else {
        let index = workTree.findIndex(x => x.name === line[2] && x.parent === currentNode);
        currentNode = workTree[index]
      }
    }
    else if (line[1] === 'ls') {
      for (let j = i + 1; j < inputData.length; j++) {
        const child = inputData[j];
        const ls = child.split(' ').filter((e: any) => e !== '');
        if (ls[0] === '$') break;
        if (ls[0] === 'dir' && workTree.filter(x => x.name === ls[1] && x.parent === currentNode).length === 0) {
          {
            const dir = new TreeNode('dir', ls[1], currentNode)
            workTree.push(dir)
            currentNode.descendants.push(dir)
          }
        }
        else if (!isNaN(parseInt(ls[0]))) {
          const file = new TreeNode('file', ls[1], currentNode, parseInt(ls[0]))
          workTree.push(file)
          currentNode.descendants.push(file)
          currentNode.size += file.size
        }
      }
    }
  }
}

for (let k = workTree.length - 1; k > 0; k--) {
  const node = workTree[k];
  if (node.type === 'dir' && node.parent) {
    node.parent.size += node.size
  };

}
let sum: number = 0;
workTree.filter(x => x.size <= 100000 && x.type === 'dir').forEach(e => {
  sum += e.size
})
console.log(sum);
//star2
const requiredSpace: number = 30_000_000-(70_000_000 - rootNode.size)


let smallestSize :number = rootNode.size ;
console.log(smallestSize);

workTree.filter(x => x.size > requiredSpace && x.type === 'dir').forEach(e => {
  if (e.size < smallestSize) {
    smallestSize = e.size;
  }
});
console.log(smallestSize);
