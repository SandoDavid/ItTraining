let arrRespostes = [], arrRespostesCorrectes = [];
arrRespostesCorrectes=[1,3,4,2];


function pregunta1(objecte, pregNum){
    
    let obj;
    console.log("pos = 0 " + objecte.form[0].checked);
    console.log("pos = 1 " + objecte.form[1].checked);
    console.log("pos = 2 " + objecte.form[2].checked);
    console.log("pos = 3 " + objecte.form[3].checked);
    let resposta;
    for (let i=0; i<4; i++ ){
        if (objecte.form[i].checked) {
            resposta = i +1;
        }
    }
arrRespostes[pregNum] = resposta;

alert("Has escollit resposta" + arrRespostes[pregNum]);
debugger;
switch(pregNum) {
    case 0:
        
        obj = document.getElementById("pregunta1");

        obj.classList.remove("elementVisible");
        obj.classList.add("elementOcult");

        
        obj = document.getElementById("pregunta2");
        obj.classList.add("elementOcult");
        
        
        obj.classList.remove("elementVisible");

}






}
