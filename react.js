// // 1
const numbers = [10, -4, 5, -2, 12, 8];

let positiveNums = numbers.filter((number) => number > 0);
let sum = positiveNums.reduce((accum, current) => accum + current, 0);
console.log(sum);

// 2
const randomWords = [
  "banana",
  "apple",
  "banana",
  "orange",
  "lemon",
  "apple",
  "orange",
];

let reduceWords = randomWords.reduce((count, word) => {
  if (count[word]) {
    count[word]++;
  } else {
    count[word] = 1;
  }
  return count;
}, []);

console.log(reduceWords);

/// 3
class Cars {
  constructor(brand, model, speed = 0, motion = "The car is not moving") {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.motion = motion;
  }

  check_motion() {
    if (this.speed > 0) {
      this.motion = "The car is moving";
    } else {
      this.motion = "The car is Stopped";
    }
  }

  accelerate(value) {
    this.speed += value;
    this.check_motion;
  }

  brake(value) {
    this.speed -= value;
    this.check_motion;
  }
  emergency_brake() {
    this.speed = 0;
    this.check_motion;
  }
  status() {
    return `${this.brand} ${this.model} მოძრაობს ${this.speed} კმ/სთ სიჩქარით და სტატუსია ${this.motion}`;
  }
}

const myCar = new Cars("ford", "mustang");
myCar.accelerate(80);
myCar.check_motion();

myCar.brake(40);
myCar.check_motion();

myCar.emergency_brake();
myCar.check_motion();

console.log(myCar.status());

// 4
function addAsync(a, b) {
  return new Promise((resolve, reject) => {
    if (
      a !== undefined &&
      b !== undefined &&
      typeof a === "number" &&
      typeof b === "number"
    ) {
      resolve(a + b);
    } else {
      reject("ERROR ERROR ERROR");
    }
  });
}

// eXample 1
addAsync(2, "Jhon")
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject));

// eXample 2
addAsync(2, 5)
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject));
