document.body.innerHTML=`
<div class="container">
<div class="calculator">
<input type="text" placeholder="0" id="output">
<button onclick="clear()" id="c">C</button>
<button onclick="back()">del</button>
<button onclick="displayt('point')">.</button>
<button onclick="display('*')" class="operation">*</button>
<button onclick="display('7')">7</button>
<button onclick="display('8')">8</button>
<button onclick="display('9')">9</button>
<button onclick="display('/')"  class="operation">/</button>
<button onclick="display('4')">4</button>
<button onclick="display('5')">5</button>
<button onclick="display('6')">6</button>
<button onclick="display('-')"  class="operation">-</button>
<button onclick="display('1')">1</button>
<button onclick="display('2')">2</button>
<button onclick="display('3')">3</button>
<button onclick="display('+')"  class="operation">+</button>
<button onclick="display('0')">0</button>
<button onclick="display('00')">00</button>
<button onclick="calculate()" class="equal">=</button>
</div>
</div>
`

let output=document.getElementById("output");
function display(num){
    output.value += num;
}
function calculate(){
    try{
        output.value=eval(output.value);
    }catch(err)
    {
        alert("Invalid")
    }
}
function clear(){
    output.value="";
}
function back(){
    output.value=output.value.slice(0,-1);
}