//nu bliver koden ved at med at køre efter svar, stiller spg igen
while(true){
    var answerOne=prompt('Kommer du til klassefesten?');
    switch(answerOne.toLowerCase()){
        case'ja':
            alert('Fedt vi ses');
            break;
        case'nej':
            alert('Ok, måske en anden gang?');
            break;
        case'måske':
            alert('Håber du kommer');
            break;
        default:alert('Tag nu stilling!');

    }
}
//stopper efter svar
var goodanswer = false;

while(goodanswer==false){
    var answerOne=prompt('Kommer du til klassefesten?');
    switch(answerOne.toLowerCase()){
        case'ja':
            alert('Fedt vi ses');
            goodanswer=true;
            break;
        case'nej':
            alert('Ok, måske en anden gang?');
            goodanswer=true;
            break;
        case'måske':
            alert('Håber du kommer');
            break;
        default:alert('Tag nu stilling!');

    }
}

