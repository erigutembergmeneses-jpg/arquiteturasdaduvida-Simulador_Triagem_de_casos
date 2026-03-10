# Simulador de Triagem: Erros Cognitivos Silenciosos no Projeto Revisa

![Simulador Preview](link-para-imagem-se-houver)

Este é um simulador interativo desenvolvido para demonstrar, na prática, como erros cognitivos silenciosos podem persistir em processos de análise probatória, mesmo diante de triagens conservadoras.

## 🧠 O Problema

No contexto do Projeto Revisa (inspirado em casos reais brasileiros), analistas são confrontados com 20 casos. Alguns desses casos contêm **erros cognitivos silenciosos** — falhas na coleta ou interpretação inicial de provas que não deixam vestígios óbvios, mas comprometem a confiabilidade de todo o processo subsequente.

O simulador explora dois fenômenos:
1. **A eficácia limitada da triagem conservadora**: mesmo uma revisão cuidadosa elimina muitos, mas não todos, os erros.
2. **A falácia da "prova nova robusta"**: confiar apenas em novas provas, sem reexaminar a origem, permite que erros iniciais permaneçam.

## 🚀 Funcionalidades

- Simulação estatística de 20 casos com variação realista de incidência de erros (entre 12 e 18 casos afetados).
- Cálculo dinâmico de quantos erros são eliminados por uma triagem conservadora (taxa de sucesso entre 75% e 90%).
- Destaque visual para os erros que permanecem não detectados, representando a limitação de critérios focados apenas em "prova nova robusta".
- Painel de resultados com interpretação contextualizada.
- Design responsivo e acessível.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica.
- **CSS3**: Estilização moderna com variáveis, flexbox e grid.
- **JavaScript (ES6+)**: Lógica de simulação e manipulação dinâmica do DOM.

## 📂 Estrutura de Arquivos
simulador-revisa/
│
├── index.html # Página principal
├── style.css # Estilos do site
├── script.js # Lógica do simulador
└── README.md # Documentação

## 🎯 Como Usar

1. Clone este repositório ou faça o download dos arquivos.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. Clique no botão **"Realizar Triagem"** para gerar uma nova simulação.
4. Observe os resultados e leia a interpretação para compreender o fenômeno dos erros cognitivos silenciosos.

## 📚 Conceitos Abordados

- **Erro Cognitivo Silencioso**: Viés ou falha inicial que não é aparente, mas vicia todo o processo.
- **Triagem Conservadora**: Revisão meticulosa que busca identificar falhas na origem.
- **Prova Nova Robusta**: Evidência posterior de alta qualidade, mas que pode estar contaminada se derivar de um erro anterior.
- **Casos Reais Brasileiros**: O simulador abstrai padrões observados em análises de processos judiciais e administrativos no Brasil.

## 🤝 Contribuição

Sinta-se à vontade para sugerir melhorias, reportar issues ou expandir a lógica do simulador. Este projeto é aberto para fins educacionais.

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido para fins didáticos.**  
*Inspirado nos desafios reais da análise probatória e da psicologia cognitiva.*
