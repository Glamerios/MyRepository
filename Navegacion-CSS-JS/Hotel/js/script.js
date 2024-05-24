//Validar caracteres de identificación
function validarId(){
    var id = document.getElementById("identificacion").value
    if(/^[a-zA-Z]+$/.test(id)){
        alert("La identificación solo deben ser números");
        document.getElementById("identificacion").value = "";
    }
    else if (id.length>10){
        alert("La identificación no debe de tener más de 10 dígitos");
        document.getElementById("identificacion").value = "";
    }
}

//Validar caracteres del nombre
function validarNombre(){
    var nombre = document.getElementById("nombre").value;
    if(/^[0-9]+$/.test(nombre)){
        alert("el nombre solo debe tener letras");
        document.getElementById("nombre").value = "";
        
    }
}

//Validar fecha de nacimiento y calcular edad
function calcularEdad(){
    var fecha_ok = true;
    var fecha_actual = new Date();
    var fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
    if(new Date(fecha_nacimiento) >= new Date){
        alert("La fecha de nacimiento debe ser menor a la fecha actual");
        document.getElementById("fecha_nacimiento").value = "";
        fecha_ok = false;
    }
    if (fecha_ok == true){
    var edad = fecha_actual.getFullYear() - new Date(fecha_nacimiento).getFullYear();
    if (fecha_actual.getMonth() < new Date(fecha_nacimiento).getMonth() || (fecha_actual.getMonth() === new Date(fecha_nacimiento).getMonth() && fecha_actual.getDate() < new Date(fecha_nacimiento).getDate())) {
        edad--;
    }
    document.getElementById("edad").value = edad;
    }
}

//Validar correo
function validarCorreo(){
    var correo = document.getElementById("correo").value;
    if(!/(^[^\s@]+@[^\s@]+\.[^\s@]+$)/.test(correo)){
        alert("El correo no es valido");
        document.getElementById("correo").value = "";
    } 
}

//Validar celular
function validarTel(){
    var tel= document.getElementById("telefono").value;
    if(/^[a-zA-Z]+$/.test(tel)){
        alert("Escribe solo números");
        document.getElementById("telefono").value = "";
    }
    if(tel.length > 10){
        alert("El teléfono no debe ser más de 10 dígitos")
        document.getElementById("telefono").value = "";
    }
}

//Validacion fecha de ingreso
function validarFechaIngreso(){
var fecha_ingreso = document.getElementById("fecha_ingreso").value;
var fecha_actual = new Date;
fecha_actual.setDate(fecha_actual.getDate()-1)
if(new Date(fecha_ingreso) < new Date(fecha_actual)){
    alert("La fecha de ingreso debe ser igual o mayor a la fecha actual");
    document.getElementById("fecha_ingreso").value = "";
    }
}

//Validacion fecha de salida y cantidad de noches
function validarFechaSalida(){
    var fecha_salida_ok = true;
    var fecha_salida = document.getElementById("fecha_salida").value;
    var fecha_ingreso = document.getElementById("fecha_ingreso").value;
    if(new Date(fecha_salida) < new Date(fecha_ingreso)){
        alert("La fecha de salida debe ser mayor a la fecha de ingreso");
        document.getElementById("fecha_salida").value = "";
        fecha_salida_ok = false;
    }
    if (fecha_salida_ok == true){
    var distancianoche = new Date(fecha_salida).getTime() - new Date(fecha_ingreso).getTime();
    var noches = Math.ceil(distancianoche / (1000 * 3600 * 24));
    document.getElementById("noches").value = noches;
    calcularSubtotal()
    }
}

//Funcion para imagen y precios de las habitaciones
function mostrarImagen() {
    var contenedorImagen = document.getElementById("contenedor_imagen");
    var imagen = document.getElementById("imagen_habitacion");
    var tipoHabitacion = document.getElementById("tipo_habitacion").value;
    var valorHabitacionInput = document.getElementById("valor_habitacion");
    var valorHabitacion = 0;
    switch (tipoHabitacion) {
        case "deluxe":
            imagen.src = "Images/habitacion_deluxe.jpg";
            valorHabitacion = 150;
            break;
        case "suite":
            imagen.src = "Images/suite_familiar.jpg";
            valorHabitacion = 200;
            break;
        case "estandar":
            imagen.src = "Images/habitacion_estandar.jpg";
            valorHabitacion = 100;
            break;
        default:
            imagen.src = ""; 
            break;
    }
    // Mostramos el contenedor de la imagen solo si se selecciona una habitación válida
    contenedorImagen.style.display = tipoHabitacion ? "block" : "none";
    valorHabitacionInput.value = valorHabitacion;
    calcularSubtotal()
}
// Ejecutamos la función para mostrar la imagen al cargar la página (si se ha seleccionado una habitación inicialmente)
mostrarImagen();

//Valor servicio adicional 1
function valorServicioAdicional1(){
    var sa = document.getElementById("servicio_adicional_1").value;
    var valorsa1input = document.getElementById("valor_servicio_adicional_1");
    var valorsa1 = 0;
    switch(sa){
        case "desayuno":
            valorsa1 = 10;
            break;
        case "masaje":
            valorsa1 = 30;
            break;
        default:
            valorsa1 = 0;
            break;
        
    }
    valorsa1input.value = valorsa1;
    calcularSubtotal();
}

//Valor servicio adicional 2
function valorServicioAdicional2(){
    var sa = document.getElementById("servicio_adicional_2").value;
    var valorsa2input = document.getElementById("valor_servicio_adicional_2");
    var valorsa2 = 0;
    switch(sa){
        case "desayuno":
            valorsa2 = 10;
            break;
        case "masaje":
            valorsa2 = 30;
            break;
        default:
            valorsa1 = 0;
            break;
        
    }
    valorsa2input.value = valorsa2;
    calcularSubtotal();
    

}

//Calcular subtotal
function calcularSubtotal(){
    var valor_habitacion = parseFloat(document.getElementById("valor_habitacion").value);
    var noches = parseInt(document.getElementById("noches").value);
    var valor_sa1 = parseFloat(document.getElementById("valor_servicio_adicional_1").value);
    var valor_sa2 = parseFloat(document.getElementById("valor_servicio_adicional_2").value);

    var subtotal = (valor_habitacion * noches) + valor_sa1 + valor_sa2;
    document.getElementById("subtotal").value = subtotal.toFixed(2);
    console.log(subtotal);

}
//Evitar que se reinicien los datos al dar click
document.getElementById('boton').addEventListener('click',(e) => {
    e.preventDefault();

//Calcular IVA y total
    var subtotal = parseFloat(document.getElementById("subtotal").value);
    var iva = subtotal * 0.19;
    var total = subtotal + iva;
    document.getElementById("total").value = total.toFixed(2);
    document.getElementById("iva").value = iva.toFixed(2);
});

$(document).ready(function(){

    function insertarFila(nombre, edad){}

    var bodytabla = $("#mitabla tbody");
    
    // Crear una nueva fila y agregar celdas para el nombre y la edad
    var fila = $('<tr><td>' + nombre + '</td><td>' + edad + '</td></tr>');
    bodytabla.append(fila);
    

    $("#formulario").submit(function(event) {
           // Prevenir el comportamiento por defecto del formulario (no recargar la página)
            event.preventDefault();
    
            // Obtener los valores ingresados por el usuario
            var nombre = $("#nombre").val();
            var edad = $("#edad").val();
    
            // Agregar el registro a la tabla
            insertarFila(nombre, edad);
    
            // Limpiar los campos del formulario
            $("#nombre").val("");
            $("#edad").val("");
    });
     
  
});
