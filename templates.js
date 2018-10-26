// escapes a given string.
const escape = (str) => {
  return str.split('').map((char) => {
		return '\\' + char;
  }).join("");
};

// Repeats a string a specific number of times.
const repeat = (str, repeatTimes) => {
	for (let i = repeatTimes; i > 0; i--) {
  	console.log(str)
  }
};


// template constructor. Takes the parameters template string and custom delimiters.
function Template (string, delimiters = {open: '*(', close: ')*' }) {
	const open = escape(delimiters.open);
  const close = escape(delimiters.close);

	return function (...args) {
    let tmpltStr = string;
  	const repetition = args[args.length - 1];
    const regex = new RegExp(open + "(.*?)" + close);
   
    for (let i = 0; i < (args.length - 1); i++) {
    	let argument = args[i];
      tmpltStr = tmpltStr.replace(regex, argument);
    }
    
    repeat(tmpltStr, repetition);
  };
};