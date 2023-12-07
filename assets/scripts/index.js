function palindrome (str) {
//   const j = str.length-1
  for (let i = 0; i <= str.length - 1 / 2; i++) {
    if (str[i] !== str[str.length - 1]) {
      return false
    }
    return true
  }
}

console.log(palindrome('beeb'))

function checkPalindrome () {
  const word = document.getElementById('question').value
  const palindrom = palindrome(word)
  const answer = document.getElementById('result')

  if (palindrom) {
    answer.innerHTML = 'The word entered is a Palindrome'
  } else {
    answer.innerHTML = 'The word entered is not a Palindrome'
  }
}
checkPalindrome()
