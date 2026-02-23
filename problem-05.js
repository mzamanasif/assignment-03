var student = {
    name: "jhankar",
    roll: 1020,
    department: "cse"
}

value = Object.values(student);
console.log(value.slice(0, 2).join('') + '.' + value.slice(2) + '@gmail.com');

