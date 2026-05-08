"""Rotas do site educativo IA para Iniciantes."""

from pathlib import Path

from fastapi import APIRouter, Request
from fastapi.templating import Jinja2Templates

TEMPLATES_DIR = Path(__file__).parent.parent / "templates"
templates = Jinja2Templates(directory=str(TEMPLATES_DIR))

web_router = APIRouter()


@web_router.get("/")
async def home(request: Request):
    return templates.TemplateResponse("home.html", {"request": request})


@web_router.get("/o-que-e-ia")
async def o_que_e_ia(request: Request):
    return templates.TemplateResponse(
        "o-que-e-ia.html",
        {"request": request, "breadcrumb": "O que é IA"},
    )


@web_router.get("/mitos-e-verdades")
async def mitos_e_verdades(request: Request):
    return templates.TemplateResponse(
        "mitos-e-verdades.html",
        {"request": request, "breadcrumb": "Mitos e Verdades"},
    )


@web_router.get("/ia-como-ferramenta")
async def ia_como_ferramenta(request: Request):
    return templates.TemplateResponse(
        "ia-como-ferramenta.html",
        {"request": request, "breadcrumb": "IA como Ferramenta"},
    )


@web_router.get("/ias-famosas")
async def ias_famosas(request: Request):
    return templates.TemplateResponse(
        "ias-famosas.html",
        {"request": request, "breadcrumb": "IAs Famosas"},
    )


@web_router.get("/ia-mercado-trabalho")
async def ia_mercado_trabalho(request: Request):
    return templates.TemplateResponse(
        "ia-mercado-trabalho.html",
        {"request": request, "breadcrumb": "IA no Mercado de Trabalho"},
    )
