export function encontrarProfessores(vetor:any[]):any[]{
    let professores:any[] = vetor.filter((item) => item.isProfessor == true)

    return professores
}

export function buscaDDD(vetor:any[], DDD:string):number{
    let telefones:any[] = []
    let qtd:number = 0

    for (const pessoa of vetor) {
        for (const telefone of pessoa.telefone) {
            if(telefone.ddd == DDD){
                telefones.push(pessoa)
                qtd++
            }
        }
    }

    return qtd
}

export function menorIdade(vetor:any[]):any{
    let idade:number = 200
    let pessoa = vetor.filter((item) =>{
        if(item.idade < idade && item.endereco.cep == "79780-000"){
            return item
        }
    })

    return pessoa[0].idade
}

export function maiorIdade(vetor:any[]):any{
    let idade:number = 0
    let pessoa = {"nome": null, "idade": null}

    vetor.forEach((item) =>{
        if(item.idade > idade && item.endereco.cep == "17490-000"){
            idade = item.idade

            pessoa.idade = item.idade
            pessoa.nome = item.nome
        }
    })

    return pessoa
}

export function mediaIdades(vetor:any[]):number{
    return (vetor.reduce((soma, item) =>{
        return soma += item.idade
    }, 0)) / vetor.length
}

export function encontrarPorDominioEmail(vetor:any[], dominio:string):any[]{
    let dominioEmailPessoa:string = ""
    let pessoasEncontradas:any[] = []

    for (const pessoa of vetor) {
        for (let i = 0; i < pessoa.email.length; i++) {
            if (pessoa.email[i] == "@"){
                for (let y = i; y < pessoa.email.length; y++) {
                    dominioEmailPessoa += pessoa.email[y]                    
                }
            }
        }
        
        if(dominio == dominioEmailPessoa) pessoasEncontradas.push(pessoa)
        dominioEmailPessoa = ""
    }

    return pessoasEncontradas
}

export function primeiroNomeProfessores(vetor:any[]):string[]{
    let i = 0
    let string = ""
    let strings:string[] = []
    let professores:any[] = vetor.filter((item) => item.isProfessor == true)

    for (const professor of professores) {
            while(professor.nome.charCodeAt(i) != 32){
                 string += professor.nome[i]
                 i++
            }
            strings.push(string)
            string = ""
            i = 0
        }
    return strings
}
