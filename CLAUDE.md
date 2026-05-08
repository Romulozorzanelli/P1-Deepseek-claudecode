IMPORTANT: Ensure you've thoroughly reviewed the [AGENTS.md](AGENTS.md) file before beginning any work.

## USER PREFERENCES

- **Idioma**: SEMPRE falar em português brasileiro com o usuário. Ele não entende inglês.
- **Git**: SEMPRE perguntar antes de fazer commit ou push. NUNCA commitar sem autorização explícita.
- **Repositório remoto**: `https://github.com/Romulozorzanelli/P1-Deepseek-claudecode.git` (NÃO é Alishahryar1/free-claude-code).
- **Tom**: Direto e prático. O usuário não quer rodeios nem explicações longas.

## PROJECT CONTEXT

- Este é um projeto **Python 3.14 + FastAPI** (proxy Claude Code para provedores LLM).
- **Site educativo**: Implementado com Jinja2 + FastAPI. Templates em `/templates/`, CSS em `/static/`, rotas em `api/web_routes.py`.
- **Páginas do site**: Home (`/`), O que é IA, Mitos e Verdades, IA como Ferramenta, IAs Famosas, IA no Mercado de Trabalho.
- **Conteúdo em português brasileiro**, focado em iniciantes.
- O site **NÃO está online**. Precisa de deploy. O servidor roda com `uv run uvicorn server:app --host 0.0.0.0 --port 8082`.
- Python 3.14 suporta `except TypeError, ValueError:` (sem parênteses). NÃO "corrigir" isso.

## DEPLOY STATUS

- Código no GitHub: sim (push feito para origin)
- **Vercel**: Configurado. Arquivos: `vercel.json`, `web_server.py`, `requirements-vercel.txt`.
- Para deploy: conectar repo no dashboard da Vercel e publicar.