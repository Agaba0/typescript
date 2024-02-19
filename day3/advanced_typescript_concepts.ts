function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

// Example usage:
const originalArray = [1, 2, 3, "guy", 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray);

// Define the DaysOfWeek enum
enum DaysOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

// Function that uses the DaysOfWeek enum
function getDayMessage(day: DaysOfWeek): string {
  switch (day) {
    case DaysOfWeek.Sunday:
      return "It's a relaxing day!";
    case DaysOfWeek.Monday:
      return "Time to start the week!";
    case DaysOfWeek.Tuesday:
    case DaysOfWeek.Wednesday:
    case DaysOfWeek.Thursday:
      return "You're doing great!";
    case DaysOfWeek.Friday:
      return "Weekend is almost here!";
    case DaysOfWeek.Saturday:
      return "Enjoy the weekend!";
    default:
      return "Invalid day";
  }
}

// Example usage:
const today = DaysOfWeek.Friday;
const message = getDayMessage(today);
console.log(message);

// Type guard function
function isStringOrNumber(value: any): value is string | number {
  return typeof value === "string" || typeof value === "number";
}

// Example usage
const exampleValue: string | number = "Hello";

if (isStringOrNumber(exampleValue)) {
  // Inside this block, TypeScript knows that `exampleValue` is either a string or a number
  console.log(`Value is a string or number: ${exampleValue}`);
} else {
  console.log("Value is not a string or number");
}
