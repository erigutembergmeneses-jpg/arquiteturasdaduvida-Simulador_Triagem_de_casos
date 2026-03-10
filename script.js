// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado - Simulador iniciado');
    
    // Elementos do DOM
    const btnAnalisar = document.getElementById('btn-analisar');
    const painelResultado = document.getElementById('resultado-painel');
    const valorConservador = document.getElementById('valor-conservador');
    const valorFalha = document.getElementById('valor-falha');
    const textoInterpretacao = document.getElementById('texto-interpretacao');
    
    // Verificar se todos os elementos foram encontrados
    console.log('Botão encontrado:', btnAnalisar);
    console.log('Painel encontrado:', painelResultado);
    console.log('Valor conservador encontrado:', valorConservador);
    console.log('Valor falha encontrado:', valorFalha);
    console.log('Texto interpretação encontrado:', textoInterpretacao);
    
    // Constantes
    const TOTAL_CASOS = 20;
    
    // Função para gerar números aleatórios entre mínimo e máximo (inclusive)
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // Função principal de simulação
    function realizarSimulacao() {
        console.log('Iniciando simulação...');
        
        // 1. Gerar número de casos com erro cognitivo (entre 10 e 18 dos 20)
        //    Isso dá variabilidade mas mantém a maioria dos casos com algum problema
        const casosComErro = randomInt(10, 18);
        
        // 2. Taxa de efetividade da triagem conservadora (entre 60% e 85%)
        //    A triagem é boa mas não perfeita
        const taxaEfetividade = 0.6 + (Math.random() * 0.25); // 60% a 85%
        
        // 3. Calcular erros eliminados pela triagem conservadora
        const errosEliminados = Math.floor(casosComErro * taxaEfetividade);
        
        // 4. Erros que passaram despercebidos (não detectados)
        const errosNaoDetectados = casosComErro - errosEliminados;
        
        // 5. Casos limpos (sem erro)
        const casosLimpos = TOTAL_CASOS - casosComErro;
        
        console.log('Resultados:', {
            casosComErro,
            errosEliminados,
            errosNaoDetectados,
            casosLimpos,
            taxaEfetividade: taxaEfetividade.toFixed(2)
        });
        
        return {
            casosComErro,
            errosEliminados,
            errosNaoDetectados,
            casosLimpos,
            taxaEfetividade
        };
    }
    
    // Função para atualizar a interface
    function atualizarInterface(dados) {
        console.log('Atualizando interface com dados:', dados);
        
        // Mostrar o painel de resultados
        painelResultado.style.display = 'block';
        
        // Atualizar os valores numéricos
        valorConservador.textContent = dados.errosEliminados;
        valorFalha.textContent = dados.errosNaoDetectados;
        
        // Criar texto interpretativo contextual
        const interpretacao = `
            <p>🔎 Dos <strong>${TOTAL_CASOS} casos</strong> analisados nesta rodada, <strong>${dados.casosComErro}</strong> apresentavam algum tipo de erro cognitivo silencioso na fase inicial de coleta de provas.</p>
            
            <p>✅ A <strong>triagem conservadora</strong> (revisão criteriosa de todo o processo inicial) conseguiu eliminar <strong>${dados.errosEliminados} casos</strong> com erro (${Math.round(dados.taxaEfetividade * 100)}% de efetividade), evitando que provas contaminadas prosseguissem.</p>
            
            <p>⚠️ No entanto, <strong>${dados.errosNaoDetectados} casos</strong> com erro passaram despercebidos pela triagem. Uma abordagem focada apenas em "prova nova robusta" tenderia a ignorar a contaminação original desses casos, aceitando como válidas provas que derivam de um erro inicial silencioso.</p>
            
            <p>📊 Dos 20 casos totais, <strong>${dados.casosLimpos}</strong> estavam realmente limpos (sem qualquer erro de origem).</p>
            
            <p>${dados.errosNaoDetectados === 0 
                ? '🌟 Parabéns! Nesta simulação a triagem foi perfeita e detectou todos os erros. Isso é raro na prática!' 
                : dados.errosNaoDetectados > 5 
                    ? '🔴 Atenção: Muitos erros silenciosos passaram! Isso demonstra como falhas iniciais podem ser perigosas e difíceis de detectar.' 
                    : '📌 Isso demonstra o perigo dos erros silenciosos: mesmo uma triagem cuidadosa pode deixar resquícios, e a "prova nova" é cega a eles.'}</p>
        `;
        
        textoInterpretacao.innerHTML = interpretacao;
        
        // Rolagem suave até o resultado
        painelResultado.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // Adicionar evento de clique ao botão
    if (btnAnalisar) {
        btnAnalisar.addEventListener('click', function() {
            console.log('Botão clicado!');
            
            // Gerar nova simulação
            const dados = realizarSimulacao();
            
            // Atualizar a interface
            atualizarInterface(dados);
        });
        
        console.log('Event listener adicionado ao botão');
    } else {
        console.error('ERRO: Botão não encontrado!');
    }
    
    // Para teste: simular automaticamente após 1 segundo (opcional)
    // setTimeout(() => {
    //     if (btnAnalisar) {
    //         btnAnalisar.click();
    //     }
    // }, 1000);
});
