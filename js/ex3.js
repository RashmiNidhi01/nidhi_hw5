const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];
const filter=(studentList,func)=>studentList.filter(func);
const cLastNameResults=studentList.filter(item=>item.lastName.startsWith('C'))
.map(item=>
{
return{
firstName:item.firstName,
lastName:item.lastName,
minScore:Math.min(...item.scores),
maxScore:item.scores.reduce((max,value)=>Math.max(max,value),-99),
avgScore:item.scores.reduce((sum,value)=>sum+value,0)/item.scores.length
};
});
console.log(cLastNameResults);