type Usuario2 = {
    nome: string,
    idade: number,
    status: boolean
}

const usuarios2: Usuario2[] = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
];

const filtarNomes = (usuarios: Usuario2[], nomeUsuario: string): Usuario2[] => {
    const usuariosEncontrados: Usuario2[] = usuarios.filter((usuario: Usuario2) => usuario.nome.toLowerCase().includes(nomeUsuario));

    return usuariosEncontrados;
}

console.log(filtarNomes(usuarios2, "jo"));
