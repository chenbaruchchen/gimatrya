const HEBREW_CHARS = [
  "א", "ב", "ג", "ד", "ה", "ו", "ז", 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת'
];
const UNIQUE_HEBREW_CHARS = ["ך", "ם", "ן", "ף", "ץ"];

const DB = init()


function init(flavor = "NORMAL") {
  const NORMAL = HEBREW_CHARS;
  const WITH_UNIQUE = HEBREW_CHARS.concat(UNIQUE_HEBREW_CHARS);

  const FLAVORS = { NORMAL, WITH_UNIQUE }

  if (!FLAVORS[flavor] || FLAVORS[flavor].length <= 0) {
    throw new Error(`can not init gimatric DB. unrecognized falvor was called on init()`)
  }

  return Object.freeze(FLAVORS[flavor].reduce((data, c, i) => {
    data[c] = {
      char: c,
      index: i,
      value: gimatricValueFromIndex(i)
    };

    return data
  }, {}));

  function gimatricValueFromIndex(index) {
    return ((index % 9) + 1) * Math.pow(10, (Math.floor((index) / 9)))
  }
}

module.exports = DB