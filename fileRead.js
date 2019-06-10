var fs = require('fs');
const testFolder = 'C:\\Users\\HARSH\\Documents\\awesome-github';
var markdownLinkExtractor = require('markdown-link-extractor');

global.hash_map = new Set();
global.counter = 0;

function readFiles(file) {
	file = String(file)
	if (hash_map.has(file)) {
		return;
	}
	hash_map.add(file)

	var markdown = fs.readFileSync(file).toString();
	var links = markdownLinkExtractor(markdown);

	console.log('file: '+ file);
	counter++;
	for (let link of links) {
		readFiles(link);
	}
}

fs.readdir(testFolder, function (err, files) {
	
		var markdown = fs.readFileSync('admob.md').toString();
		var links = markdownLinkExtractor(markdown);
	
		for (let link of links) {
			if (hash_map.has(link)) {
				continue;
			}
			readFiles(link);
		}
		console.log('Count: '+ counter);
})



/* --------------OLD CODE--------------------- */

//fs.readdirSync(testFolder).forEach(file => {
//  console.log(file);
//});

//var file = fs.readFileSync("README.md", "utf8");
//console.log(file);

//const text = file;
//console.log(getUrls(text));

//var links = getUrls(text);

//for(var i = 0; i < links.length; i++) {

//}