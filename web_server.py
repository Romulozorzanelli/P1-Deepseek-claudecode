"""Servidor web do site educativo — entrada para Vercel (Python 3.12 compatível)."""

from pathlib import Path

from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI(title="IA para Iniciantes", version="1.0.0")

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
        {"request": request, "breadcrumb": "O que \u00e9 IA"},
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
