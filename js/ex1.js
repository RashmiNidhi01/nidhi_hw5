class square {
    
    constructor(side) {
    this.side=side
    }
    
    Perimeter(){
       return 4*this.side;  }
       Area(){
           return this.side*this.side;
       }
       diagonal(){
           return Math.sqrt(2)*this.side;
       }
describe(){
    return `square with side ${this.side} has perimeter of ${this.Perimeter()}, area of ${this.Area()}, and diagonal of ${this.diagonal()}.`;
}
};
    const square_one= new square(2);
    const square_two=new square(3);
    const square_three=new square(4);
console.log(square_one.describe());
console.log(square_two.describe());
console.log(square_three.describe());
