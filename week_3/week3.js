let numFirst = "";
let numSecond = "";
let operator_input = null;



const numFunction = (n) => {
    return () => {
        if (operator_input === null) {
            numFirst = numFirst + n;
            input_num.value = numFirst;
        }
        else {
            numSecond = numSecond + n;
            input_num.value = numSecond;
        }
    };
};

const opFunction = (op) => {
    return () => {
        switch  (op) {
            case "+":
            case "-":
            case "x":
            case "/":
                operator_input = op;
                input_op.value = operator_input;
                break;
                case "=":
                    switch (operator_input) {
                        case "+":
                            input_num.value = parseInt(numFirst) + parseInt(numSecond)
                            break;
                        case "-":
                            input_num.value = parseInt(numFirst) - parseInt(numSecond)
                            break;
                        case "x":
                            input_num.value = parseInt(numFirst) * parseInt(numSecond)
                            break;
                        case "/":
                            input_num.value = parseInt(numFirst) / parseInt(numSecond)
                            break;
                    }
                    break;
                
                case "clear":
                    numFirst = "";
                    numSecond = "";
                    operator_input = null;
                    input_num.value = "";
                    input_op.value = "";
                    break
        }
    };
}


const input_num = document.querySelector(".result");
const input_op = document.querySelector(".operator")


document.querySelector("#num0").addEventListener("click", numFunction("0"))
document.querySelector("#num1").addEventListener("click", numFunction("1"))
document.querySelector("#num2").addEventListener("click", numFunction("2"))
document.querySelector("#num3").addEventListener("click", numFunction("3"))
document.querySelector("#num4").addEventListener("click", numFunction("4"))
document.querySelector("#num5").addEventListener("click", numFunction("5"))
document.querySelector("#num6").addEventListener("click", numFunction("6"))
document.querySelector("#num7").addEventListener("click", numFunction("7"))
document.querySelector("#num8").addEventListener("click", numFunction("8"))
document.querySelector("#num9").addEventListener("click", numFunction("9"))



document.querySelector("#operator_plus").addEventListener("click", opFunction("+"))
document.querySelector("#operator_minus").addEventListener("click", opFunction("-"))
document.querySelector("#operator_multiply").addEventListener("click", opFunction("x"))
document.querySelector("#operator_clear").addEventListener("click", opFunction("clear"))
document.querySelector("#operator_result").addEventListener("click", opFunction("="))
document.querySelector("#operator_divide").addEventListener("click", opFunction("/"))