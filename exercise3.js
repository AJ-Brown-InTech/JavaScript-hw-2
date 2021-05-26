let letters = ["cat", "cut", "bat"];

// use a for loop to check each element in the
// array and write to the console "the word cut is in the list", 
// if the word "cut" is in the list.

function isWordInList(words,word){
    for (let i = 0; i < words.length; i++){
        let nextWord = words[i]
        if(nextWord=== word){
            return true
        }
    }
    return false
}
let answer = isWordInList(letters,"cut")
console.log(answer)


answer = isWordInList(["orange" , "pizza"],"cut")
console.log(answer)