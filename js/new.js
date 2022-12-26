var a = [1, 2, 1, 3, 4, 3, 5];

var d = a => a.filter((item, index) => a.indexOf(item) !== index)

var e = d(a);

document.write(e);
		
		