const name = "Ben";
let age = 24;
let dateOfBirth = "feb";

let statuses = [ 
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message = '';
const currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}

function unshift(...letters) {
    
    console.log(...letters)
  }
  unshift("a", "b", "c", "d", "e")

  let hey = "apple"
  let what = 21

  console.log(`Hi ${hey} I'm guessing your age is ${what}`)