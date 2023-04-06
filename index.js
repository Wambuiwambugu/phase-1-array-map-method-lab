const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

/*function titleCased() {
  const titleCasedtutorials = tutorials.map(function(str) {
      return str.toLowerCase().split(' ').map(function(word) {
        return word.replace(word[0], word[0].toUpperCase());
      }).join(' ');
    })
    return console.log(titleCasedtutorials);
}*/

function titleCased(){
  return tutorials.map((sentence) => {
    let specificWords = sentence.split(' ');
    let capitalizedWords = specificWords.map((word) => {
      let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      return capitalizedWord;
    })
return console.log(capitalizedWords.join(' '));
  });
  
}

titleCased();