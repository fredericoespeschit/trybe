let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1 - ordem crescente
numbers.sort(function(a, b){
    if(a < b){
        return -1;
    } else {
        return 1;
    }
});
console.log(numbers);

//2 - ordem decrescente
numbers.sort(function(a, b){
    if(a > b){
        return -1;
    } else {
        return 1;
    }
});
console.log(numbers);

//3, O resultado deve ser o array: [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
