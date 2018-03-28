//var n = 4;
var ladder = '#';
var space = '?';
var ladderNum = 1;

for(var i=0; i<n; i++) {
	var line = '';

	// Build space
	for(var j=0; j<n-ladderNum; j++) {
		line = line + space;	
	}

	//console.log('-- start --');
	//console.log(line);

	// Build ladder
	for(var k=0; k<ladderNum; k++) {
    line = line + ladder;
  }

	ladderNum++;

	console.log(line);
}
