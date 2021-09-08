let arr = [31, 10, 'chicken', 9, 'fish', 10];
alert(arr.filter(item => isNaN(+item)));
alert(arr.filter(item => item === 10));
