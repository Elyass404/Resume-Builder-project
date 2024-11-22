let validationRules = {
  name: {
    regex: /^[a-zA-Z\s]{2,30}$/,
    message: "This field must contain 2-30 characters long and contain only letters",
  },
  roleTitle: {
    regex: /^[a-zA-Z0-9\s,.'-]{2,30}$/,
    message: "Role title must be 2-30 characters long",
  },
  email: {
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Please enter a valid email address",
  },
  phone: {
    regex: /^\d{10}$/,
    message: "Phone number must be exactly 10 digits",
  },
  profileSummary: {
    regex: /^[a-zA-Z0-9\s,.'-]{80,700}$/,
    message: "Profile summary should contain (80-700 characters)",
  },
  text: {
    regex: /^[a-zA-Z0-9\s,.'-]{2,500}$/,
    message: "This fiels must contain (2-500 characters)",
  },
  longText: {
    regex: /^[a-zA-Z0-9\s,.'-]{20,500}$/,
    message: "This fiels must contain (20-500 characters)",
  },
  address: {
    regex: /^[a-zA-Z0-9\s,.'-]{5,100}$/,
    message: "Please enter a valid address (5-100 characters)",
  },
  age: {
    regex: /^(1[89]|[2-9]\d|100)$/,
    message: "Age must be between 18 and 100",
  },
  gender: {
    regex: /^(male|female|other)$/i,
    message: "Please select a valid gender option",
  },
};

function toggleError(item, show, message = "") {
  let workExperience = document.getElementById("")
  let errorDisplay = document.getElementById(`${item}Error`);
  let inputField = document.getElementById(item);

  if (show) {
    errorDisplay.textContent = message;
    errorDisplay.classList.remove("hidden");
    inputField.classList.add("ring-red-600");
    inputField.classList.remove("ring-green-600");
  } else {
    errorDisplay.classList.add("hidden");
    inputField.classList.remove("ring-red-600");
    inputField.classList.add("ring-green-600");
  }
}

function validateField(regexrule, value, item) {
  let rule = validationRules[regexrule];
  if (rule && !rule.regex.test(value)) {
    toggleError(item, true, rule.message);
    return false;
  } else {
    toggleError(item, false);
    console.log("true");
    return true;
  }
}

function validateForm(form) {
  let valid = true;
  for (let field in validationRules) {
    const fieldValue = document.getElementById(field).value;
    const isFieldValid = validateField(field, fieldValue);
    if (!isFieldValid) valid = false;
  }
  return valid;
}

export default { validateField, toggleError, validateForm };
