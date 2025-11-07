function fn_ValForm() {
  var sMsg = "";

  var nameField = document.getElementById("name");
  var emailField = document.getElementById("email");
  var messageField = document.getElementById("message");

  var emailPattern = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]\.[a-z0-9]{2,4}$/;

  if (nameField.value === "") {
    sMsg += "\n* Anda belum mengisikan nama";
  }

  if (emailField.value === "") {
    sMsg += "\n* Anda belum mengisikan email";
  } else if (!emailPattern.test(emailField.value.toLowerCase())) {
    sMsg += "\n* Format email tidak valid";
  }

  if (messageField.value === "") {
    sMsg += "\n* Anda belum mengisikan pesan";
  }

  if (sMsg !== "") {
    alert("Peringatan:\n" + sMsg);
    return false;
  }

  return true;
}
