const replaceText = (targetElement, replacementText) => {
	const elements = document.querySelectorAll(targetElement);

	const replacementWords = {
		the: replacementText[0],
		The: replacementText[1],
	};
	const formatedTextObject = []
	const regex = /\b(\w*The\w*)|(\w*the\b\w*) /g;
	Array.from(elements).forEach((element) => {
		const textItems = element.textContent.split(" ");
		const newTextItems = textItems.map((textItem) => {
			return textItem.replace(regex, matched => {
				console.log(matched)
				if (matched === 'The' || matched === 'the') {
					replacementWords[matched]
				}

			});
		});
		formatedTextObject.push(newTextItems.join(" "));
	});


	console.log(formatedTextObject);
	//return newTextItems.join(" ");
}

replaceText("main > h1", ["replacement", "Replacement"]);
replaceText("main p")