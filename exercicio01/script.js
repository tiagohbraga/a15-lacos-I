let coxinha = prompt(`Deseja comer mais coxinha?
S para Sim
N para Não`)

let conta = Number(0)

while (coxinha !== 'N'){    
    conta = conta+2.50    
    coxinha = prompt(`Deseja comer mais coxinha?
    S para Sim
    N para Não`)    
}console.log(`O valor da sua conta é ${conta}`)