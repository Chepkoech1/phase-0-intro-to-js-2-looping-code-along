// Code your solutions in this file/
let names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";
let messages = [];
function writeCards(name, event){
   for(let n = 0; n < name.length; n++){
    messages.push(`Thank you, ${name[n]}, for the wonderful ${event} gift!`);
   }
    return messages;
  } 
function countDown(number) {
  while (number >= 0){
    console.log(number--);
  }
}