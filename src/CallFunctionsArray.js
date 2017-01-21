const functions = [ () => console.log('fn1'), () => console.log('fn2'),  () => console.log('fn3') ];

const run = {
  simple: () => functions.forEach(Function.call, Function.call),
  call: () => Array.prototype.forEach.call(functions, Function.call, Function.call),
  apply: () => Array.prototype.forEach.apply(functions, [Function.call, Function.call]),
  bind: () => functions.forEach(Function.call.bind(Function.call))
};

console.log('\nsimple');
run.simple();

console.log('\ncall');
run.call();

console.log('\napply');
run.apply();

console.log('\nbind');
run.bind();

module.exports = run;