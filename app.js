/* Fill your code*/
// formValidate()

function formValidate() {

    let name = document.forms["RegForm"]["Name"]
    let address = document.forms["RegForm"]["Address"]
    let email = document.forms["RegForm"]["EMail"]
    let password = document.forms["RegForm"]["Password"]
    let cpassword = document.forms["RegForm"]["cPassword"]
    let phone = document.forms["RegForm"]["phone"]

    var errname = document.querySelector("#name")
    var erraddress = document.querySelector("#address")
    var erremail = document.querySelector("#email")
    var errpassword = document.querySelector("#pwd")
    var errcpassword = document.querySelector("#cpwd")
    var errphone = document.querySelector("#phone")


    if (!name.value.length) {
        errname.innerText = "Kindly fill Name field";
        name.focus()
        return false;
    } else if (name.value.length < 8 || name.value.length > 15) {
        errname.innerText = "Atleast 8 to 15 Characters Required";
        name.focus()
        return false;
    } else {
        errname.innerText = "";
    }

    if (!address.value.length) {
        erraddress.innerText = "Kindly fill Address field";
        address.focus()
        return false;
    } else {
        erraddress.innerText = "";
    }


    if (!email.value.length) {
        erremail.innerText = "Kindly fill Email field";
        email.focus()
        return false;
    } else if (!email.value.includes("@") && !email.value.includes(".")) {
        erremail.innerText = "Enter a valid Email";
        email.focus()
        return false;
    } else {
        erremail.innerText = "";
    }


    if (!password.value.length) {
        errpassword.innerText = "Kindly fill Password field";
        password.focus()
        return false;
    } else if (!RegExp('[A-Z]+').test(password.value) ||
        !RegExp('[a-z]+').test(password.value) ||
        !RegExp('[0-9]+').test(password.value) ||
        !RegExp('[!@#$%\^&\*()]+').test(password.value)
    ) {
        errpassword.innerText = "password must contain 1 uppercase letter, 1 lowercase letter, atleast 1 number and special character";
        password.focus()
        return false;
    } else {
        errpassword.innerText = ""
    }


    if (!cpassword.value.length) {
        errcpassword.innerText = "Kindly fill Password field";
        cpassword.focus()
        return false;
    } else if (password.value != cpassword.value) {
        errcpassword.innerText = "Password and Confirm Password must be same";
        cpassword.focus()
        return false;
    } else(
        errcpassword.innerText = ""
    )

    if (!phone.value.length) {
        errphone.innerText = "Kindly fill Phone number field";
        errphone.focus()
        return false;
    } else if (phone.value.length != 10 || RegExp('[^0-9]').test(phone.value)) {
        errphone.innerText = "Phone number must contain 10 digits";
        errphone.focus()
    } else {
        errphone.innerText = ""
    }
    return false;
}