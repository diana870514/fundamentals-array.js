function reverse(n,nums){
    let reversed = [];
    for(let i = n - 1 ; i >= 0;i-- ){
        reversed[reversed.length] = nums[i];
    }
    console.log(reversed.join(' '));
}
reverse(3, [10, 20, 30, 40, 50]);