function condense(arr) {
  /*while(arr.length > 1){
    let condense = Array(arr.length -1);
    for(let i = 0;i < arr.length - 1;i++){
      condense[i] = Number(arr[i]) + Number(arr[i+1]);

    }
    arr = condense;
  }
  console.log(arr[0]);*/
  
  while (arr.length > 1) {
    let condesed = Array(arr.length -1);
    for (let i = 0; i < arr.length - 1; i++) {
      condesed[i] = Number(arr[i]) + Number(arr[i+1]);
    
    }
    arr = condesed;
  }
  console.log(arr[0]);
}
condense([2, 10, 3]);
condense([5, 0, 4, 1, 2]);
