
function set(a, b) {
    let q = a;
  
    setTimeout(function go() {
      console.log(q);
      if (q < b) {
        setTimeout(go, 1000);
      }
      q++;
    }, 1000);
  }
  

set(3,6);