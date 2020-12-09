let arrRespostes = [], arrRespostesCorrectes = [];
arrRespostesCorrectes = [1, 3, 4, 2];


function pregunta1(objecte, pregNum) {

    let resposta;
    let pregunta;
    console.log("pos = 0 " + objecte.form[0].checked);
    console.log("pos = 1 " + objecte.form[1].checked);
    console.log("pos = 2 " + objecte.form[2].checked);
    console.log("pos = 3 " + objecte.form[3].checked);
    for (let i = 0; i < 4; i++) {
        if (objecte.form[i].checked) {
            resposta = i + 1;
        }
    }
    arrRespostes[pregNum] = resposta;

    alert("Has escollit resposta" + arrRespostes[pregNum]);
   
    switch (pregNum) {
        case 0:

            pregunta = document.getElementById("pregunta1");
            pregunta.classList.remove("elementVisible");
            pregunta.classList.add("elementOcult");

            pregunta = document.getElementById("pregunta2");
            pregunta.classList.remove("elementVisible");
            pregunta.classList.add("elementVisible");
            break;

        case 1:
            alert("Hola");
            break;


    }



}
