import { buscaDDD, encontrarProfessores, maiorIdade, mediaIdades, menorIdade, primeiroNomeProfessores } from "./controller";

let pessoas = [
    {
        "nome": "Ana Souza",
        "idade": 28,
        "email": "ana.souza@gmail.com",
        "isProfessor": false,
        "telefone": [
            { "ddd": "11", "numero": "98765-4321" },
            { "ddd": "11", "numero": "91234-5678" }
        ],
        "endereco": {
            "cep": "79780-000",
            "logradouro": "Rua das Flores",
            "numero": "120",
            "complemento": "Apto 45"
        }
    },
    {
        "nome": "Carlos Lima",
        "idade": 35,
        "email": "carlos.lima@gmail.com",
        "isProfessor": true,
        "telefone": [
            { "ddd": "67", "numero": "99876-5432" }
        ],
        "endereco": {
            "cep": "79780-000",
            "logradouro": "Avenida Atlântica",
            "numero": "890",
            "complemento": ""
        }
    },
    {
        "nome": "Fernanda Alves",
        "idade": 41,
        "email": "fernanda.alves@ifsp.edu.br.com",
        "isProfessor": true,
        "telefone": [
            { "ddd": "67", "numero": "98712-3456" }
        ],
        "endereco": {
            "cep": "79780-000",
            "logradouro": "Rua dos Timbiras",
            "numero": "450",
            "complemento": "Casa 2"
        }
    },
    {
        "nome": "Ricardo Pereira",
        "idade": 29,
        "email": "ricardo.pereira@outlook.com",
        "isProfessor": true,
        "telefone": [
            { "ddd": "18", "numero": "99999-1111" },
            { "ddd": "67", "numero": "98888-2222" }
        ],
        "endereco": {
            "cep": "79780-000",
            "logradouro": "Avenida Brasil",
            "numero": "999",
            "complemento": "Sala 5"
        }
    },
    {
        "nome": "Juliana Mendes",
        "idade": 32,
        "email": "juliana.mendes@yahoo.com",
        "isProfessor": false,
        "telefone": [
            { "ddd": "11", "numero": "99666-7777" }
        ],
        "endereco": {
            "cep": "79780-000",
            "logradouro": "Rua XV de Novembro",
            "numero": "678",
            "complemento": ""
        }
    },
    {
        "nome": "Marcos Vinícius",
        "idade": 45,
        "email": "marcos.vinicius@gmail.com",
        "isProfessor": true,
        "telefone": [
            { "ddd": "85", "numero": "98456-1234" }
        ],
        "endereco": {
            "cep": "79780-000",
            "logradouro": "Rua dos Andradas",
            "numero": "250",
            "complemento": "Bloco B"
        }
    },
    {
        "nome": "Beatriz Farias",
        "idade": 26,
        "email": "beatriz.farias@yahoo.com",
        "isProfessor": false,
        "telefone": [
            { "ddd": "85", "numero": "99234-5678" }
        ],
        "endereco": {
            "cep": "17490-000",
            "logradouro": "Avenida Beira Mar",
            "numero": "700",
            "complemento": "Apto 101"
        }
    },
    {
        "nome": "Roberto Martins",
        "idade": 50,
        "email": "roberto.martins@outlook.com",
        "isProfessor": false,
        "telefone": [
            { "ddd": "18", "numero": "98777-1234" }
        ],
        "endereco": {
            "cep": "79780-000",
            "logradouro": "Largo do Pelourinho",
            "numero": "345",
            "complemento": ""
        }
    },
    {
        "nome": "Isabela Rocha",
        "idade": 31,
        "email": "isabela.rocha@gmail.com",
        "isProfessor": false,
        "telefone": [
            { "ddd": "67", "numero": "99888-9999" }
        ],
        "endereco": {
            "cep": "17490-000",
            "logradouro": "Esplanada dos Ministérios",
            "numero": "1",
            "complemento": "Bloco C"
        }
    },
    {
        "nome": "Eduardo Nascimento",
        "idade": 39,
        "email": "eduardo.nascimento@yahoo.com",
        "isProfessor": true,
        "telefone": [
            { "ddd": "11", "numero": "99123-4567" }
        ],
        "endereco": {
            "cep": "17490-000",
            "logradouro": "Avenida da Praia",
            "numero": "555",
            "complemento": "Casa"
        }
    },
    {
        "nome": "Gabriela Santos",
        "idade": 27,
        "email": "gabriela.santos@gmail.com",
        "isProfessor": false,
        "telefone": [
            { "ddd": "11", "numero": "98765-4321" }
        ],
        "endereco": {
            "cep": "17490-000",
            "logradouro": "Rua Central",
            "numero": "321",
            "complemento": "Apto 10"
        }
    },
    {
        "nome": "Roberto Salvador",
        "idade": 88,
        "email": "roberto.salvador@gmail.com",
        "isProfessor": false,
        "telefone": [
            { "ddd": "18", "numero": "98865-5713" }
        ],
        "endereco": {
            "cep": "17490-000",
            "logradouro": "Rua Capixaba",
            "numero": "419",
            "complemento": "Apto 11"
        }
    },
    {
        "nome": "Hugo Motta",
        "idade": 26,
        "email": "hugo.motta@gmail.com",
        "isProfessor": false,
        "telefone": [
            { "ddd": "11", "numero": "99874-7411" }
        ],
        "endereco": {
            "cep": "17490-000",
            "logradouro": "Rua Heitor Massa",
            "numero": "1247",
            "complemento": ""
        }
    },
    {
        "nome": "Jaqueline Fagundes",
        "idade": 36,
        "email": "jaqueline.fagundes@gmail.com",
        "isProfessor": true,
        "telefone": [
            { "ddd": "18", "numero": "99974-2234" }
        ],
        "endereco": {
            "cep": "79780-000",
            "logradouro": "Avenida Guanabara",
            "numero": "7741",
            "complemento": "Apto 02"
        }
    },
];

console.log(encontrarProfessores(pessoas));
console.log(buscaDDD(pessoas, "11"));
console.log(menorIdade(pessoas));
console.log(maiorIdade(pessoas));
console.log(mediaIdades(pessoas));
console.log(primeiroNomeProfessores(pessoas));


