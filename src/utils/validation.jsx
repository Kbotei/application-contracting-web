// Exercise in validation.
export const validator = {
  validPhoneNumber: (value) => {
    console.log(`Value: ${value}`);
    if (value == null) {
      return false;
    }

    let digitsOnly = value.replace(/\D/g, "");
    return /^[2-9]\d{2}[2-9]\d{2}\d{4}$/.test(digitsOnly);
  },
};
