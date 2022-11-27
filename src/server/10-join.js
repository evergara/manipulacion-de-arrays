const elements = ['Fire', 'Air', 'Water'];

let rtaFinal = '';
let separator = '--';
for (let index = 0; index < elements.length; index++) {
	const element = elements[index];
	if(index === (elements.length - 1)){
		rtaFinal = rtaFinal + element
	} else {
	rtaFinal = rtaFinal + element + separator;
	}
}

console.log( elements.join() );
// expected output "Fire,Air,Water"

console.log(elements.join(''));
// expected output "FireAirWater"

console.log(elements.join('-'));
// expected output "Fire-Air-Water"


let resultJoin = elements.join('**');
let resultSplit = resultJoin.slice('**');

console.log('resultJoin ', resultJoin)
console.log('resultSplit ', elements)
console.log('Array Original', elements)