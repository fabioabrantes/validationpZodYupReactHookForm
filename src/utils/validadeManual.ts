
export function validateEmail(email: string): boolean {
  let validate = false;
  const formatEmail = /^\w+([\.-_]?\w+)*@\w+([\.-_]?\w+)*(\.\w{2,3})+$/;
  if (email.toLowerCase().match(formatEmail)) {
    validate = true;
  }
  return validate;
}

export function validatePassword(password: string): boolean {
  let validate = false;
  if(password && password.length >=3) validate = true;
  
  return validate;
}

export function validateConfirmPassword(password: string, confirmPassword: string): boolean {
  let validate = false;
  if(password !== confirmPassword) validate = true;
  
  return validate;
}

export function validateName(name: string): boolean {
  let validate = false;
  if(name.length >= 3) validate = true;
  return validate;
}
