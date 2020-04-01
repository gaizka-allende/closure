console.log('incorrect');
function makeArmy() {
  const shooters = [];
  for (var i = 0; i < 10; i++) {
    const shooter = () => { // a shooter is a function
      console.log(i); // which should display it's number
    };
    shooters.push(shooter);
  }
  return shooters;
}
const army = makeArmy();
army[4](); // 4

console.log('old style correct');
function makeArmy2() {
  const shooters = [];
  for (let i = 0; i < 10; i++) {
    ((index) => {
      const shooter = () => {
        console.log(index);
      };
      shooters.push(shooter);
    })(i);
  }
  return shooters;
}
const army2 = makeArmy2();
army2[4](); // 4

console.log('new style correct');
function makeArmy3() {
  const shooters = [];
  for (let i = 0; i < 10; i++) {
    const shooter = () => { // a shooter is a function
      console.log(i); // which should display it's number
    };
    shooters.push(shooter);
  }
  return shooters;
}
const army3 = makeArmy3();
army3[4](); // 4


