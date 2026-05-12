const valores = [5, 8, 12, 8, 3];

const a = valores.find(v => v === 8);
const b = valores.filter(v => v === 8);
const c = valores.some(v => v === 8);

console.log(a, b, c);