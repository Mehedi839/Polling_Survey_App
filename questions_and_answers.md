<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b>

</summary>
<p>

#### Answer: ?

<i>B: ReferenceError: greetign is not defined
 you declared a variable greeting, but then you mistakenly assigned an empty object to a variable called greetign (note the typo with the variable name). Since greetign was not declared using let, var, or const, and it contains a typo, JavaScript will throw a ReferenceError, 
let greeting;
greeting = {};
console.log(greeting);
</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>D: 3

 the sum function takes two parameters, a and b. When you call sum(1, "2"), JavaScript implicitly converts the number 1 to a string and then concatenates it with the string "2", resulting in the string "12". Finally, JavaScript converts this string back to a number when you use the + operator, and "12" is converted to 12. So, the sum function returns 12, and when you log it, you will see 3, which is the sum of 1 and 12.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>A: ['🍕', '🍫', '🥑', '🍔']

 you initially create an array food with elements ["🍕", "🍫", "🥑", "🍔"]. Then, you create an object info with a property favoriteFood set to the first element of the food array, which is "🍕".

Later in the code, you change the value of info.favoriteFood to "🍝". However, this change does not affect the original food array. Therefore, when you log food, it remains the same and contains ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>B: Hi there, undefined
the sayHi function expects a name parameter, but when you call sayHi() without providing any argument, the name parameter is not passed a value. In this case, JavaScript assigns undefined to name. Therefore, the function returns "Hi there, undefined", and that's what will be logged to the console.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>A: 1

 you initialize a variable count to 0 and have an array nums containing [0, 1, 2, 3]. You then use the forEach method to iterate over the elements of nums. Inside the callback function, you check if the current num is truthy.

In JavaScript, 0 is considered falsy, and all other numbers (including 1, 2, and 3) are considered truthy. Therefore, only the value 1 in the nums array will satisfy the condition if (num), and count will be incremented by 1. Hence, the final value of count is 1.</i>

</p>
</details>
