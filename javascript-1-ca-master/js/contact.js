const form = document.querySelector("#contactForm")




const validateForm = (event) => {


    //first name
    const validateFirstName = () => {
        const input = document.querySelector("#firstName")
        const error = input.nextElementSibling

        const inputValue = input.value
        if (inputValue == "") {
            error.style.display = "block"
        }
    }
    validateFirstName()


    //last name
    const validateLastName = () => {
        const input = document.querySelector("#lastName")
        const error = input.nextElementSibling

        const inputValue = input.value
        if (inputValue == "") {
            error.style.display = "block"

        }

    }
    validateLastName()


    //email address
    const valiateEmail = () => {
        const input = document.querySelector("#email")
        const error = input.nextElementSibling
        const invalidError = error.nextElementSibling
        
        const inputValue = input.value;
        const emailPattern = /\S+@\S+\.\S+/.test(inputValue);


        if (inputValue === "") {
            error.style.display = "block"
        } else {
            error.style.display = "none"
        }
        if (!emailPattern) {
            invalidError.style.display = "block"
        }

    }
    valiateEmail()


    //message 
    const validateMessage = () => {
        const input = document.querySelector("#message")
        const error = input.nextElementSibling
        const inputValue = input.value

        if (inputValue.length < 10) {
            error.style.display = "block"
        } else {
            error.style.display = "none"
        }
    }

    validateMessage()
}

//submit
form.addEventListener("submit", (event) => {
    event.preventDefault()
    validateForm()
});