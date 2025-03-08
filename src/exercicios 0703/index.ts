// EXERCICIO 1 -------------------
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
}

const meuCarro: Carro = {
    marca: "Chevrolet",
    modelo: "Astra",
    ano: 2011
};
console.log("Meu Carro:", meuCarro);





// EXERCICIO 2 -------------------
interface Multiplicacao {
    (a: number, b: number): number;
}

const multiplicar: Multiplicacao = (x, y) => x * y;
console.log(multiplicar(10, 4));
console.log(multiplicar(5, 4));
console.log(multiplicar(1, 1));





// EXERCICIO 3 -------------------
function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}
const numeros = [1, 2, 3, 4, 5];
const palavras = ["vai", "Corinthians!"];
console.log("numeros invertidos:", inverterArray(numeros));
console.log("palavras invertidas:", inverterArray(palavras));










// EXERCICIO 4 -------------------
interface Repositorio<T> {
    salvar(dado: T): void;
    obterDados(): T[];
}

class UsuarioRepositorio implements Repositorio<{ nome: string; email: string }> {
    private usuarios: { nome: string; email: string }[] = [];
    salvar(dado: { nome: string; email: string }): void {
        this.usuarios.push(dado);
    }
    obterDados(): { nome: string; email: string }[] {
        return this.usuarios;
    }
}

const repo = new UsuarioRepositorio();
repo.salvar({ nome: "Enzo", email: "enzoo.lu@gmail.com" });
console.log("Lista de usuários:", repo.obterDados());




// EXERCICIO 5 -------------------
type RespostaServidor = string | boolean;
function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Resposta do servidor: ${resposta}`);
    } else if (typeof resposta === "boolean") {
        console.log(`Operação foi bem-sucedida? ${resposta ? "Sim" : "Não"}`);
    }
}

processarResposta("Dados processados com sucesso!");
processarResposta(true);
processarResposta(false);










// EXERCICIO 6 -------------------
type Estudante = {
    nome: string;
    curso: string;
};
type Trabalhador = {
    empresa: string;
    cargo: string;
};
type EstudanteTrabalhador = Estudante & Trabalhador;
const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "enzo",
    curso: "Engenharia de Software",
    empresa: "google",
    cargo: "CEO"
};
console.log("Estudante Trabalhador:", estudanteTrabalhador);