export function ValidEmail(email) {
  const regexExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

  return regexExp.test(email);
}

export function ValidEmpty(str) {
  if (str === "") return false;
  return true;
}

export function ValidMobileNumber(num) {
  const regexExp =
    /(\+?\d{2}?\s?\d{3}\s?\d{3}\s?\d{4})|([0]\d{3}\s?\d{3}\s?\d{4})/g;

  return regexExp.test(num);
}

export function ValidNumbersOnly(num) {
  return /^\d+$/.test(num);
}

export function ValidName(str) {
  return /^[A-Za-z\s]*$/.test(str);
}

export function ValidNoEmojis(str) {
  let pass = true;
  const regexExp = /\P{Extended_Pictographic}/u;

  [...str].forEach((c) => {
    if (!regexExp.test(c)) pass = false;
    return;
  });

  return pass;
}
