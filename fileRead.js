var fs = require('fs');
const getUrls = require('get-urls');

const testFolder = 'C:/Users/HARSH/Desktop/awesome-github';

fs.readdir(testFolder, function(err, files) {
  var txtFiles = files.filter(el => /\.md$/.test(el));
  //console.log(txtFiles);
  for(var i = 0; i < txtFiles.length; i++) {
	//console.log(txtFiles[i]);
	var file = fs.readFileSync(txtFiles[i], "utf8");
	//console.log(file);
	const text = file;
    var links = getUrls(text);
	//console.log(links);
	//console.log(links.size);
	//for(var j = 0; j < links.size; j++) {
	//	console.log(links[i]);
	//}
	for(let link of links) {
		console.log(link);
	}
  }
})


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