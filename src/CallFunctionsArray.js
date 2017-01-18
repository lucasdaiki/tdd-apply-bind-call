const functions = [ () => console.log('fn1'), () => console.log('fn3'),  () => console.log('fn3') ];

const run = {
  simple: () => functions.forEach(Function.prototype.call, Function.prototype.call),
  call: () => Array.prototype.forEach.call(functions, Function.prototype.call, Function.prototype.call),
  apply: () => Array.prototype.forEach.apply(functions, [Function.prototype.call, Function.prototype.call]),
  bind: () => Array.prototype.forEach.bind(functions, Function.prototype.call, Function.prototype.call)()
};

console.log('\nsimple');
run.simple();

console.log('\ncall');
run.call();

console.log('\napply');
run.simple();

console.log('\nbind');
run.simple();

module.exports = run;