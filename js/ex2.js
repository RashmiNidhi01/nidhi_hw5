const numbers = [1, 2, 3, 4,5,6,7,8,9,10];
const Odd = numbers.filter(item => item % 2 != 0);
console.log(Odd); 
const div_by_five_or_two = numbers.filter(item => item % 2 ==0 || item % 5 == 0);
console.log(div_by_five_or_two);
const div_by_three_square =numbers.filter(item => item % 3==0).map(item=>item**2);
console.log(div_by_three_square);
const sq_no_div_by_five = numbers.filter(item => item%5==0).map(item=>item**2).reduce((sum,value)=>sum+value,0);
console.log(sq_no_div_by_five);