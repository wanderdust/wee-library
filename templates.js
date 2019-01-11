// escapes a given string.
const escape = (str) => {
  return str.split('').map((char) => {
		return '\\' + char;
  }).join('');
};

// Repeats a string a specific number of times.
const repeat = (str, repeatTimes) => {
	for (let i = repeatTimes; i > 0; i--) {
  	console.log(str)
  }
};


// template constructor. Takes the parameters template string and custom delimiters.
const template = (string, delimiters = {open: '*(', close: ')*' }) => {
	const open = escape(delimiters.open);
  const close = escape(delimiters.close);

	return (repeatTimes, ...args) => {
    if (typeof repeatTimes !== 'number') {
      throw `The first argument in function template(number of repetitions) must be a number`;
    }

    let tmpltStr = string;
    const regex = new RegExp(open + '(.*?)' + close);
    
    for (let i = 0; i < repeatTimes; i++) {
    	let argument = args[i];
      tmpltStr = tmpltStr.replace(regex, argument);
    }
    repeat(tmpltStr, repeatTimes);
  };
};


// Example
const myTemplate = template('Hello my name is *(name )* and Im *(surname)*');
// Args: repetition times, and parameters.
myTemplate(2, 'Pablo', '25');