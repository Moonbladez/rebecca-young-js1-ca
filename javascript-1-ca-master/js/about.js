const replaceText = selector => {
	//select the selector required to change
	const element = document.querySelector(selector);
	//select content of the selector
	const content = element.innerHTML;
	//split content at the space
	const splitContent = content.split(" ");
	//regex to search
	const regex = {
		The: /\b(\w*The\b\w*)/g,
		the: /\b(\w*the\b\w*)/g,
	};
	//map through the split content and if the word matches replace, if notreturn the original word
	const textReplaced = splitContent.map(word => {
		if (word.match(regex.The)) {
			return word.replace(regex.The, "Replacement");
		} else if (word.match(regex.the)) {
			return word.replace(regex.the, "replacement");
		} else {
			return word;
		}
	});
	//rejoin the words with a space
	const textReplacedAndJoined = textReplaced.join(" ");
	//replace selectors innerHTML
	element.innerHTML = textReplacedAndJoined;
};
//set time out
setTimeout(() => {
	//select seperate selectors to call function on. Rather than using just the main tag as that was too global to make it reuseable
	replaceText("h1");
	replaceText("blockquote");
}, 4000);
