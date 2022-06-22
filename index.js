const members = [
    {name: 'Rakesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];
/*
1. Get array of first names of everyone
2. Make everyone's last names in UPPERCASE in given array of objects
3. Get entries where age is between 41-60
4. Get average age
5. Get Person with maximum age
6. Divide persons in three groups, result should look like
    {
      'young': [],
      'old': [],
      'noage': []
    }
    Less than 35yrs is young, above 35 is old
7. add a new member to same members array instance at index 2
8. extract first and second element using destructing
9. Create a new array instance adding a new member at index 0,
   and keeping existing afterwards
10. Extract properties of object using destructuring
11. Rename extracted property of object while destructing
12. Destructure any property of an object and use spread operator
    to get remaining properties in an object
13. Create a new object by copying using spread operator, override
    one of the properties to assign a new value in the same step
14. Use reduce function on array and object
*/
firstNames =members.map(item => console.log(item.name.split(' ')[0]))
lastNames = members.map(item => item.name.split(' ')[1].toUpperCase());
console.log("Last Names: ",lastNames);
let total_age = 0;
let largest_age = 0;
let young = [];
let old = [];
let noage = [];
for (i = 0; i < members.length; i++) {
    if (members[i].age != null) {
        members[i].age>largest_age?largest_age=members[i].age:largest_age=largest_age
        total_age = total_age + members[i].age;
        if(members[i].age < 35 ){
            young.push(members[i]);
        }
        else{
            old.push(members[i]);
        }
    }
    else {
        noage.push(members[i]);
        total_age = total_age + 0;
    }
}
let result = {
    "young": young,
    "old":old,
    "noage": noage
}
console.log(result)
console.log("Largest Age is: ",largest_age)
console.log("Average Age is: ",total_age/members.length)
members.splice(2, 0, {name: "Ankit Chaudhary",age: 21});
console.log(members[2])
const {name, age} = members[0];
console.log("Element at index 1: ",name);
console.log("Element at index 2: ",age);
members.splice(0,0,{name: "Shivam Gupta",age: 21});
console.log(members[0])
console.log(first.name);
console.log(zero.name);
second.name = "Ankit Chaudary(Edited)"
console.log(second)