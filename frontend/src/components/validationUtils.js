

/**
 * Password should have 8 characters:
 * 1 special character,
 * 1 uppercase letter,
 * 1 lowercase letter
 * 1 Number
 */
export function validatePassword(password) {
    let bools = [];

    if(password.length >= 8){
        bools.push(true)
    }else{
        bools.push(false);
    }

    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?`~]/;
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[\d]/;

    bools.push(specialCharRegex.test(password));
    bools.push(lowercaseRegex.test(password));
    bools.push(uppercaseRegex.test(password));
    bools.push(numberRegex.test(password));

    return bools;
}

/**
 * 
 * @param {*} email : email provided from the user
 * we accept the following email provider: gmail.com, web.de, gmx.de
 */
export function validateEmail(email){
    const emailRegex = /^[a-z.]+@(?:gmail.com|web.de|gmx.de)/;
    return emailRegex.test(email);
}