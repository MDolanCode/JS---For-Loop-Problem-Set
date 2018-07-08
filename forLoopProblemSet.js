//For Loop Problem set

//1.Print all Numbers between -10 and 19

for(var i = -10; i < 20; i++) {
  console.log(i);
}


//2.Print all Even Numbers between 10 and 40

for(var i = 10; i <= 40; i+=2) {
  console.log(i);
}

for(var i = 10; i <= 40; i += 1) {
  if(i % 2 === 0) {
    console.log(i);
  }
}

//3.Print all Odd Numbers between 300 and 333

for(var i = 300; i <= 333; i++) {
  if(i % 2 !== 0) {
      console.log(i);
  }
}

//4.Print all Numbers divisible by 5 AND 3 between 5 and 50

for(var i = 5; i <= 50; i++) {
  if(i % 5 === 0 && i % 3 === 0) {
    console.log(i);
  }
}
