let numeroDaTotalDeNotasEmitidas: number = 0;

const gerarEtiqueta = (dadosProduto: Produto): string[] => {

    const listadeProdutosComprados: string[] = [];

    for (let i = 1; i <= dadosProduto.qtd; i++) {
        const numeroFormatado: string = (++numeroDaTotalDeNotasEmitidas).toString().padStart(5, "0");
        listadeProdutosComprados.push(`${dadosProduto.lote} - ${dadosProduto.ano} - ${numeroFormatado}`);
    }

    return listadeProdutosComprados;
}

type Produto = {
    produto: string,
    lote: number,
    ano: number,
    qtd: number
}

const produto = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}

console.log(gerarEtiqueta(produto));
