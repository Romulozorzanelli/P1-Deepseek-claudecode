import {
  KnowledgeItem,
  CategoryInfo,
  StudyModule,
  PromptCollection,
  Project,
  AutomationWorkflow,
  DocSection,
  Activity,
  Note,
} from "./types"

export const categoryInfos: CategoryInfo[] = [
  { id: "fundamentos", name: "Fundamentos de IA", icon: "Brain", color: "indigo", count: 3 },
  { id: "machine-learning", name: "Machine Learning", icon: "Cpu", color: "emerald", count: 3 },
  { id: "deep-learning", name: "Deep Learning", icon: "Network", color: "violet", count: 3 },
  { id: "llms", name: "LLMs", icon: "MessageSquare", color: "amber", count: 3 },
  { id: "etica", name: "Etica em IA", icon: "Scale", color: "rose", count: 3 },
  { id: "aplicacoes", name: "Aplicacoes", icon: "Rocket", color: "cyan", count: 3 },
]

export const knowledgeItems: KnowledgeItem[] = [
  {
    id: "k1",
    title: "O que e Inteligencia Artificial?",
    description: "Conceitos fundamentais e definicoes de IA, abordando a diferenca entre IA fraca e forte.",
    category: "fundamentos",
    tags: ["conceitos", "definicao", "historia"],
    difficulty: "iniciante",
    content: `# O que e Inteligencia Artificial?

## Definicao
Inteligencia Artificial (IA) e um campo da ciencia da computacao dedicado a criar sistemas que podem realizar tarefas que normalmente exigiriam inteligencia humana. Essas tarefas incluem raciocinio, aprendizado, percepcao e resolucao de problemas.

## Tipos de IA
- **IA Fraca (Narrow AI)**: Projetada para tarefas especificas (ex: assistentes virtuais, recomendacao de conteudo)
- **IA Geral (AGI)**: Capacidade de entender e realizar qualquer tarefa intelectual humana
- **IA Forte**: Consciencia e compreensao genuina

## Historia
O termo foi cunhado em 1956 por John McCarthy durante a conferencia de Dartmouth.`,
    createdAt: new Date("2025-01-15"),
    updatedAt: new Date("2025-03-20"),
  },
  {
    id: "k2",
    title: "Redes Neurais Explicadas",
    description: "Como as redes neurais artificiais se inspiram no cerebro humano para processar informacoes.",
    category: "fundamentos",
    tags: ["redes neurais", "neuronios", "arquitetura"],
    difficulty: "intermediario",
    content: `# Redes Neurais Explicadas

## Inspiracao Biologica
Redes neurais artificiais sao inspiradas no funcionamento do cerebro humano, onde neuronios se conectam via sinapses.

## Estrutura Basica
1. **Camada de Entrada**: Recebe os dados brutos
2. **Camadas Ocultas**: Processam a informacao com transformacoes matematicas
3. **Camada de Saida**: Produz o resultado final

## Funcionamento
Cada neuronio recebe entradas, aplica pesos, soma e passa por uma funcao de ativacao.`,
    createdAt: new Date("2025-02-10"),
    updatedAt: new Date("2025-03-22"),
  },
  {
    id: "k3",
    title: "Machine Learning vs Programacao Tradicional",
    description: "Diferencas fundamentais entre ensinar um computador e programa-lo com regras explicitas.",
    category: "fundamentos",
    tags: ["comparacao", "paradigmas", "aprendizado"],
    difficulty: "iniciante",
    content: `# Machine Learning vs Programacao Tradicional

## Programacao Tradicional
- Regras + Dados = Resultados
- O programador define todas as regras explicitamente
- Ideal para problemas bem definidos

## Machine Learning
- Dados + Resultados = Regras (Modelo)
- O sistema aprende padroes a partir de exemplos
- Ideal para problemas complexos com muitos fatores`,
    createdAt: new Date("2025-03-01"),
    updatedAt: new Date("2025-03-25"),
  },
  {
    id: "k4",
    title: "Algoritmos de Classificacao",
    description: "Principais algoritmos para classificar dados em categorias pre-definidas.",
    category: "machine-learning",
    tags: ["classificacao", "algoritmos", "supervisionado"],
    difficulty: "intermediario",
    content: `# Algoritmos de Classificacao

## Principais Algoritmos
- **Regressao Logistica**: Simples e eficaz para problemas binarios
- **Arvores de Decisao**: Interpretaveis e faceis de visualizar
- **Random Forest**: Conjunto de arvores para melhor performance
- **SVM**: Eficiente em espacos de alta dimensionalidade
- **KNN**: Classifica com base nos vizinhos mais proximos

## Metricas de Avaliacao
- Acuracia, Precisao, Recall, F1-Score`,
    createdAt: new Date("2025-02-20"),
    updatedAt: new Date("2025-03-18"),
  },
  {
    id: "k5",
    title: "Regressao e Predicao",
    description: "Tecnicas de machine learning para prever valores numericos continuos.",
    category: "machine-learning",
    tags: ["regressao", "predicao", "supervisionado"],
    difficulty: "intermediario",
    content: `# Regressao e Predicao

## Tipos de Regressao
- **Linear**: Relacao linear entre variaveis
- **Polinomial**: Captura relacoes nao-lineares
- **Ridge/Lasso**: Com regularizacao para evitar overfitting

## Aplicacoes
- Previsao de precos
- Estimativa de demanda
- Analise de tendencias`,
    createdAt: new Date("2025-03-05"),
    updatedAt: new Date("2025-03-28"),
  },
  {
    id: "k6",
    title: "Aprendizado Supervisionado vs Nao-Supervisionado",
    description: "Dois paradigmas fundamentais de aprendizado de maquina e quando usar cada um.",
    category: "machine-learning",
    tags: ["paradigmas", "supervisionado", "clusterizacao"],
    difficulty: "iniciante",
    content: `# Supervisionado vs Nao-Supervisionado

## Aprendizado Supervisionado
- Dados possuem rotulos
- Objetivo: prever rotulos para novos dados
- Ex: Classificacao de emails como spam

## Aprendizado Nao-Supervisionado
- Dados nao possuem rotulos
- Objetivo: encontrar padroes ocultos
- Ex: Segmentacao de clientes`,
    createdAt: new Date("2025-03-10"),
    updatedAt: new Date("2025-03-30"),
  },
  {
    id: "k7",
    title: "Deep Learning e Redes Profundas",
    description: "Arquiteturas avancadas de redes neurais com multiplas camadas de processamento.",
    category: "deep-learning",
    tags: ["redes profundas", "arquitetura", "GPU"],
    difficulty: "avancado",
    content: `# Deep Learning e Redes Profundas

## O que torna "profundo"
Multiplas camadas ocultas que aprendem hierarquias de caracteristicas, de simples a complexas.

## Arquiteturas Principais
- **CNN**: Redes Convolucionais para imagens
- **RNN/LSTM**: Para sequencias e series temporais
- **Transformers**: Atualmente dominam NLP e visao
- **GANs**: Redes generativas adversariais`,
    createdAt: new Date("2025-01-20"),
    updatedAt: new Date("2025-04-01"),
  },
  {
    id: "k8",
    title: "CNNs e Visao Computacional",
    description: "Como redes neurais convolucionais revolucionaram o processamento de imagens.",
    category: "deep-learning",
    tags: ["CNN", "visao computacional", "imagens"],
    difficulty: "avancado",
    content: `# CNNs e Visao Computacional

## Componentes de uma CNN
- **Convolucao**: Filtros que detectam padroes locais
- **Pooling**: Reduz dimensionalidade mantendo informacao importante
- **Flatten + Dense**: Classificacao final

## Aplicacoes
- Reconhecimento facial
- Diagnostico medico por imagem
- Veiculos autonomos`,
    createdAt: new Date("2025-04-05"),
    updatedAt: new Date("2025-04-10"),
  },
  {
    id: "k9",
    title: "Transfer Learning",
    description: "Tecnica que reutiliza modelos pre-treinados para novas tarefas com menos dados.",
    category: "deep-learning",
    tags: ["transfer learning", "fine-tuning", "pre-treinamento"],
    difficulty: "intermediario",
    content: `# Transfer Learning

## Conceito
Reaproveitar um modelo treinado em uma tarefa grande (ex: ImageNet) para uma tarefa especifica com poucos dados.

## Vantagens
- Menor necessidade de dados rotulados
- Treinamento mais rapido
- Melhor performance em datasets pequenos

## Fine-Tuning
Ajuste fino das ultimas camadas do modelo pre-treinado para a nova tarefa.`,
    createdAt: new Date("2025-04-12"),
    updatedAt: new Date("2025-04-15"),
  },
  {
    id: "k10",
    title: "O que sao Large Language Models?",
    description: "Modelos de linguagem em larga escala como GPT, Claude e Gemini explicados.",
    category: "llms",
    tags: ["LLM", "GPT", "transformers"],
    difficulty: "intermediario",
    content: `# Large Language Models

## Definicao
LLMs sao modelos de IA treinados em enormes quantidades de texto para entender e gerar linguagem natural.

## Caracteristicas
- Bilhoes de parametros
- Treinados em datasets massivos (livros, web, codigo)
- Arquitetura Transformer (attention mechanism)
- Capacidade de few-shot e zero-shot learning

## Principais Modelos
- GPT-4 (OpenAI)
- Claude (Anthropic)
- Gemini (Google)
- Llama (Meta)`,
    createdAt: new Date("2025-02-15"),
    updatedAt: new Date("2025-04-20"),
  },
  {
    id: "k11",
    title: "Tokens e Contexto",
    description: "Entenda o que sao tokens e como a janela de contexto afeta o processamento de LLMs.",
    category: "llms",
    tags: ["tokens", "contexto", "limites"],
    difficulty: "iniciante",
    content: `# Tokens e Contexto

## Tokens
- Unidade basica de processamento de texto
- 1 token ~= 4 caracteres em portugues
- Modelos cobram por token processado

## Janela de Contexto
- Quantidade maxima de tokens que o modelo "lembra"
- Modelos modernos: 128K a 1M tokens
- Afeta a capacidade de processar documentos longos`,
    createdAt: new Date("2025-04-22"),
    updatedAt: new Date("2025-04-25"),
  },
  {
    id: "k12",
    title: "Prompt Engineering",
    description: "Tecnicas avancadas para criar prompts eficazes e obter melhores resultados de LLMs.",
    category: "llms",
    tags: ["prompts", "engenharia", "otimizacao"],
    difficulty: "intermediario",
    content: `# Prompt Engineering

## Tecnicas Fundamentais
- **Zero-shot**: Pedir direto sem exemplos
- **Few-shot**: Fornecer alguns exemplos
- **Chain-of-Thought**: Pedir raciocinio passo a passo
- **Role Prompting**: Atribuir um papel ao modelo

## Boas Praticas
- Seja claro e especifico
- Forneca contexto relevante
- Especifique formato de saida desejado`,
    createdAt: new Date("2025-04-28"),
    updatedAt: new Date("2025-05-01"),
  },
  {
    id: "k13",
    title: "Vieses em Modelos de IA",
    description: "Como vieses humanos podem ser amplificados por sistemas de IA e como mitiga-los.",
    category: "etica",
    tags: ["vies", "justica", "equidade"],
    difficulty: "intermediario",
    content: `# Vieses em Modelos de IA

## Origem dos Vieses
- Dados de treinamento enviesados
- Selecao de features problematicas
- Feedback loops em sistemas de recomendacao

## Tipos Comuns
- Vies de genero
- Vies racial
- Vies socioeconomico

## Mitigacao
- Auditar datasets
- Equipes diversas
- Testes de equidade`,
    createdAt: new Date("2025-03-15"),
    updatedAt: new Date("2025-04-05"),
  },
  {
    id: "k14",
    title: "Privacidade e Protecao de Dados",
    description: "Desafios de privacidade no treinamento e uso de modelos de IA.",
    category: "etica",
    tags: ["privacidade", "LGPD", "dados pessoais"],
    difficulty: "iniciante",
    content: `# Privacidade e Protecao de Dados

## Desafios
- Modelos podem memorizar dados de treinamento
- Risco de extracao de informacoes pessoais
- Consentimento para uso de dados

## LGPD e IA
- Direito a explicacao de decisoes automatizadas
- Necessidade de base legal para tratamento
- Transparencia sobre uso de dados`,
    createdAt: new Date("2025-05-02"),
    updatedAt: new Date("2025-05-05"),
  },
  {
    id: "k15",
    title: "Regulamentacao de IA no Brasil",
    description: "Panorama atual da legislacao brasileira sobre inteligencia artificial.",
    category: "etica",
    tags: ["regulamentacao", "Brasil", "legislacao"],
    difficulty: "intermediario",
    content: `# Regulamentacao de IA no Brasil

## Marco Legal
O projeto de lei (PL 2338/2023) estabelece principios e regras para desenvolvimento e uso de IA no Brasil.

## Principios
- Transparencia
- Nao discriminacao
- Supervisao humana
- Responsabilizacao

## Impactos
- Classificacao de risco (alto/baixo)
- Avaliacao de impacto algoritmico`,
    createdAt: new Date("2025-05-06"),
    updatedAt: new Date("2025-05-08"),
  },
  {
    id: "k16",
    title: "IA na Saude",
    description: "Aplicacoes de IA em diagnostico medico, descoberta de medicamentos e gestao hospitalar.",
    category: "aplicacoes",
    tags: ["saude", "medicina", "diagnostico"],
    difficulty: "intermediario",
    content: `# IA na Saude

## Aplicacoes Principais
- **Diagnostico por Imagem**: Deteccao de tumores, fraturas
- **Descoberta de Farmacos**: Predicao de moleculas candidatas
- **Medicina Personalizada**: Tratamentos baseados em perfil genetico

## Beneficios
- Diagnosticos mais rapidos e precisos
- Reducao de custos operacionais`,
    createdAt: new Date("2025-02-25"),
    updatedAt: new Date("2025-05-10"),
  },
  {
    id: "k17",
    title: "IA Generativa para Criacao de Conteudo",
    description: "Como IA esta transformando a criacao de textos, imagens, musica e videos.",
    category: "aplicacoes",
    tags: ["generativa", "conteudo", "criatividade"],
    difficulty: "iniciante",
    content: `# IA Generativa para Criacao de Conteudo

## Modalidades
- **Texto**: Artigos, roteiros, poesia
- **Imagem**: Ilustracoes, design, fotografia
- **Audio**: Musica, voice-over, podcasts
- **Video**: Animacoes, edicao, efeitos

## Ferramentas
- DALL-E, Midjourney, Stable Diffusion
- Runway, Pika Labs
- Suno AI, ElevenLabs`,
    createdAt: new Date("2025-05-10"),
    updatedAt: new Date("2025-05-12"),
  },
  {
    id: "k18",
    title: "IA no Mercado Financeiro",
    description: "Aplicacoes de IA em analise de risco, trading algoritmico e deteccao de fraudes.",
    category: "aplicacoes",
    tags: ["financas", "trading", "risco"],
    difficulty: "avancado",
    content: `# IA no Mercado Financeiro

## Aplicacoes
- **Trading Algoritmico**: Decisoes em millisegundos
- **Analise de Risco**: Predicao de inadimplencia
- **Deteccao de Fraude**: Identificacao de transacoes suspeitas
- **Robo-advisors**: Consultoria automatizada

## Tecnologias
- Series temporais com LSTMs
- Processamento de noticias com NLP
- Grafos para redes de transacoes`,
    createdAt: new Date("2025-05-12"),
    updatedAt: new Date("2025-05-15"),
  },
]

export const studyModules: StudyModule[] = [
  {
    id: "m1",
    title: "Fundamentos de IA",
    description: "Conceitos basicos e historia da inteligencia artificial.",
    category: "fundamentos",
    progress: 60,
    estimatedTime: "2h 30min",
    lessons: [
      { id: "l1", title: "O que e IA?", duration: "15min", completed: true },
      { id: "l2", title: "Historia da IA", duration: "20min", completed: true },
      { id: "l3", title: "Tipos de IA", duration: "15min", completed: true },
      { id: "l4", title: "IA no dia a dia", duration: "25min", completed: false },
      { id: "l5", title: "Futuro da IA", duration: "20min", completed: false },
    ],
  },
  {
    id: "m2",
    title: "Machine Learning Basico",
    description: "Aprendizado supervisionado, nao-supervisionado e algoritmos classicos.",
    category: "ml",
    progress: 40,
    estimatedTime: "3h 15min",
    lessons: [
      { id: "l6", title: "Tipos de aprendizado", duration: "20min", completed: true },
      { id: "l7", title: "Regressao linear", duration: "30min", completed: true },
      { id: "l8", title: "Arvores de decisao", duration: "25min", completed: false },
      { id: "l9", title: "Metricas de avaliacao", duration: "25min", completed: false },
      { id: "l10", title: "Overfitting e underfitting", duration: "20min", completed: false },
    ],
  },
  {
    id: "m3",
    title: "Deep Learning",
    description: "Redes neurais profundas, CNNs, RNNs e arquiteturas modernas.",
    category: "dl",
    progress: 25,
    estimatedTime: "4h",
    lessons: [
      { id: "l11", title: "Neuronios e camadas", duration: "30min", completed: true },
      { id: "l12", title: "Funcoes de ativacao", duration: "25min", completed: false },
      { id: "l13", title: "CNNs para visao", duration: "35min", completed: false },
      { id: "l14", title: "Treinamento e backpropagation", duration: "40min", completed: false },
      { id: "l15", title: "Frameworks (PyTorch/TF)", duration: "30min", completed: false },
    ],
  },
  {
    id: "m4",
    title: "Large Language Models",
    description: "Arquitetura transformer, fine-tuning, RAG e agentes.",
    category: "llms",
    progress: 50,
    estimatedTime: "3h",
    lessons: [
      { id: "l16", title: "Arquitetura Transformer", duration: "35min", completed: true },
      { id: "l17", title: "Mecanismo de atencao", duration: "30min", completed: true },
      { id: "l18", title: "Fine-tuning e LoRA", duration: "25min", completed: false },
      { id: "l19", title: "RAG e embeddings", duration: "30min", completed: false },
    ],
  },
  {
    id: "m5",
    title: "Etica e Responsabilidade em IA",
    description: "Vieses, privacidade, transparencia e regulamentacao.",
    category: "etica",
    progress: 30,
    estimatedTime: "2h",
    lessons: [
      { id: "l20", title: "Vieses algoritmicos", duration: "25min", completed: true },
      { id: "l21", title: "Privacidade e dados", duration: "20min", completed: false },
      { id: "l22", title: "Transparencia e explicabilidade", duration: "25min", completed: false },
      { id: "l23", title: "Regulamentacao global", duration: "25min", completed: false },
    ],
  },
  {
    id: "m6",
    title: "IA Aplicada",
    description: "Casos reais de IA em saude, financas, educacao e industria.",
    category: "aplicacoes",
    progress: 15,
    estimatedTime: "2h 30min",
    lessons: [
      { id: "l24", title: "IA na saude", duration: "25min", completed: false },
      { id: "l25", title: "IA em financas", duration: "25min", completed: true },
      { id: "l26", title: "IA na educacao", duration: "20min", completed: false },
      { id: "l27", title: "IA na industria", duration: "25min", completed: false },
      { id: "l28", title: "Startups e inovacao", duration: "20min", completed: false },
    ],
  },
]

export const promptCollections: PromptCollection[] = [
  {
    id: "pc1",
    name: "Texto e Redacao",
    description: "Prompts para geracao e aprimoramento de textos.",
    category: "texto",
    prompts: [
      {
        id: "p1",
        title: "Resumo de artigo",
        description: "Gera um resumo conciso de qualquer texto mantendo os pontos principais.",
        prompt: "Resuma o seguinte texto em 3 paragrafos, destacando: (1) ideia principal, (2) argumentos-chave e (3) conclusao. Mantenha tom profissional.",
        category: "texto",
        tags: ["resumo", "texto", "estudo"],
      },
      {
        id: "p2",
        title: "Correcao gramatical",
        description: "Revisa e corrige gramatica, ortografia e estilo de textos.",
        prompt: "Revise o texto abaixo corrigindo erros gramaticais, ortograficos e de estilo. Sugira melhorias de clareza sem alterar o significado original.",
        category: "texto",
        tags: ["correcao", "gramatica", "revisao"],
      },
      {
        id: "p3",
        title: "Gerador de ideias criativas",
        description: "Brainstorming estruturado para gerar ideias criativas sobre qualquer tema.",
        prompt: "Atue como um facilitador de brainstorming. Gere 10 ideias criativas e inovadoras sobre [TEMA]. Para cada ideia, forneca: nome, descricao de 2 frases e porque e viavel.",
        category: "texto",
        tags: ["brainstorming", "criatividade", "ideias"],
      },
      {
        id: "p4",
        title: "Traducao contextual",
        description: "Traducao mantendo contexto cultural e tom do texto original.",
        prompt: "Traduza o seguinte texto de [IDIOMA_ORIGEM] para [IDIOMA_DESTINO]. Mantenha o tom, contexto cultural e estilo do original. Explique escolhas de traducao quando necessario.",
        category: "texto",
        tags: ["traducao", "localizacao", "idiomas"],
      },
    ],
  },
  {
    id: "pc2",
    name: "Programacao",
    description: "Prompts para desenvolvimento de software e resolucao de problemas.",
    category: "programacao",
    prompts: [
      {
        id: "p5",
        title: "Code review",
        description: "Analise de codigo com sugestoes de melhoria e identificacao de bugs.",
        prompt: "Revise o seguinte codigo [LINGUAGEM] identificando: (1) bugs e edge cases, (2) melhorias de performance, (3) violacoes de boas praticas. Sugira correcoes com exemplos.",
        category: "programacao",
        tags: ["code-review", "qualidade", "debug"],
      },
      {
        id: "p6",
        title: "Gerador de API",
        description: "Gera endpoints REST API com validacao e documentacao.",
        prompt: "Gere uma API REST em [LINGUAGEM/FRAMEWORK] para [RECURSO] com: CRUD completo, validacao de entrada, tratamento de erros, documentacao Swagger e exemplos de uso.",
        category: "programacao",
        tags: ["API", "REST", "backend"],
      },
      {
        id: "p7",
        title: "Explicador de codigo",
        description: "Explica codigo complexo linha por linha de forma didatica.",
        prompt: "Explique o seguinte codigo [LINGUAGEM] linha por linha como se eu fosse um desenvolvedor junior. Inclua: proposito de cada bloco, estruturas de dados usadas e fluxo de execucao.",
        category: "programacao",
        tags: ["explicacao", "aprendizado", "codigo"],
      },
      {
        id: "p8",
        title: "Refatoracao de codigo",
        description: "Sugere refatoracoes seguindo principios SOLID e clean code.",
        prompt: "Refatore o seguinte codigo [LINGUAGEM] aplicando principios SOLID e clean code. Para cada mudanca explique: problema, solucao aplicada e beneficio obtido.",
        category: "programacao",
        tags: ["refatoracao", "SOLID", "clean-code"],
      },
    ],
  },
  {
    id: "pc3",
    name: "Analise de Dados",
    description: "Prompts para analise, visualizacao e interpretacao de dados.",
    category: "dados",
    prompts: [
      {
        id: "p9",
        title: "Analise exploratoria",
        description: "Roteiro completo para analise exploratoria de dados.",
        prompt: "Realize uma analise exploratoria do dataset descrito abaixo. Inclua: (1) estatisticas descritivas, (2) distribuicoes das variaveis, (3) correlacoes relevantes, (4) insights e proximos passos.",
        category: "dados",
        tags: ["EDA", "estatistica", "insights"],
      },
      {
        id: "p10",
        title: "Visualizacao de dados",
        description: "Sugestoes de visualizacoes efetivas baseadas no tipo de dado.",
        prompt: "Sugira as 5 melhores visualizacoes para os seguintes dados: [DADOS]. Para cada uma, explique: tipo de grafico, porque e adequado, o que revela e codigo Python (matplotlib/plotly) para gerar.",
        category: "dados",
        tags: ["visualizacao", "graficos", "storytelling"],
      },
      {
        id: "p11",
        title: "Query SQL natural",
        description: "Converte descricao em linguagem natural para SQL otimizado.",
        prompt: "Converta a seguinte descricao em uma query SQL otimizada: [DESCRICAO]. Inclua indices sugeridos e explique a estrategia de execucao.",
        category: "dados",
        tags: ["SQL", "banco de dados", "query"],
      },
      {
        id: "p12",
        title: "Interpretacao de metricas",
        description: "Analisa metricas de negocio e sugere acoes baseadas em dados.",
        prompt: "Analise as seguintes metricas [METRICAS] e responda: (1) saude geral, (2) tendencias preocupantes, (3) oportunidades identificadas, (4) recomendacoes acionaveis priorizadas.",
        category: "dados",
        tags: ["metricas", "BI", "decisao"],
      },
    ],
  },
  {
    id: "pc4",
    name: "Criatividade",
    description: "Prompts para geracao de conteudo criativo e artistico.",
    category: "criatividade",
    prompts: [
      {
        id: "p13",
        title: "Storytelling de marca",
        description: "Cria narrativas envolventes para marcas e produtos.",
        prompt: "Crie uma historia de marca envolvente para [MARCA/PRODUTO]. Estrutura: (1) origem e proposito, (2) desafio superado, (3) missao e valores, (4) visao de futuro. Tom: [TOM].",
        category: "criatividade",
        tags: ["storytelling", "branding", "marketing"],
      },
      {
        id: "p14",
        title: "Gerador de titulos",
        description: "Gera titulos magneticos para artigos, videos e posts.",
        prompt: "Gere 15 titulos magneticos para um [TIPO_DE_CONTEUDO] sobre [TEMA]. Varie entre: listas, como-fazer, perguntas, controversos e emocionais. Indique os 3 melhores.",
        category: "criatividade",
        tags: ["titulos", "copywriting", "engajamento"],
      },
      {
        id: "p15",
        title: "Roteiro para video",
        description: "Estrutura completa de roteiro para videos educativos.",
        prompt: "Crie um roteiro para video educativo de [DURACAO] sobre [TEMA]. Estrutura: (1) hook inicial (15s), (2) introducao (30s), (3) conteudo principal em 3 atos, (4) CTA final. Inclua sugestoes visuais.",
        category: "criatividade",
        tags: ["video", "roteiro", "conteudo"],
      },
      {
        id: "p16",
        title: "Dialogo entre personagens",
        description: "Cria dialogos naturais entre personagens ficticios.",
        prompt: "Escreva um dialogo entre [PERSONAGEM_A] e [PERSONAGEM_B] discutindo [TEMA]. Cada personagem deve ter voz propria, motivacao clara e o dialogo deve revelar conflito e resolucao.",
        category: "criatividade",
        tags: ["dialogo", "ficcao", "narrativa"],
      },
    ],
  },
  {
    id: "pc5",
    name: "Produtividade",
    description: "Prompts para organizacao, planejamento e eficiencia pessoal.",
    category: "produtividade",
    prompts: [
      {
        id: "p17",
        title: "Plano de estudos personalizado",
        description: "Cria um plano de estudos adaptado ao seu objetivo e disponibilidade.",
        prompt: "Crie um plano de estudos de [DURACAO] para aprender [TEMA] comecando do nivel [NIVEL]. Disponibilidade: [HORAS_POR_SEMANA]. Inclua: marco semanal, recursos recomendados e projetos praticos.",
        category: "produtividade",
        tags: ["estudos", "planejamento", "aprendizado"],
      },
      {
        id: "p18",
        title: "Decomposicao de tarefas",
        description: "Quebra grandes objetivos em tarefas pequenas e acionaveis.",
        prompt: "Decomponha o seguinte objetivo [OBJETIVO] em tarefas seguindo metodologia SMART: Especificas, Mensuraveis, Atingiveis, Relevantes e Temporais. Organize por dependencias.",
        category: "produtividade",
        tags: ["tarefas", "objetivos", "SMART"],
      },
      {
        id: "p19",
        title: "Resumo de reuniao",
        description: "Template estruturado para resumir reunioes de forma eficiente.",
        prompt: "Resuma a seguinte reuniao no formato: (1) participantes e data, (2) topicos discutidos, (3) decisoes tomadas, (4) acoes pendentes com responsaveis e prazos, (5) proxima reuniao.",
        category: "produtividade",
        tags: ["reuniao", "atas", "organizacao"],
      },
      {
        id: "p20",
        title: "Template de documentacao",
        description: "Gera templates de documentacao tecnica prontos para preencher.",
        prompt: "Gere um template de documentacao para [TIPO] (API/feature/biblioteca). Inclua secoes: overview, instalacao, uso basico, API reference, exemplos, troubleshooting. Formato Markdown.",
        category: "produtividade",
        tags: ["documentacao", "template", "markdown"],
      },
    ],
  },
]

export const projects: Project[] = [
  {
    id: "proj1",
    title: "Chatbot de Suporte",
    description: "Chatbot inteligente para suporte ao cliente usando RAG com documentacao interna.",
    status: "progresso",
    tasks: [
      { id: "t1", title: "Coletar documentacao de suporte", completed: true },
      { id: "t2", title: "Configurar vector database", completed: true },
      { id: "t3", title: "Implementar pipeline RAG", completed: false },
      { id: "t4", title: "Testar respostas do chatbot", completed: false },
      { id: "t5", title: "Integrar com Slack/Teams", completed: false },
    ],
    dueDate: "15/06/2025",
    color: "indigo",
  },
  {
    id: "proj2",
    title: "Analise de Sentimentos",
    description: "Modelo de NLP para analise de sentimentos de avaliacoes de produtos.",
    status: "backlog",
    tasks: [
      { id: "t6", title: "Coletar dataset de avaliacoes", completed: false },
      { id: "t7", title: "Pre-processar texto em portugues", completed: false },
      { id: "t8", title: "Testar modelos (BERT vs LLM)", completed: false },
      { id: "t9", title: "Criar dashboard de resultados", completed: false },
    ],
    dueDate: "30/06/2025",
    color: "emerald",
  },
  {
    id: "proj3",
    title: "Recomendador de Conteudo",
    description: "Sistema de recomendacao hibrido usando filtragem colaborativa e baseada em conteudo.",
    status: "progresso",
    tasks: [
      { id: "t10", title: "Analisar dados de interacao", completed: true },
      { id: "t11", title: "Implementar collaborative filtering", completed: true },
      { id: "t12", title: "Criar embeddings de conteudo", completed: false },
      { id: "t13", title: "Combinar modelos hibridos", completed: false },
      { id: "t14", title: "Teste A/B com usuarios", completed: false },
    ],
    dueDate: "20/06/2025",
    color: "violet",
  },
  {
    id: "proj4",
    title: "Dashboard de Metricas IA",
    description: "Painel executivo com metricas de performance de modelos em producao.",
    status: "concluido",
    tasks: [
      { id: "t15", title: "Definir KPIs relevantes", completed: true },
      { id: "t16", title: "Conectar fontes de dados", completed: true },
      { id: "t17", title: "Criar visualizacoes", completed: true },
      { id: "t18", title: "Configurar alertas", completed: true },
    ],
    dueDate: "10/05/2025",
    color: "amber",
  },
  {
    id: "proj5",
    title: "Finetuning de LLM",
    description: "Fine-tuning de modelo open-source para dominio juridico brasileiro.",
    status: "backlog",
    tasks: [
      { id: "t19", title: "Coletar corpus juridico", completed: false },
      { id: "t20", title: "Preparar dataset instrucao-resposta", completed: false },
      { id: "t21", title: "Configurar LoRA fine-tuning", completed: false },
      { id: "t22", title: "Avaliar qualidade das respostas", completed: false },
      { id: "t23", title: "Deploy do modelo", completed: false },
    ],
    dueDate: "15/07/2025",
    color: "rose",
  },
  {
    id: "proj6",
    title: "Automacao de Documentos",
    description: "Pipeline de extracao e classificacao automatica de documentos fiscais.",
    status: "concluido",
    tasks: [
      { id: "t24", title: "OCR de documentos escaneados", completed: true },
      { id: "t25", title: "Classificacao por tipo de documento", completed: true },
      { id: "t26", title: "Extracao de campos-chave", completed: true },
    ],
    dueDate: "01/05/2025",
    color: "cyan",
  },
]

export const automationWorkflows: AutomationWorkflow[] = [
  {
    id: "aw1",
    title: "Resumo Diario de Noticias",
    description: "Coleta noticias de feeds RSS e gera resumo executivo todo dia as 8h.",
    trigger: "Agendamento diario as 8:00",
    action: "Scrape RSS -> LLM resume -> Envia email",
    active: true,
    icon: "Newspaper",
  },
  {
    id: "aw2",
    title: "Classificador de Emails",
    description: "Classifica emails recebidos por urgencia e topico usando IA.",
    trigger: "Novo email recebido",
    action: "Analisa conteudo -> Classifica -> Adiciona tag -> Move para pasta",
    active: true,
    icon: "Mail",
  },
  {
    id: "aw3",
    title: "Moderacao de Comentarios",
    description: "Analisa e aprova/rejeita automaticamente comentarios em blog.",
    trigger: "Novo comentario postado",
    action: "Analisa toxidade -> Aprova/Sinaliza/Rejeita -> Notifica admin",
    active: true,
    icon: "MessageCircle",
  },
  {
    id: "aw4",
    title: "Gerador de Relatorio Semanal",
    description: "Compila metricas e gera relatorio em PDF todo domingo.",
    trigger: "Agendamento semanal (domingo 18:00)",
    action: "Coleta metricas -> Gera graficos -> Monta PDF -> Envia Slack",
    active: false,
    icon: "FileText",
  },
  {
    id: "aw5",
    title: "Tradutor de Conteudo",
    description: "Traduz automaticamente posts do blog para ingles e espanhol.",
    trigger: "Novo post publicado",
    action: "Detecta novo post -> Traduz (LLM) -> Publica versao traduzida",
    active: false,
    icon: "Languages",
  },
  {
    id: "aw6",
    title: "Monitor de Mencoes",
    description: "Monitora mencoes da marca em redes sociais e gera alertas.",
    trigger: "Nova mencao detectada",
    action: "Coleta mencao -> Analisa sentimento -> Se negativo, alerta no Slack",
    active: true,
    icon: "Search",
  },
]

export const docSections: DocSection[] = [
  {
    id: "ds1",
    title: "Guia de Inicio",
    icon: "Rocket",
    pages: [
      {
        id: "dp1",
        title: "Bem-vindo a Central de Conhecimento IA",
        content: `# Bem-vindo a Central de Conhecimento IA

Esta plataforma foi criada para centralizar seus estudos, projetos e recursos de Inteligencia Artificial.

## O que voce encontra aqui

- **Base de Conhecimento**: Artigos e referencias sobre IA
- **Area de Estudos**: Modulos estruturados de aprendizado
- **Biblioteca de Prompts**: Colecoes de prompts prontos para usar
- **Projetos**: Kanban para gerenciar seus projetos de IA
- **Automacao**: Workflows pre-configurados
- **Anotacoes**: Bloco de notas com suporte a markdown

Navegue pelo menu lateral para explorar cada secao.`,
      },
      {
        id: "dp2",
        title: "Primeiros Passos",
        content: `# Primeiros Passos

## 1. Explore a Base de Conhecimento
Comece navegando pelos artigos categorizados na secao Conhecimento.

## 2. Inicie um Modulo de Estudo
Escolha um modulo na Area de Estudos que corresponda ao seu nivel.

## 3. Salve seus Favoritos
Marque itens favoritos clicando no icone de estrela.

## 4. Use Atalhos
- \`Ctrl+K\` para busca global
- Navegue entre secoes pelo sidebar

## 5. Configure seu Perfil
Acesse Configuracoes para personalizar tema e preferencias.`,
      },
      {
        id: "dp3",
        title: "FAQ",
        content: `# Perguntas Frequentes

## Os dados sao salvos?
Sim. Notas e favoritos sao persistidos localmente via localStorage.

## Posso contribuir com conteudo?
Por enquanto o conteudo e mockado. Futuramente teremos sistema de contribuicao.

## Preciso de internet?
Apos carregar, a maior parte do conteudo funciona offline.`,
      },
    ],
  },
  {
    id: "ds2",
    title: "Recursos",
    icon: "BookOpen",
    pages: [
      {
        id: "dp4",
        title: "Glossario de IA",
        content: `# Glossario de IA

- **AGI**: Inteligencia Artificial Geral - IA com capacidade cognitiva humana
- **CNN**: Rede Neural Convolucional - especializada em processamento de imagens
- **Embedding**: Representacao vetorial de dados (texto, imagem) em espaco multidimensional
- **Fine-tuning**: Ajuste fino de modelo pre-treinado para tarefa especifica
- **GPU**: Unidade de Processamento Grafico - hardware essencial para treinar modelos
- **LLM**: Large Language Model - modelo de linguagem de grande escala
- **RAG**: Retrieval-Augmented Generation - tecnica que combina busca + geracao
- **Token**: Unidade basica de processamento de texto em LLMs`,
      },
      {
        id: "dp5",
        title: "Ferramentas Recomendadas",
        content: `# Ferramentas Recomendadas

## Desenvolvimento
- **Python**: Linguagem principal para ML e IA
- **Jupyter Notebook**: Ambiente interativo de desenvolvimento
- **VS Code**: Editor com excelentes extensoes para IA

## Frameworks
- **PyTorch**: Framework flexivel de deep learning
- **TensorFlow**: Framework robusto da Google
- **Hugging Face**: Biblioteca de modelos pre-treinados
- **LangChain**: Framework para aplicacoes com LLMs

## Infraestrutura
- **Google Colab**: GPUs gratuitas para experimentacao
- **Weights & Biases**: Tracking de experimentos
- **Docker**: Containerizacao de modelos`,
      },
    ],
  },
  {
    id: "ds3",
    title: "Roadmaps",
    icon: "Map",
    pages: [
      {
        id: "dp6",
        title: "Roadmap: Engenheiro de ML",
        content: `# Roadmap: Engenheiro de Machine Learning

## Fase 1: Fundamentos (2-3 meses)
- Python avancado (NumPy, Pandas)
- Estatistica e probabilidade
- Algebra linear

## Fase 2: ML Basico (2-3 meses)
- Scikit-learn
- Algoritmos de classificacao e regressao
- Avaliacao de modelos

## Fase 3: Deep Learning (3-4 meses)
- PyTorch ou TensorFlow
- CNNs, RNNs, Transformers
- MLOps e deploy

## Fase 4: Especializacao (continuo)
- NLP ou Visao Computacional
- Modelos em producao
- Sistemas de recomendacao`,
      },
      {
        id: "dp7",
        title: "Roadmap: Prompt Engineer",
        content: `# Roadmap: Prompt Engineer

## Fase 1: Conceitos (1 mes)
- Como LLMs funcionam
- Tokenizacao e contexto
- Principais modelos do mercado

## Fase 2: Tecnicas (2 meses)
- Zero-shot, Few-shot
- Chain-of-Thought
- Role prompting
- Prompt templates

## Fase 3: Avancado (3 meses)
- Construcao de agentes
- RAG e knowledge bases
- Avaliacao de prompts
- Otimizacao sistematica`,
      },
    ],
  },
]

export const activities: Activity[] = [
  { id: "a1", type: "knowledge", action: "Visualizou", target: "O que sao Large Language Models?", time: new Date(Date.now() - 300000) },
  { id: "a2", type: "study", action: "Completou licao", target: "O que e IA?", time: new Date(Date.now() - 600000) },
  { id: "a3", type: "prompt", action: "Favoritou prompt", target: "Code review", time: new Date(Date.now() - 1200000) },
  { id: "a4", type: "project", action: "Atualizou tarefa", target: "Configurar vector database", time: new Date(Date.now() - 1800000) },
  { id: "a5", type: "note", action: "Criou nota", target: "Ideias para projeto de NLP", time: new Date(Date.now() - 3600000) },
  { id: "a6", type: "knowledge", action: "Favoritou artigo", target: "Deep Learning e Redes Profundas", time: new Date(Date.now() - 7200000) },
  { id: "a7", type: "study", action: "Iniciou modulo", target: "Machine Learning Basico", time: new Date(Date.now() - 10800000) },
  { id: "a8", type: "prompt", action: "Copiou prompt", target: "Analise exploratoria de dados", time: new Date(Date.now() - 14400000) },
  { id: "a9", type: "project", action: "Moveu projeto", target: "Chatbot de Suporte para Em Progresso", time: new Date(Date.now() - 21600000) },
  { id: "a10", type: "knowledge", action: "Visualizou", target: "Prompt Engineering", time: new Date(Date.now() - 28800000) },
  { id: "a11", type: "study", action: "Completou licao", target: "Arquitetura Transformer", time: new Date(Date.now() - 43200000) },
  { id: "a12", type: "prompt", action: "Favoritou prompt", target: "Plano de estudos personalizado", time: new Date(Date.now() - 57600000) },
  { id: "a13", type: "knowledge", action: "Visualizou", target: "Redes Neurais Explicadas", time: new Date(Date.now() - 86400000) },
  { id: "a14", type: "note", action: "Editou nota", target: "Resumo: Etica em IA", time: new Date(Date.now() - 172800000) },
  { id: "a15", type: "project", action: "Concluiu projeto", target: "Dashboard de Metricas IA", time: new Date(Date.now() - 259200000) },
]

export const initialNotes: Note[] = [
  {
    id: "n1",
    title: "Ideias para projeto de NLP",
    content: `# Ideias para Projeto de NLP

- Analisador de sentimentos para reviews em portugues
- Sumarizador de documentos juridicos
- Chatbot com RAG para documentacao interna
- Extrator de entidades nomeadas para curriculos

**Proximo passo**: Avaliar datasets disponiveis`,
    createdAt: new Date(Date.now() - 86400000),
    updatedAt: new Date(Date.now() - 7200000),
  },
  {
    id: "n2",
    title: "Resumo: Etica em IA",
    content: `# Resumo: Etica em IA

## Pontos principais
1. Vieses nos dados de treinamento sao a principal fonte de discriminacao
2. Transparencia e explicabilidade sao direitos fundamentais
3. LGPD se aplica a modelos que processam dados pessoais
4. Regulamentacao brasileira (PL 2338/2023) esta em discussao

## Reflexao
Precisamos de mais diversidade nas equipes que desenvolvem IA.`,
    createdAt: new Date(Date.now() - 172800000),
    updatedAt: new Date(Date.now() - 86400000),
  },
  {
    id: "n3",
    title: "Ferramentas para testar",
    content: `# Ferramentas para Testar

- [ ] LangChain para chain de prompts
- [ ] ChromaDB como vector store
- [ ] Ollama para rodar modelos locais
- [ ] CrewAI para multi-agentes
- [ ] Streamlit para demos rapidas

Prioridade: Ollama + LangChain para prototipo rapido`,
    createdAt: new Date(Date.now() - 259200000),
    updatedAt: new Date(Date.now() - 172800000),
  },
  {
    id: "n4",
    title: "Perguntas tecnicas para entrevista",
    content: `# Perguntas Tecnicas - Entrevista ML

## ML Basics
- Diferenca entre bias e variance
- Como lidar com dados desbalanceados
- Cross-validation: por que e importante?

## Deep Learning
- Gradient vanishing: causas e solucoes
- Batch normalization: como funciona?
- Transfer learning: quando usar?

## System Design
- Como escalaria um sistema de recomendacao?
- Pipeline de ML em producao: componentes?`,
    createdAt: new Date(Date.now() - 432000000),
    updatedAt: new Date(Date.now() - 345600000),
  },
  {
    id: "n5",
    title: "Links uteis salvos",
    content: `# Links Uteis

## Tutoriais
- Andrej Karpathy - Neural Networks Zero to Hero
- Fast.ai - Practical Deep Learning

## Artigos
- Attention Is All You Need (Transformer paper)
- BERT: Pre-training of Deep Bidirectional Transformers

## Datasets
- HuggingFace Datasets
- Kaggle Competitions

## Newsletters
- The Batch (Andrew Ng)
- Import AI (Jack Clark)`,
    createdAt: new Date(Date.now() - 604800000),
    updatedAt: new Date(Date.now() - 518400000),
  },
]
