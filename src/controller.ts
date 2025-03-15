// 1- Faça uma função para retornar os professores

export function encontrarProfessores(vetor:any[]):any[]{
    let professores:any[] = vetor.filter((item) => item.isProfessor == true)

    return professores
}

// 2- Faça uma função que retone a quantidade de pessoas que tem um DDD específico

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

// 3- Faça uma função para retornar a idade da pessoa mais nova que mor na cidade com o CEP 79780-000

export function menorIdade(vetor:any[]):any{
    let idade:number = 200
    let pessoa = vetor.filter((item) =>{
        if(item.idade < idade && item.endereco.cep == "79780-000"){
            return item
        }
    })

    return pessoa[0].idade
}

// 4- Faça uma função para retornar o nome e a idade da pessoa mais velha que mora na cidade com o CEP 17490-000

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

// 5- Faça uma função para retornar a média da idade de todas as pessoas

export function mediaIdades(vetor:any[]):number{
    return (vetor.reduce((soma, item) =>{
        return soma += item.idade
    }, 0)) / vetor.length
}

// 6- Faça uma função para retornar as pessoas que tem um domínio de e-mail específico (ex: @gmail.com)

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

// 7- Faça uma função que retorna o primeiro nome de todos os professores

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
