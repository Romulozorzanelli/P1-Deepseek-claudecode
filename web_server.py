"""Servidor web do site educativo — entrada para Vercel (Python 3.12 compatível)."""

from pathlib import Path

from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from api.web_data import (
    knowledge_items,
    category_map,
    study_modules,
    prompt_collections,
    projects,
    automation_workflows,
    doc_sections,
)

app = FastAPI(title="IA para Iniciantes", version="2.0.0")

TEMPLATES_DIR = Path(__file__).parent / "templates"
STATIC_DIR = Path(__file__).parent / "static"

STATIC_DIR.mkdir(exist_ok=True)
templates = Jinja2Templates(directory=str(TEMPLATES_DIR))

app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="static")


@app.get("/")
async def home(request: Request):
    return templates.TemplateResponse("home.html", {"request": request})


@app.get("/o-que-e-ia")
async def o_que_e_ia(request: Request):
    return templates.TemplateResponse(
        "o-que-e-ia.html",
        {"request": request, "breadcrumb": "O que é IA"},
    )


@app.get("/mitos-e-verdades")
async def mitos_e_verdades(request: Request):
    return templates.TemplateResponse(
        "mitos-e-verdades.html",
        {"request": request, "breadcrumb": "Mitos e Verdades"},
    )


@app.get("/ia-como-ferramenta")
async def ia_como_ferramenta(request: Request):
    return templates.TemplateResponse(
        "ia-como-ferramenta.html",
        {"request": request, "breadcrumb": "IA como Ferramenta"},
    )


@app.get("/ias-famosas")
async def ias_famosas(request: Request):
    return templates.TemplateResponse(
        "ias-famosas.html",
        {"request": request, "breadcrumb": "IAs Famosas"},
    )


@app.get("/ia-mercado-trabalho")
async def ia_mercado_trabalho(request: Request):
    return templates.TemplateResponse(
        "ia-mercado-trabalho.html",
        {"request": request, "breadcrumb": "IA no Mercado de Trabalho"},
    )


@app.get("/conhecimento")
async def conhecimento(request: Request):
    categoria = request.query_params.get("categoria", "")
    busca = request.query_params.get("busca", "").lower()
    items = knowledge_items
    if categoria:
        items = [i for i in items if i["category"] == categoria]
    if busca:
        items = [
            i
            for i in items
            if busca in i["title"].lower()
            or busca in i["description"].lower()
            or any(busca in t.lower() for t in i["tags"])
        ]
    return templates.TemplateResponse(
        "conhecimento.html",
        {
            "request": request,
            "breadcrumb": "Base de Conhecimento",
            "items": items,
            "categorias": category_map,
            "categoria_ativa": categoria,
            "busca": busca,
        },
    )


@app.get("/conhecimento/{item_id}")
async def conhecimento_detalhe(request: Request, item_id: str):
    item = next((i for i in knowledge_items if i["id"] == item_id), None)
    if not item:
        return templates.TemplateResponse(
            "404.html",
            {"request": request, "breadcrumb": "Página não encontrada"},
            status_code=404,
        )
    cat = category_map.get(
        item["category"], {"name": item["category"], "color": "#64748b"}
    )
    return templates.TemplateResponse(
        "conhecimento-detalhe.html",
        {
            "request": request,
            "breadcrumb": item["title"],
            "item": item,
            "categoria": cat,
        },
    )


@app.get("/estudos")
async def estudos(request: Request):
    return templates.TemplateResponse(
        "estudos.html",
        {"request": request, "breadcrumb": "Área de Estudos", "modulos": study_modules},
    )


@app.get("/prompts")
async def prompts(request: Request):
    return templates.TemplateResponse(
        "prompts.html",
        {
            "request": request,
            "breadcrumb": "Biblioteca de Prompts",
            "colecoes": prompt_collections,
        },
    )


@app.get("/projetos")
async def projetos(request: Request):
    return templates.TemplateResponse(
        "projetos.html",
        {"request": request, "breadcrumb": "Projetos", "projetos": projects},
    )


@app.get("/automacao")
async def automacao(request: Request):
    return templates.TemplateResponse(
        "automacao.html",
        {
            "request": request,
            "breadcrumb": "Automação IA",
            "workflows": automation_workflows,
        },
    )


@app.get("/anotacoes")
async def anotacoes(request: Request):
    return templates.TemplateResponse(
        "anotacoes.html", {"request": request, "breadcrumb": "Anotações"}
    )


@app.get("/documentacao")
async def documentacao(request: Request):
    section_id = request.query_params.get("secao", doc_sections[0]["id"])
    page_id = request.query_params.get("pagina", doc_sections[0]["pages"][0]["id"])
    active_section = next(
        (s for s in doc_sections if s["id"] == section_id), doc_sections[0]
    )
    active_page = next(
        (p for p in active_section["pages"] if p["id"] == page_id),
        active_section["pages"][0],
    )
    return templates.TemplateResponse(
        "documentacao.html",
        {
            "request": request,
            "breadcrumb": "Documentação",
            "secoes": doc_sections,
            "secao_ativa": active_section,
            "pagina_ativa": active_page,
        },
    )


@app.get("/favoritos")
async def favoritos(request: Request):
    return templates.TemplateResponse(
        "favoritos.html", {"request": request, "breadcrumb": "Favoritos"}
    )


@app.get("/configuracoes")
async def configuracoes(request: Request):
    return templates.TemplateResponse(
        "configuracoes.html",
        {"request": request, "breadcrumb": "Configurações"},
    )
