$(document).ready(function() {
    //Función que genera número random entero
    function random(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }
    //Función que genera número random decimal
    function randomdeci(min, max) {
        return parseFloat(((Math.random() * (max - min)) + min).toFixed(2));
    }

    //Función que genera identificación aleatoria
    function generarid() {
        let identification = '';
        for (let i = 0; i < 10; i++) {
            identification += random(1,9);
        }
        return identification;
    }
    

    $('#insertar').click(function() {
        //Obtener valores
        const tipoestudiante = $('#tipoestudiante').val();
        const asignatura = $('#asignatura').val();
        //const identificacion = $('#identificacion').val();
        //const nota1 = parseFloat($('#nota1').val());
        //const nota2 = parseFloat($('#nota2').val());
        //const nota3 = parseFloat($('#nota3').val());

        const identificacion = generarid();
        const nota1 = parseFloat(randomdeci(0, 5));
        const nota2 = parseFloat(randomdeci(0, 5));
        const nota3 = parseFloat(randomdeci(0, 5));
        

        /*//Validaciones formulario
        if (tipoestudiante === null){
            alert("Selecciona estudiante")
            return;
        }
        if (asignatura === null){
            alert("Selecciona una asignatura")
            return;
        }
        if(identificacion === ""){
            alert("Ingresa una identificación")
            return;
        }
        else if(/^[a-zA-Z]+$/.test(identificacion)){
            alert("La identificación solo deben ser números");
            return;
        }
        else if (identificacion.length>10){
            alert("La identificación no debe de tener más de 10 dígitos");
            return;
        }
        if(nota1 === "" || isNaN(parseFloat(nota1))){
            alert("Debe ingresar la nota 1")
            return;
        }
        else if(nota1 < 0 || nota1 > 5.0){
            alert("Las notas deben ser entre 0.0 y 5.0")
            return;
        }
        if(nota2 === "" || isNaN(parseFloat(nota2))){
            alert("Debe ingresar la nota 2")
            return;
        }
        else if(nota2 < 0 || nota2 > 5.0){
            alert("Las notas deben ser entre 0.0 y 5.0")
            return;
        }
        if(nota3 === "" || isNaN(parseFloat(nota3))){
            alert("Debe ingresar la nota 3")
            return;
        }
        else if(nota3 < 0 || nota3 > 5.0){
            alert("Las notas deben ser entre 0.0 y 5.0")
            return;
        }*/

        // Calcular definitiva
        const definitiva = parseFloat((nota1 + nota2 + nota3) / 3);

        //Crear fila
        console.log(nota1, nota2, nota3, definitiva);
        //console.log("Tbody de la tabla:", $('#tabla tbody'));
        const newRow = `<tr>
            <td>${$('#tabla tbody tr').length + 1}</td>
            <td>${"Estudiante"} ${random(1, 9)}</td>
            <td>${identificacion}</td>
            <td>${nota1.toFixed(2)}</td>
            <td>${nota2.toFixed(2)}</td>
            <td>${nota3.toFixed(2)}</td>
            <td>${definitiva.toFixed(2)}</td>
        </tr>`;

        //Agregar fila
        $('#tabla tbody').append(newRow);

        if (definitiva > 3.5) {
            $('#tabla tbody tr:last-child').addClass('table-success');
        } else if (definitiva < 3.0) {
            $('#tabla tbody tr:last-child').addClass('table-danger');
        }

        //Limpiar formulario
        $('#formulario')[0].reset();
        $('#tipoEstudiante').val("");
        $('#asignatura').val("");
    });
});