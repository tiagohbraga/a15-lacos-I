const tabuada  = Number(prompt(`Digite um numero`))
if(tabuada<=10){
    for (i=1;i<=10;i++){
        console.log(`${tabuada} x ${i} = ${i*tabuada}`)
    }
}else{alert('Recarregue a pagina e digite um numero de 1 a 10')}
