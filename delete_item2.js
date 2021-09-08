let array = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];
array = array.filter((item, ind, arr) => item != 'fish' && item != 'dog' && ind < arr.length - 2);
alert(array);