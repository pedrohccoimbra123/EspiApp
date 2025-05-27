from fastapi import FastAPI, Query
from pydantic import BaseModel
import requests
import json

# 🚀 Inicializa o app FastAPI
app = FastAPI()

# 📄 Carrega os dados do JSON na inicialização
with open("local_data.json", "r", encoding="utf-8") as file:
    items = json.load(file)


# 🏗️ Função para gerar o prompt
def build_prompt(user_query, items):
    prompt = "Considere os seguintes locais em Belém. Qual deles melhor corresponde ao que o usuário está procurando? Retorne o ID do local.\n\n"
    for i, item in enumerate(items, 1):
        prompt += (
            f"{i}. {item['title']} - {item['description']} {item['imageText']}\n\n"
        )
    prompt += f"O usuário diz: '{user_query}'\n\nResponda apenas com o título do local mais adequado."
    return prompt


# 🎯 Modelo de input da API
class QueryRequest(BaseModel):
    user_query: str


# 🧠 Endpoint principal
@app.post("/match")
def match_location(request: QueryRequest):
    prompt = build_prompt(request.user_query, items)

    ollama_payload = {"model": "llama3", "prompt": prompt, "stream": False}

    try:
        response = requests.post(
            "http://localhost:11434/api/generate", json=ollama_payload
        )
        response.raise_for_status()

        result = response.json()
        reply = result["response"].strip()

        return {"best_match": reply}

    except requests.exceptions.RequestException as e:
        return {"error": str(e)}