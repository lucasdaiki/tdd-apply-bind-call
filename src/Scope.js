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
  }
}