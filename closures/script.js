function counter() {
  let count = 0;

  return {
    increment: () => count++,
    getValue: () => count,
  };
}

const count1 = counter();
console.log("count1:", count1.getValue());
count1.increment();
console.log("count1:", count1.getValue());

const count2 = counter();
console.log("count2:", count2.getValue());
count2.increment();
count2.increment();
count2.increment();
console.log("count2:", count2.getValue());
console.log("count1:", count1.getValue());

console.dir(count1.getValue);
