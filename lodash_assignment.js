const _ = require("lodash");

const members = [
    {name: 'Rakesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];
  
console.log(_.head(members).name.split(" ")[0]);
// members.forEach(item => )
var firstNames = _.map(members, (member)=>{return member.name.split(" ")[0]})
firstNames
var lastNames = _.map(members, (member)=>{return member.name.split(" ")[1].toUpperCase()})
lastNames
var ageInRange = _.compact(_.map(members,(member)=>{if(member.age >=41 && member.age<=60){return member;}}))
ageInRange
var averageAge = _.sumBy(members,(member)=> {return member.age});
averageAge
var maximumAge = _.maxBy(members,(member)=>{return member.age})
maximumAge
var young = _.compact(_.map(members,(member)=>{if(member.age <= 35){return member}}))
young
var old = _.compact(_.map(members,(member)=>{if(member.age > 35){return member}}))
old
var noage = _.compact(_.map(members,(member)=>{if(member.age == null){return member}}));
noage
members.splice(2,0,{name: "Saumya jain",age: 20});
console.log(members[2])
ages = _.compact(_.map(members,(member)=> {return member.age}));
ages
sum = _.reduce(ages,(sum,n)=>{return sum+n});
console.log(sum);
