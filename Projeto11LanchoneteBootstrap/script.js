const comboElemento = document.getElementById('combos');
const adicionaisElementos = document.getElementsByName('adicionais');
const entregaElemento = document.getElementById('entregaForm');

const totalElemento = document.getElementById('total');
const descricaoElemento = document.getElementById('descricaoPedido');

const precoCombos = {
    xsaudavel: 20,
    xtudo: 50,
    xvegetariano: 30,
    xvegano: 30,
    xgostoso: 30,
};

const precoAdicionais = 2;

const precoEntrega = 10;

function getEntrega() {
    const entregaForm = new FormData(entregaElemento).entries();
    return entregaForm.next()?.value?.[1];
}

function calcularTotal() {
    const entregaSelecionada = getEntrega();
    if (!entregaSelecionada) {
        alert("Escolha o tipo de recebimento: entrega ou balcão.");
        return;
    }
    const clienteEntrega = entregaSelecionada == "viagem" ? precoEntrega : 0;

    const clienteCombo = precoCombos[comboElemento.value];

    let clienteAdicionais = 0;
    adicionaisElementos.forEach((item) => {
        if (item.checked) {
            clienteAdicionais += precoAdicionais;
        }
    })

    const clienteTotal = clienteCombo + clienteAdicionais + clienteEntrega;
    totalElemento.value = `${clienteTotal} reais`;
    descricaoElemento.innerHTML = `Seu combo custará ${clienteCombo} reais com ${clienteAdicionais} reais de adicionais e ${clienteEntrega} de taxa de entrega.`;
}