let formValidate = () => {
  let name = document.querySelector("#name").value.trim(); // trim removes white spaces
  let Email = document.querySelector("#email").value;
  let pass = document.querySelector("#password").value;
  let cpass = document.querySelector("#confirmpwd").value;

  let errname = document.querySelector("#errname");
  let erremail = document.querySelector("#erremail");
  let errpass = document.querySelector("#errpass");
  let errcpass = document.querySelector("#errcpass");

  // Clear previous errors
  errname.innerHTML = "";
  erremail.innerHTML = "";
  errpass.innerHTML = "";
  errcpass.innerHTML = "";

  if (name == "") {
    errname.innerHTML = "** Please enter your name";
    errname.style.color = "red";
    return false;
  }

  if (Email == "") {
    erremail.innerHTML = "** Please enter your email";
    erremail.style.color = "red";
    return false;
  }

  if (pass == "") {
    errpass.innerHTML = "** Please enter your password";
    errpass.style.color = "red";
    return false;
  }

  if (cpass == "") {
    errcpass.innerHTML = "** Please confirm your password";
    errcpass.style.color = "red";
    return false;
  }

  if (pass !== cpass) {
    errcpass.innerHTML = "** Passwords do not match";
    errcpass.style.color = "red";
    return false;
  }

  if (!(Email.includes("@") && Email.includes(".com"))) {
    erremail.innerHTML = "Please enter valid email";
    erremail.style.color = "red";
    return false;
  }

  if (
    !(
      pass.match(/[1234567890]/) &&
      pass.match(/[!@#$%^&*]/) &&
      pass.match(/[a-z]/) &&
      pass.match(/[A-Z]/)
    )
  ) {
    errpass.innerHTML = "Please enter strong password";
    errpass.style.color = "red";
    return false;
  }

  // If all validations pass
  return true;
};
