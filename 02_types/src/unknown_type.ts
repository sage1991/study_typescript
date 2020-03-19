let userInputAny: any;
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "dddd";

// userName = userInput; error
// type check
if (typeof userInput == "string") {
  userName = userInput;
}

userName = userInputAny;
