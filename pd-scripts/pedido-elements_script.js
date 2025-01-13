function confirmarPedido() {
    // Coleta as informações dos selects
    const sabor = document.getElementById("sabor");
    const saborDoce = document.getElementById("sabor-doce");
    const tamanho = document.getElementById("tamanho");

    // Obtém os valores selecionados e os preços
    const saborSelecionado = sabor.options[sabor.selectedIndex];
    const saborDoceSelecionado = saborDoce.options[saborDoce.selectedIndex];
    const tamanhoSelecionado = tamanho.options[tamanho.selectedIndex];
    const tamanhoMultiplicador = tamanhoSelecionado.getAttribute("data-multiplier");

    const precoSabor = parseFloat(saborSelecionado.getAttribute("data-preco")) || 0;
    const precoSaborDoce = parseFloat(saborDoceSelecionado.getAttribute("data-preco")) || 0;

    // Calcula o preço base
    let precoBase = (precoSabor + precoSaborDoce) * tamanhoMultiplicador;

    // Coleta os adicionais e seus preços
    const adicionais = document.querySelectorAll('input[type="checkbox"]:checked');
    let precoAdicionais = 0;
    adicionais.forEach(adicional => {
        precoAdicionais += parseFloat(adicional.getAttribute("data-preco"));
    });

    // Calcula o preço total
    const precoTotal = precoBase + precoAdicionais;

    // Cria a descrição do pedido
    let descricaoPedido = "Seu pedido foi confirmado com:\n";
    descricaoPedido += (saborSelecionado.value === "nenhuma" ? "" : `Pizza salgada: ${saborSelecionado.text} (${precoSabor.toFixed(2)} BRL)\n`);
    descricaoPedido += (saborDoceSelecionado.value === "nenhuma" ? "" : `Pizza doce: ${saborDoceSelecionado.text} (${precoSaborDoce.toFixed(2)} BRL)\n`);
    descricaoPedido += `Tamanho: ${tamanhoSelecionado.text} (${(precoSabor + precoSaborDoce).toFixed(2)} BRL)\n`;
    descricaoPedido += "Adicionais:\n";
    adicionais.forEach(adicional => {
        descricaoPedido += `- ${adicional.value} (${adicional.getAttribute("data-preco")} BRL)\n`;
    });
    descricaoPedido += `Total: R$ ${precoTotal.toFixed(2)}`;

    // Exibe o resultado
    document.getElementById("resultado").innerText = descricaoPedido;
}