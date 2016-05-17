var array = [1,2,3,4,5];
var sum = 0;

//Part 1: Iterate through the array
for (i in array){
  sum += array[i];
}
  //print sum to console
console.log(sum);

//.splice() to insert the number 6 after the number 2
  array.splice(2, 0, 6);
  //output array to the console
  console.log(array);

//Challenge 2: Using jQuery, change the text() of Answer to $6500
$("#answer").text("$6500");
