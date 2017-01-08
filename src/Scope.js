module.exports = {
  example1: function() {
    var x = 1;  
    function xablau() {
      x = 2;
    };  
    xablau();  
    return x;
  },
  example2: function() {
    var x = 1;  
    function xablau(x) {
      x = 2;
    };  
    xablau(x);  
    return x;
  },
  example3: function() {
    console.log('example3(0) =>', this);    
    
    // const e = () => {
    //   console.log('example3(1)', this);
    // }

    // function f() {
    //   console.log('example3(2)', this);
    // }

    // e();
    // f();

    return this;
  },
  example4: () => {
    // console.log('example(41) =>', this);    
    
    // const e = () => {
    //   console.log('example4(1)', this);
    // }

    // function f() {
    //   console.log('example4(2)', this);
    // } 

    // e();
    // f();
    
    // return this;
  }
}