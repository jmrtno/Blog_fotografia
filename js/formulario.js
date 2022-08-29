function enviar() {
  console.log("Hola");
  const formulario = document.getElementById("formulario");
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;
  var solo_email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const mensaje = document.getElementById("mensaje").value;
  const salida = document.getElementById("salida");
  salida.innerHTML = "";
  //formulario.submit();
  if (nombre == "") {
    salida.innerHTML = "Debes rellenar el campo Nombre";
  } else if (apellido == "") {
    salida.innerHTML = "Debes rellenar el campo Apellido";
  } else if (email == "") {
    salida.innerHTML = "Debes intruducir un Email";
  } else if (solo_email.test(email)) {
    salida.innerHTML = "";
    formulario.submit();
  } else {
    salida.innerHTML = "El email debe tener este formato: example@example.x";
  }
}