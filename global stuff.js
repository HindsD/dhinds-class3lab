let globalVariable = 0;

function testIt()
{
    let localVariable = 0;

    localVariable++;

    globalVariable++;
}

function show(){
    alert(globalVariable);
}
