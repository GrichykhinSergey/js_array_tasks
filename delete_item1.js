let array = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];
array.splice(array.indexOf('fish'), 1);
array.splice(array.indexOf('cat'), 1);
array.splice(-2, 2);
alert(array);