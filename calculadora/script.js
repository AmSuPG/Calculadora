function add_to_display(value){
    document.getElementById("display").value+=value;
}
function clear_all(){
    document.getElementById("display").value="";
}
function clear_entry(){
    let current_display = document.getElementById("display").value;
    document.getElementById("display").value = current_display.slice(0,-1);
}
function radians(n){
    return n * (Math.PI / 180);
}
function result(){
    let display_value = document.getElementById("display").value;
    display_value = display_value.replace(/sin\(([^)]+)\)/g, "Math.sin(radians($1))");
    display_value = display_value.replace(/cos\(([^)]+)\)/g, "Math.cos(radians($1))");
    display_value = display_value.replace(/tan\(([^)]+)\)/g, "Math.tan(radians($1))");
    display_value = display_value.replace(/log\(/g, "Math.log10(");
    display_value = display_value.replace(/√\(/g, "Math.sqrt(");
    display_value = display_value.replace(/π/g, "Math.PI");
    display_value = display_value.replace(/e/g, "Math.E"); //expresiones regulares
    display_value = display_value.replace(/(\d+)%/g, "($1/100)");
    display_value = display_value.replace(/(\d+)!/g, "factorial($1)");
    try {
        let result = eval(display_value);
        document.getElementById("display").value = result;
    }catch(e){
        document.getElementById("display").value = "Math Error";
    }
    if(!display_value){
        document.getElementById("display").value = "0";
    }
}
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    if (n < 0) return NaN;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }