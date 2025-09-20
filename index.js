// Gifts as an array and wrapping them as a function    
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

// Calling the function to see the output
wrapGifts(gifts);

// Function to print a personalized message multiple times
function writeCards(names, event) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

// Example usage of writeCards function
const names = ["Alice", "Bob", "Charlie"];
const event = "birthday";
console.log(writeCards(names, event));

// Function to count down from a given number to zero
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

// Example usage of countDown function
countDown(10);  

