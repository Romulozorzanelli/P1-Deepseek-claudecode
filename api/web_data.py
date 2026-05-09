"""Dados mockados para o site educativo Central de Conhecimento IA."""

knowledge_items = [
    {
        "id": "k1", "title": "O que e Inteligencia Artificial?",
        "description": "Conceitos fundamentais e definicoes de IA, abordando a diferenca entre IA fraca e forte.",
        "category": "fundamentos", "tags": ["conceitos", "definicao", "historia"],
        "difficulty": "iniciante",
        "content": """## Definicao
Inteligencia Artificial (IA) e um campo da ciencia da computacao dedicado a criar sistemas que podem realizar tarefas que normalmente exigiriam inteligencia humana.

## Tipos de IA
- IA Fraca (Narrow AI): Projetada para tarefas especificas (ex: assistentes virtuais)
- IA Geral (AGI): Capacidade de entender e realizar qualquer tarefa intelectual humana
- IA Forte: Consciencia e compreensao genuina

## Historia
O termo foi cunhado em 1956 por John McCarthy durante a conferencia de Dartmouth.""",
    },
    {
        "id": "k2", "title": "Redes Neurais Explicadas",
        "description": "Como as redes neurais artificiais se inspiram no cerebro humano para processar informacoes.",
        "category": "fundamentos", "tags": ["redes neurais", "neuronios", "arquitetura"],
        "difficulty": "intermediario",
        "content": """## Inspiracao Biologica
Redes neurais artificiais sao inspiradas no funcionamento do cerebro humano, onde neuronios se conectam via sinapses.

## Estrutura Basica
1. Camada de Entrada: Recebe os dados brutos
2. Camadas Ocultas: Processam a informacao com transformacoes matematicas
3. Camada de Saida: Produz o resultado final

## Funcionamento
Cada neuronio recebe entradas, aplica pesos, soma e passa por uma funcao de ativacao.""",
    },
    {
        "id": "k3", "title": "Machine Learning vs Programacao Tradicional",
        "description": "Diferencas fundamentais entre ensinar um computador e programa-lo com regras explicitas.",
        "category": "fundamentos", "tags": ["comparacao", "paradigmas", "aprendizado"],
        "difficulty": "iniciante",
        "content": """## Programacao Tradicional
Regras + Dados = Resultados. O programador define todas as regras explicitamente.

## Machine Learning
Dados + Resultados = Regras (Modelo). O sistema aprende padroes a partir de exemplos.""",
    },
    {
        "id": "k4", "title": "Algoritmos de Classificacao",
        "description": "Principais algoritmos para classificar dados em categorias pre-definidas.",
        "category": "machine-learning", "tags": ["classificacao", "algoritmos", "supervisionado"],
        "difficulty": "intermediario",
        "content": """## Principais Algoritmos
- Regressao Logistica: Simples e eficaz para problemas binarios
- Arvores de Decisao: Interpretaveis e faceis de visualizar
- Random Forest: Conjunto de arvores para melhor performance
- SVM: Eficiente em espacos de alta dimensionalidade

## Metricas de Avaliacao
Acuracia, Precisao, Recall, F1-Score.""",
    },
    {
        "id": "k5", "title": "Regressao e Predicao",
        "description": "Tecnicas de machine learning para prever valores numericos continuos.",
        "category": "machine-learning", "tags": ["regressao", "predicao", "supervisionado"],
        "difficulty": "intermediario",
        "content": """## Tipos de Regressao
- Linear: Relacao linear entre variaveis
- Polinomial: Captura relacoes nao-lineares
- Ridge/Lasso: Com regularizacao para evitar overfitting

## Aplicacoes
Previsao de precos, estimativa de demanda, analise de tendencias.""",
    },
    {
        "id": "k6", "title": "Aprendizado Supervisionado vs Nao-Supervisionado",
        "description": "Dois paradigmas fundamentais de aprendizado de maquina e quando usar cada um.",
        "category": "machine-learning", "tags": ["paradigmas", "supervisionado", "clusterizacao"],
        "difficulty": "iniciante",
        "content": """## Aprendizado Supervisionado
Dados possuem rotulos. Objetivo: prever rotulos para novos dados. Ex: Classificacao de emails como spam.

## Aprendizado Nao-Supervisionado
Dados nao possuem rotulos. Objetivo: encontrar padroes ocultos. Ex: Segmentacao de clientes.""",
    },
    {
        "id": "k7", "title": "Deep Learning e Redes Profundas",
        "description": "Arquiteturas avancadas de redes neurais com multiplas camadas de processamento.",
        "category": "deep-learning", "tags": ["redes profundas", "arquitetura", "GPU"],
        "difficulty": "avancado",
        "content": """## O que torna \"profundo\"
Multiplas camadas ocultas que aprendem hierarquias de caracteristicas, de simples a complexas.

## Arquiteturas Principais
- CNN: Redes Convolucionais para imagens
- RNN/LSTM: Para sequencias e series temporais
- Transformers: Atualmente dominam NLP e visao
- GANs: Redes generativas adversariais.""",
    },
    {
        "id": "k8", "title": "CNNs e Visao Computacional",
        "description": "Como redes neurais convolucionais revolucionaram o processamento de imagens.",
        "category": "deep-learning", "tags": ["CNN", "visao computacional", "imagens"],
        "difficulty": "avancado",
        "content": """## Componentes de uma CNN
- Convolucao: Filtros que detectam padroes locais
- Pooling: Reduz dimensionalidade mantendo informacao importante
- Flatten + Dense: Classificacao final

## Aplicacoes
Reconhecimento facial, diagnostico medico por imagem, veiculos autonomos.""",
    },
    {
        "id": "k9", "title": "Transfer Learning",
        "description": "Tecnica que reutiliza modelos pre-treinados para novas tarefas com menos dados.",
        "category": "deep-learning", "tags": ["transfer learning", "fine-tuning", "pre-treinamento"],
        "difficulty": "intermediario",
        "content": """## Conceito
Reaproveitar um modelo treinado em uma tarefa grande para uma tarefa especifica com poucos dados.

## Vantagens
Menor necessidade de dados rotulados, treinamento mais rapido, melhor performance.

## Fine-Tuning
Ajuste fino das ultimas camadas do modelo pre-treinado para a nova tarefa.""",
    },
    {
        "id": "k10", "title": "O que sao Large Language Models?",
        "description": "Modelos de linguagem em larga escala como GPT, Claude e Gemini explicados.",
        "category": "llms", "tags": ["LLM", "GPT", "transformers"],
        "difficulty": "intermediario",
        "content": """## Definicao
LLMs sao modelos de IA treinados em enormes quantidades de texto para entender e gerar linguagem natural.

## Caracteristicas
- Bilhoes de parametros
- Treinados em datasets massivos (livros, web, codigo)
- Arquitetura Transformer (attention mechanism)

## Principais Modelos
GPT-4 (OpenAI), Claude (Anthropic), Gemini (Google), Llama (Meta).""",
    },
    {
        "id": "k11", "title": "Tokens e Contexto",
        "description": "Entenda o que sao tokens e como a janela de contexto afeta o processamento de LLMs.",
        "category": "llms", "tags": ["tokens", "contexto", "limites"],
        "difficulty": "iniciante",
        "content": """## Tokens
Unidade basica de processamento de texto. 1 token ~= 4 caracteres em portugues.

## Janela de Contexto
Quantidade maxima de tokens que o modelo \"lembra\". Modelos modernos: 128K a 1M tokens.""",
    },
    {
        "id": "k12", "title": "Prompt Engineering",
        "description": "Tecnicas avancadas para criar prompts eficazes e obter melhores resultados de LLMs.",
        "category": "llms", "tags": ["prompts", "engenharia", "otimizacao"],
        "difficulty": "intermediario",
        "content": """## Tecnicas Fundamentais
- Zero-shot: Pedir direto sem exemplos
- Few-shot: Fornecer alguns exemplos
- Chain-of-Thought: Pedir raciocinio passo a passo
- Role Prompting: Atribuir um papel ao modelo

## Boas Praticas
Seja claro e especifico, forneca contexto relevante, especifique formato de saida.""",
    },
    {
        "id": "k13", "title": "Vieses em Modelos de IA",
        "description": "Como vieses humanos podem ser amplificados por sistemas de IA e como mitiga-los.",
        "category": "etica", "tags": ["vies", "justica", "equidade"],
        "difficulty": "intermediario",
        "content": """## Origem dos Vieses
Dados de treinamento enviesados, selecao de features problematicas, feedback loops.

## Tipos Comuns
Vies de genero, vies racial, vies socioeconomico.

## Mitigacao
Auditar datasets, equipes diversas, testes de equidade.""",
    },
    {
        "id": "k14", "title": "Privacidade e Protecao de Dados",
        "description": "Desafios de privacidade no treinamento e uso de modelos de IA.",
        "category": "etica", "tags": ["privacidade", "LGPD", "dados pessoais"],
        "difficulty": "iniciante",
        "content": """## Desafios
Modelos podem memorizar dados de treinamento. Risco de extracao de informacoes pessoais.

## LGPD e IA
Direito a explicacao de decisoes automatizadas. Necessidade de base legal para tratamento.""",
    },
    {
        "id": "k15", "title": "Regulamentacao de IA no Brasil",
        "description": "Panorama atual da legislacao brasileira sobre inteligencia artificial.",
        "category": "etica", "tags": ["regulamentacao", "Brasil", "legislacao"],
        "difficulty": "intermediario",
        "content": """## Marco Legal
O projeto de lei (PL 2338/2023) estabelece principios para desenvolvimento e uso de IA no Brasil.

## Principios
Transparencia, nao discriminacao, supervisao humana, responsabilizacao.""",
    },
    {
        "id": "k16", "title": "IA na Saude",
        "description": "Aplicacoes de IA em diagnostico medico, descoberta de medicamentos e gestao hospitalar.",
        "category": "aplicacoes", "tags": ["saude", "medicina", "diagnostico"],
        "difficulty": "intermediario",
        "content": """## Aplicacoes Principais
- Diagnostico por Imagem: Deteccao de tumores, fraturas
- Descoberta de Farmacos: Predicao de moleculas candidatas
- Medicina Personalizada: Tratamentos baseados em perfil genetico""",
    },
    {
        "id": "k17", "title": "IA Generativa para Criacao de Conteudo",
        "description": "Como IA esta transformando a criacao de textos, imagens, musica e videos.",
        "category": "aplicacoes", "tags": ["generativa", "conteudo", "criatividade"],
        "difficulty": "iniciante",
        "content": """## Modalidades
- Texto: Artigos, roteiros, poesia
- Imagem: Ilustracoes, design, fotografia
- Audio: Musica, voice-over, podcasts
- Video: Animacoes, edicao, efeitos

## Ferramentas
DALL-E, Midjourney, Stable Diffusion, Runway, Suno AI, ElevenLabs.""",
    },
    {
        "id": "k18", "title": "IA no Mercado Financeiro",
        "description": "Aplicacoes de IA em analise de risco, trading algoritmico e deteccao de fraudes.",
        "category": "aplicacoes", "tags": ["financas", "trading", "risco"],
        "difficulty": "avancado",
        "content": """## Aplicacoes
- Trading Algoritmico: Decisoes em millisegundos
- Analise de Risco: Predicao de inadimplencia
- Deteccao de Fraude: Identificacao de transacoes suspeitas
- Robo-advisors: Consultoria automatizada""",
    },
]

# Map category to readable name and color
category_map = {
    "fundamentos": {"name": "Fundamentos de IA", "color": "#4f46e5"},
    "machine-learning": {"name": "Machine Learning", "color": "#059669"},
    "deep-learning": {"name": "Deep Learning", "color": "#7c3aed"},
    "llms": {"name": "LLMs", "color": "#d97706"},
    "etica": {"name": "Etica em IA", "color": "#e11d48"},
    "aplicacoes": {"name": "Aplicacoes", "color": "#0891b2"},
}

study_modules = [
    {
        "id": "m1", "title": "Fundamentos de IA",
        "description": "Conceitos basicos e historia da inteligencia artificial.",
        "progress": 60, "estimated_time": "2h 30min",
        "lessons": [
            {"title": "O que e IA?", "duration": "15min", "completed": True},
            {"title": "Historia da IA", "duration": "20min", "completed": True},
            {"title": "Tipos de IA", "duration": "15min", "completed": True},
            {"title": "IA no dia a dia", "duration": "25min", "completed": False},
            {"title": "Futuro da IA", "duration": "20min", "completed": False},
        ],
    },
    {
        "id": "m2", "title": "Machine Learning Basico",
        "description": "Aprendizado supervisionado, nao-supervisionado e algoritmos classicos.",
        "progress": 40, "estimated_time": "3h 15min",
        "lessons": [
            {"title": "Tipos de aprendizado", "duration": "20min", "completed": True},
            {"title": "Regressao linear", "duration": "30min", "completed": True},
            {"title": "Arvores de decisao", "duration": "25min", "completed": False},
            {"title": "Metricas de avaliacao", "duration": "25min", "completed": False},
            {"title": "Overfitting e underfitting", "duration": "20min", "completed": False},
        ],
    },
    {
        "id": "m3", "title": "Deep Learning",
        "description": "Redes neurais profundas, CNNs, RNNs e arquiteturas modernas.",
        "progress": 25, "estimated_time": "4h",
        "lessons": [
            {"title": "Neuronios e camadas", "duration": "30min", "completed": True},
            {"title": "Funcoes de ativacao", "duration": "25min", "completed": False},
            {"title": "CNNs para visao", "duration": "35min", "completed": False},
            {"title": "Treinamento e backpropagation", "duration": "40min", "completed": False},
            {"title": "Frameworks (PyTorch/TF)", "duration": "30min", "completed": False},
        ],
    },
    {
        "id": "m4", "title": "Large Language Models",
        "description": "Arquitetura transformer, fine-tuning, RAG e agentes.",
        "progress": 50, "estimated_time": "3h",
        "lessons": [
            {"title": "Arquitetura Transformer", "duration": "35min", "completed": True},
            {"title": "Mecanismo de atencao", "duration": "30min", "completed": True},
            {"title": "Fine-tuning e LoRA", "duration": "25min", "completed": False},
            {"title": "RAG e embeddings", "duration": "30min", "completed": False},
        ],
    },
    {
        "id": "m5", "title": "Etica e Responsabilidade em IA",
        "description": "Vieses, privacidade, transparencia e regulamentacao.",
        "progress": 30, "estimated_time": "2h",
        "lessons": [
            {"title": "Vieses algoritmicos", "duration": "25min", "completed": True},
            {"title": "Privacidade e dados", "duration": "20min", "completed": False},
            {"title": "Transparencia e explicabilidade", "duration": "25min", "completed": False},
            {"title": "Regulamentacao global", "duration": "25min", "completed": False},
        ],
    },
    {
        "id": "m6", "title": "IA Aplicada",
        "description": "Casos reais de IA em saude, financas, educacao e industria.",
        "progress": 15, "estimated_time": "2h 30min",
        "lessons": [
            {"title": "IA na saude", "duration": "25min", "completed": False},
            {"title": "IA em financas", "duration": "25min", "completed": True},
            {"title": "IA na educacao", "duration": "20min", "completed": False},
            {"title": "IA na industria", "duration": "25min", "completed": False},
            {"title": "Startups e inovacao", "duration": "20min", "completed": False},
        ],
    },
]

prompt_collections = [
    {
        "id": "pc1", "name": "Texto e Redacao", "description": "Prompts para geracao e aprimoramento de textos.",
        "category": "texto",
        "prompts": [
            {"id": "p1", "title": "Resumo de artigo", "description": "Gera um resumo conciso de qualquer texto mantendo os pontos principais.", "prompt": "Resuma o seguinte texto em 3 paragrafos, destacando: (1) ideia principal, (2) argumentos-chave e (3) conclusao.", "tags": ["resumo", "texto", "estudo"]},
            {"id": "p2", "title": "Correcao gramatical", "description": "Revisa e corrige gramatica, ortografia e estilo de textos.", "prompt": "Revise o texto abaixo corrigindo erros gramaticais, ortograficos e de estilo. Sugira melhorias de clareza.", "tags": ["correcao", "gramatica", "revisao"]},
            {"id": "p3", "title": "Gerador de ideias criativas", "description": "Brainstorming estruturado para gerar ideias criativas.", "prompt": "Atue como facilitador de brainstorming. Gere 10 ideias criativas e inovadoras sobre [TEMA]. Para cada ideia: nome, descricao, viabilidade.", "tags": ["brainstorming", "criatividade", "ideias"]},
            {"id": "p4", "title": "Traducao contextual", "description": "Traducao mantendo contexto cultural e tom do texto original.", "prompt": "Traduza o seguinte texto de [ORIGEM] para [DESTINO]. Mantenha tom, contexto cultural e estilo do original.", "tags": ["traducao", "localizacao", "idiomas"]},
        ],
    },
    {
        "id": "pc2", "name": "Programacao", "description": "Prompts para desenvolvimento de software e resolucao de problemas.",
        "category": "programacao",
        "prompts": [
            {"id": "p5", "title": "Code review", "description": "Analise de codigo com sugestoes de melhoria.", "prompt": "Revise o seguinte codigo [LINGUAGEM] identificando: bugs, melhorias de performance, violacoes de boas praticas.", "tags": ["code-review", "qualidade", "debug"]},
            {"id": "p6", "title": "Gerador de API", "description": "Gera endpoints REST API com validacao e documentacao.", "prompt": "Gere uma API REST em [LINGUAGEM/FRAMEWORK] com: CRUD completo, validacao, tratamento de erros, documentacao.", "tags": ["API", "REST", "backend"]},
            {"id": "p7", "title": "Explicador de codigo", "description": "Explica codigo complexo linha por linha.", "prompt": "Explique o seguinte codigo linha por linha. Inclua: proposito de cada bloco, estruturas de dados e fluxo de execucao.", "tags": ["explicacao", "aprendizado", "codigo"]},
            {"id": "p8", "title": "Refatoracao de codigo", "description": "Sugere refatoracoes seguindo principios SOLID.", "prompt": "Refatore o codigo aplicando principios SOLID e clean code. Para cada mudanca explique: problema, solucao, beneficio.", "tags": ["refatoracao", "SOLID", "clean-code"]},
        ],
    },
    {
        "id": "pc3", "name": "Analise de Dados", "description": "Prompts para analise, visualizacao e interpretacao de dados.",
        "category": "dados",
        "prompts": [
            {"id": "p9", "title": "Analise exploratoria", "description": "Roteiro completo para analise exploratoria de dados.", "prompt": "Realize analise exploratoria do dataset. Inclua: estatisticas descritivas, distribuicoes, correlacoes, insights.", "tags": ["EDA", "estatistica", "insights"]},
            {"id": "p10", "title": "Visualizacao de dados", "description": "Sugestoes de visualizacoes efetivas.", "prompt": "Sugira as 5 melhores visualizacoes para os dados. Para cada uma: tipo de grafico, porque e adequado, codigo Python.", "tags": ["visualizacao", "graficos", "storytelling"]},
            {"id": "p11", "title": "Query SQL natural", "description": "Converte descricao em linguagem natural para SQL.", "prompt": "Converta a seguinte descricao em query SQL otimizada. Inclua indices sugeridos.", "tags": ["SQL", "banco de dados", "query"]},
            {"id": "p12", "title": "Interpretacao de metricas", "description": "Analisa metricas de negocio e sugere acoes.", "prompt": "Analise as metricas [METRICAS] e responda: saude geral, tendencias, oportunidades, recomendacoes priorizadas.", "tags": ["metricas", "BI", "decisao"]},
        ],
    },
    {
        "id": "pc4", "name": "Criatividade", "description": "Prompts para geracao de conteudo criativo e artistico.",
        "category": "criatividade",
        "prompts": [
            {"id": "p13", "title": "Storytelling de marca", "description": "Cria narrativas envolventes para marcas.", "prompt": "Crie uma historia de marca para [MARCA]. Estrutura: origem, desafio superado, missao, visao de futuro.", "tags": ["storytelling", "branding", "marketing"]},
            {"id": "p14", "title": "Gerador de titulos", "description": "Gera titulos magneticos para conteudo.", "prompt": "Gere 15 titulos magneticos para [TIPO_DE_CONTEUDO] sobre [TEMA]. Varie entre: listas, como-fazer, perguntas, controversos.", "tags": ["titulos", "copywriting", "engajamento"]},
            {"id": "p15", "title": "Roteiro para video", "description": "Estrutura completa de roteiro para videos educativos.", "prompt": "Crie roteiro para video educativo de [DURACAO] sobre [TEMA]. Estrutura: hook, introducao, 3 atos, CTA. Inclua sugestoes visuais.", "tags": ["video", "roteiro", "conteudo"]},
            {"id": "p16", "title": "Dialogo entre personagens", "description": "Cria dialogos naturais entre personagens ficticios.", "prompt": "Escreva um dialogo entre [PERSONAGEM_A] e [PERSONAGEM_B] discutindo [TEMA]. Cada personagem com voz propria.", "tags": ["dialogo", "ficcao", "narrativa"]},
        ],
    },
    {
        "id": "pc5", "name": "Produtividade", "description": "Prompts para organizacao, planejamento e eficiencia pessoal.",
        "category": "produtividade",
        "prompts": [
            {"id": "p17", "title": "Plano de estudos personalizado", "description": "Cria plano de estudos adaptado ao seu objetivo.", "prompt": "Crie um plano de estudos de [DURACAO] para aprender [TEMA]. Inclua: marco semanal, recursos, projetos praticos.", "tags": ["estudos", "planejamento", "aprendizado"]},
            {"id": "p18", "title": "Decomposicao de tarefas", "description": "Quebra grandes objetivos em tarefas pequenas.", "prompt": "Decomponha o objetivo [OBJETIVO] em tarefas SMART: Especificas, Mensuraveis, Atingiveis, Relevantes, Temporais.", "tags": ["tarefas", "objetivos", "SMART"]},
            {"id": "p19", "title": "Resumo de reuniao", "description": "Template estruturado para resumir reunioes.", "prompt": "Resuma a reuniao no formato: participantes, topicos, decisoes, acoes pendentes com responsaveis e prazos.", "tags": ["reuniao", "atas", "organizacao"]},
            {"id": "p20", "title": "Template de documentacao", "description": "Gera templates de documentacao tecnica.", "prompt": "Gere template de documentacao para [TIPO]. Inclua: overview, instalacao, uso basico, API reference, troubleshooting. Markdown.", "tags": ["documentacao", "template", "markdown"]},
        ],
    },
]

projects = [
    {
        "id": "proj1", "title": "Chatbot de Suporte", "description": "Chatbot inteligente para suporte ao cliente usando RAG.",
        "status": "progresso", "color": "#4f46e5", "due_date": "15/06/2025",
        "tasks": [
            {"title": "Coletar documentacao de suporte", "completed": True},
            {"title": "Configurar vector database", "completed": True},
            {"title": "Implementar pipeline RAG", "completed": False},
            {"title": "Testar respostas do chatbot", "completed": False},
            {"title": "Integrar com Slack/Teams", "completed": False},
        ],
    },
    {
        "id": "proj2", "title": "Analise de Sentimentos", "description": "Modelo de NLP para analise de sentimentos de avaliacoes.",
        "status": "backlog", "color": "#059669", "due_date": "30/06/2025",
        "tasks": [
            {"title": "Coletar dataset de avaliacoes", "completed": False},
            {"title": "Pre-processar texto em portugues", "completed": False},
            {"title": "Testar modelos (BERT vs LLM)", "completed": False},
            {"title": "Criar dashboard de resultados", "completed": False},
        ],
    },
    {
        "id": "proj3", "title": "Recomendador de Conteudo", "description": "Sistema de recomendacao hibrido.",
        "status": "progresso", "color": "#7c3aed", "due_date": "20/06/2025",
        "tasks": [
            {"title": "Analisar dados de interacao", "completed": True},
            {"title": "Implementar collaborative filtering", "completed": True},
            {"title": "Criar embeddings de conteudo", "completed": False},
            {"title": "Combinar modelos hibridos", "completed": False},
            {"title": "Teste A/B com usuarios", "completed": False},
        ],
    },
    {
        "id": "proj4", "title": "Dashboard de Metricas IA", "description": "Painel executivo com metricas de performance de modelos.",
        "status": "concluido", "color": "#d97706", "due_date": "10/05/2025",
        "tasks": [
            {"title": "Definir KPIs relevantes", "completed": True},
            {"title": "Conectar fontes de dados", "completed": True},
            {"title": "Criar visualizacoes", "completed": True},
            {"title": "Configurar alertas", "completed": True},
        ],
    },
    {
        "id": "proj5", "title": "Finetuning de LLM", "description": "Fine-tuning de modelo open-source para dominio juridico.",
        "status": "backlog", "color": "#e11d48", "due_date": "15/07/2025",
        "tasks": [
            {"title": "Coletar corpus juridico", "completed": False},
            {"title": "Preparar dataset instrucao-resposta", "completed": False},
            {"title": "Configurar LoRA fine-tuning", "completed": False},
            {"title": "Avaliar qualidade das respostas", "completed": False},
            {"title": "Deploy do modelo", "completed": False},
        ],
    },
    {
        "id": "proj6", "title": "Automacao de Documentos", "description": "Pipeline de extracao e classificacao de documentos fiscais.",
        "status": "concluido", "color": "#0891b2", "due_date": "01/05/2025",
        "tasks": [
            {"title": "OCR de documentos escaneados", "completed": True},
            {"title": "Classificacao por tipo de documento", "completed": True},
            {"title": "Extracao de campos-chave", "completed": True},
        ],
    },
]

automation_workflows = [
    {"id": "aw1", "title": "Resumo Diario de Noticias", "description": "Coleta noticias de feeds RSS e gera resumo executivo todo dia as 8h.", "trigger": "Agendamento diario as 8:00", "action": "Scrape RSS -> LLM resume -> Envia email", "active": True},
    {"id": "aw2", "title": "Classificador de Emails", "description": "Classifica emails recebidos por urgencia e topico usando IA.", "trigger": "Novo email recebido", "action": "Analisa conteudo -> Classifica -> Adiciona tag -> Move para pasta", "active": True},
    {"id": "aw3", "title": "Moderacao de Comentarios", "description": "Analisa e aprova/rejeita automaticamente comentarios em blog.", "trigger": "Novo comentario postado", "action": "Analisa toxidade -> Aprova/Sinaliza/Rejeita -> Notifica admin", "active": True},
    {"id": "aw4", "title": "Gerador de Relatorio Semanal", "description": "Compila metricas e gera relatorio em PDF todo domingo.", "trigger": "Agendamento semanal (domingo 18:00)", "action": "Coleta metricas -> Gera graficos -> Monta PDF -> Envia Slack", "active": False},
    {"id": "aw5", "title": "Tradutor de Conteudo", "description": "Traduz automaticamente posts do blog para ingles e espanhol.", "trigger": "Novo post publicado", "action": "Detecta novo post -> Traduz (LLM) -> Publica versao traduzida", "active": False},
    {"id": "aw6", "title": "Monitor de Mencoes", "description": "Monitora mencoes da marca em redes sociais e gera alertas.", "trigger": "Nova mencao detectada", "action": "Coleta mencao -> Analisa sentimento -> Se negativo, alerta no Slack", "active": True},
]

doc_sections = [
    {
        "id": "ds1", "title": "Guia de Inicio", "icon": "rocket",
        "pages": [
            {"id": "dp1", "title": "Bem-vindo a Central de Conhecimento IA", "content": "Esta plataforma foi criada para centralizar seus estudos, projetos e recursos de Inteligencia Artificial.\n\n## O que voce encontra aqui\n\n- Base de Conhecimento: Artigos e referencias sobre IA\n- Area de Estudos: Modulos estruturados de aprendizado\n- Biblioteca de Prompts: Colecoes de prompts prontos\n- Projetos: Kanban para gerenciar seus projetos de IA\n- Automacao: Workflows pre-configurados\n- Anotacoes: Bloco de notas com suporte a markdown\n\nNavegue pelo menu para explorar cada secao."},
            {"id": "dp2", "title": "Primeiros Passos", "content": "## 1. Explore a Base de Conhecimento\n\nComece navegando pelos artigos categorizados na secao Conhecimento.\n\n## 2. Inicie um Modulo de Estudo\n\nEscolha um modulo na Area de Estudos que corresponda ao seu nivel.\n\n## 3. Salve seus Favoritos\n\nMarque itens favoritos clicando no botao de favoritar.\n\n## 4. Configure seu Perfil\n\nAcesse Configuracoes para personalizar o tema."},
            {"id": "dp3", "title": "FAQ", "content": "## Os dados sao salvos?\n\nSim. Favoritos sao persistidos localmente via localStorage.\n\n## Posso contribuir com conteudo?\n\nPor enquanto o conteudo e mockado. Futuramente teremos sistema de contribuicao."},
        ],
    },
    {
        "id": "ds2", "title": "Recursos", "icon": "book",
        "pages": [
            {"id": "dp4", "title": "Glossario de IA", "content": "**AGI**: Inteligencia Artificial Geral - IA com capacidade cognitiva humana\n\n**CNN**: Rede Neural Convolucional - especializada em imagens\n\n**Embedding**: Representacao vetorial de dados em espaco multidimensional\n\n**Fine-tuning**: Ajuste fino de modelo pre-treinado\n\n**LLM**: Large Language Model - modelo de linguagem de grande escala\n\n**RAG**: Retrieval-Augmented Generation - busca + geracao\n\n**Token**: Unidade basica de processamento de texto em LLMs"},
            {"id": "dp5", "title": "Ferramentas Recomendadas", "content": "## Desenvolvimento\n\n- Python: Linguagem principal para ML e IA\n- Jupyter Notebook: Ambiente interativo\n- VS Code: Editor com excelentes extensoes\n\n## Frameworks\n\n- PyTorch: Framework flexivel de deep learning\n- Hugging Face: Biblioteca de modelos pre-treinados\n- LangChain: Framework para aplicacoes com LLMs"},
        ],
    },
    {
        "id": "ds3", "title": "Roadmaps", "icon": "map",
        "pages": [
            {"id": "dp6", "title": "Roadmap: Engenheiro de ML", "content": "## Fase 1: Fundamentos (2-3 meses)\n\n- Python avancado (NumPy, Pandas)\n- Estatistica e probabilidade\n- Algebra linear\n\n## Fase 2: ML Basico (2-3 meses)\n\n- Scikit-learn\n- Algoritmos de classificacao e regressao\n- Avaliacao de modelos\n\n## Fase 3: Deep Learning (3-4 meses)\n\n- PyTorch ou TensorFlow\n- CNNs, RNNs, Transformers\n- MLOps e deploy"},
            {"id": "dp7", "title": "Roadmap: Prompt Engineer", "content": "## Fase 1: Conceitos (1 mes)\n\n- Como LLMs funcionam\n- Tokenizacao e contexto\n- Principais modelos do mercado\n\n## Fase 2: Tecnicas (2 meses)\n\n- Zero-shot, Few-shot\n- Chain-of-Thought\n- Role prompting\n- Prompt templates\n\n## Fase 3: Avancado (3 meses)\n\n- Construcao de agentes\n- RAG e knowledge bases\n- Avaliacao de prompts"},
        ],
    },
]
