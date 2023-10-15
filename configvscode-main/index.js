function saymyname() {
  console.log('Hello this is Murilo');
}

function writeCountdown(num) {
  console.log(num);
}

function countdown() {
  let count = 10; // rename to count

  waitOneSecAndCount = function () {
    if (count >= 0) {
      writeCountdown(count);
      count--;
      
      setTimeout(() => {
        waitOneSecAndCount();
      }, 250);
    } else{
      goodbye();
    }
  };

  waitOneSecAndCount()
}

saymyname();
countdown();

