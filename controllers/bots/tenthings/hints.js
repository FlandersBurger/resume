const MAX_HINTS = 6;
const SPECIAL_CHARACTERS = "\\\\/ !?@#$%^&*()_+:.{},;\\-'``’‘\"";
const VOWELS = 'aeiouAEIOUàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ';

exports.getHint = (hints, value) => {
  let i = 0;
  let tester = '';
  //3 -> the 3 first hints reveal other stuff
  if (hints > 3) {
    let croppedValue = '';
    for (i = 1; i < value.length - 1; i++) {
      if (!/[ -]/.test(value.charAt(i - 1)) && !/[ -]/.test(value.charAt(i + 1))) {
        croppedValue += value.charAt(i);
      }
    }
    const letters = countLetters(croppedValue);
    let revealCount = Math.floor(letters.length * (hints - 3) / 4);
    revealCount = revealCount < hints - 3 ? hints - 3 < letters.length ? hints - 3 : letters.length : revealCount;
    for (i = 0; i < revealCount; i++) {
      tester += letters[i].letter;
    }
  }
  let str = '';
  switch (hints) {
    case 0:
      return value.conceal('');
    case 1:
      str = value[0] + value.substring(1, value.length).conceal('');
      break;
    case 2:
      str = value[0] + value.substring(1, value.length - 1).conceal('') + value[value.length - 1];
      break;
    case 3:
      str = value[0] + value.substring(1, value.length - 1).conceal(VOWELS) + value[value.length - 1];
      break;
    default:
      str = value[0] + value.substring(1, value.length - 1).conceal(VOWELS + tester) + value[value.length - 1];
  }
  for (i = 1; i < value.length - 2; i++) {
    switch (hints) {
      case 1:
        if (i === 0 || /[ -]/.test(value.charAt(i - 1))) {
          str = str.substr(0, i) + value.charAt(i) + str.substr(i + 1);
        }
        break;
      default:
        if (i === 0 || /[ -]/.test(value.charAt(i - 1)) || /[ -]/.test(value.charAt(i + 1)) || i === value.length - 1) {
          str = str.substr(0, i) + value.charAt(i) + str.substr(i + 1);
        }
        break;
    }
  }
  return str;
}

exports.getMaxHints = () => MAX_HINTS;
exports.getSpecialCharacters = () => SPECIAL_CHARACTERS;

function countLetters(string) {
  //Vowels get revealed all at once
  const alphabet = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p',
  'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  return alphabet.map(letter => ({
    letter,
    count: (string.match(new RegExp(`[${letter}]`,'ig')) || []).length
  })).filter(({count}) => count).sort((letter1, letter2) => letter1.count - letter2.count);
}
