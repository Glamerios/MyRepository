$(document).ready(function() {
    $('#insertar').click(function() {
        // Obtener valores
        const tipoestudiante = $('#tipoestudiante').val();
        const asignatura = $('#asignatura').val();
        const identificacion = $('#identificacion').val();
        const nota1 = parseFloat($('#nota1').val());
        const nota2 = parseFloat($('#nota2').val());
        const nota3 = parseFloat($('#nota3').val());

        //Validaciones formulario
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
        }

        // Calcular definitiva
        const definitiva = ((nota1 + nota2 + nota3) / 3).toFixed(2);

        //Crear fila
        //console.log(tipoestudiante, asignatura, identificacion, nota1, nota2, nota3, definitiva);
        //console.log("Tbody de la tabla:", $('#tabla tbody'));
        const newRow = `<tr>
            <td>${$('#tabla tbody tr').length + 1}</td>
            <td>${tipoestudiante}</td>
            <td>${identificacion}</td>
            <td>${asignatura}</td>
            <td>${definitiva}</td>
        </tr>`;

        //Agregar fila
        $('#tabla tbody').append(newRow);

        //Limpiar formulario
        $('#formulario')[0].reset();
        $('#tipoEstudiante').val("");
        $('#asignatura').val("");
    });
});