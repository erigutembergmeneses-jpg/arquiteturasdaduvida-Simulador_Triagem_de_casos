document.addEventListener('DOMContentLoaded', () => {
    const btnAnalisar = document.getElementById('btn-analisar');
    const painelResultado = document.getElementById('resultado-painel');
    const valorConservador = document.getElementById('result-conservador').querySelector('.resultado-valor');
    const valorFalha = document.getElementById('result-falha').querySelector('.resultado-valor');
    const textoInterpretacao = document.getElementById('texto-interpretacao');

    // --- Lógica de Simulação ---
    // Total de casos: 20
    const TOTAL_CASOS = 20;

    // Função que gera os dados da simulação
    function gerarSimulacao() {
        // 1. Gerar número de casos com erro cognitivo silencioso (entre 12 e 18 dos 20)
        //    Para dar realismo, vamos fazer variar.
        const casosComErro = Math.floor(Math.random() * (18 - 12 + 1)) + 12; // Entre 12 e 18

        // 2. Triagem Conservadora: detecta a maioria, mas não todos.
        //    Ela elimina entre 70% e 90% dos casos com erro.
        const taxaEfetividadeConservadora = 0.75 + (Math.random() * 0.15); // 75% a 90%
        const eliminadosConservador = Math.floor(casosComErro * taxaEfetividadeConservadora);

        // Garantir que não ultrapasse o total de casos com erro
        const errosEliminados = Math.min(eliminadosConservador, casosComErro);

        // 3. Falha da "Prova Nova Robusta": os casos que passaram pela triagem conservadora
        //    mas ainda têm erro latente (ou seja, os que não foram eliminados).
        //    A "prova nova" falha em detectar esses porque se concentra apenas no material novo.
        const errosNaoDetectados = casosComErro - errosEliminados;

        // 4. Calcular casos limpos (sem erro) para contexto
        const casosLimpos = TOTAL_CASOS - casosComErro;

        return {
            totalCasos: TOTAL_CASOS,
            casosComErro,
            errosEliminados,
            errosNaoDetectados,
            casosLimpos
        };
    }

    // Função que atualiza a interface com os resultados
    function atualizarResultado(dados) {
        // Exibir o painel
        painelResultado.style.display = 'block';

        // Atualizar números
        valorConservador.textContent = dados.errosEliminados;
        valorFalha.textContent = dados.errosNaoDetectados;

        // Criar texto interpretativo contextual
        const interpretacao = `
            <p>🔎 Dos <strong>${dados.totalCasos} casos</strong> analisados, <strong>${dados.casosComErro}</strong> apresentavam algum tipo de erro cognitivo silencioso na fase inicial de coleta de provas.</p>
            <p>✅ A <strong>triagem conservadora</strong> (revisão criteriosa de todo o processo inicial) conseguiu eliminar <strong>${dados.errosEliminados} casos</strong> com erro, evitando que provas contaminadas prosseguissem.</p>
            <p>⚠️ No entanto, <strong>${dados.errosNaoDetectados} casos</strong> com erro passaram despercebidos. Uma abordagem focada apenas em "prova nova robusta" tenderia a ignorar a contaminação original desses casos, aceitando como válidas provas que derivam de um erro inicial silencioso.</p>
            <p>${dados.errosNaoDetectados === 0 ? '🌟 Hoje a triagem foi perfeita! Isso raramente ocorre na prática.' : '📌 Isso demonstra o perigo dos erros silenciosos: mesmo uma triagem cuidadosa pode deixar resquícios, e a "prova nova" é cega a eles.'}</p>
        `;

        textoInterpretacao.innerHTML = interpretacao;

        // Rolagem suave até o resultado (opcional)
        painelResultado.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Evento do botão
    btnAnalisar.addEventListener('click', () => {
        const dadosSimulacao = gerarSimulacao();
        atualizarResultado(dadosSimulacao);
    });
});
