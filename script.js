let buttons = document.querySelectorAll("button");
let result = document.querySelector("#outputarea");
let display = document.querySelector("#inputarea");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let val = button.textContent;
        if(val == "AC")
        {
            display.value = "";
            result.value = "";
        }
        else if(val == "="){
            try {
                result.value = eval(display.value);
            } catch (error) {
                result.value = "Error";
            }
        }
        else{
            display.value += val;
        }
    });
    
});