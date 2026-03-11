let display = document.querySelector('input[name="display"]');
let buttons = document.querySelectorAll('input[type="button"]');

buttons.forEach(button => {
    button.addEventListener("click", function () {
        let value = this.value;

        if (value === "Ac") {
            display.value = "";
        } 
        else if (value === "CE") {
            display.value = display.value.slice(0, -1);
        } 
        else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } 
        else {
            display.value += value;
        }
    });
});