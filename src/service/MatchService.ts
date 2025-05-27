// src/service/MatchService.ts
import axios from 'axios';

const API_URL = 'http://localhost:8000'; // ajuste para sua URL real

export const MatchService = {
    async getBestMatch(userQuery: string) {
        const response = await axios.post(`${API_URL}/match`, {
            user_query: userQuery,
        });
        return response.data;
    },

    async getAllItems() {
        // Assumindo que seu backend tenha esse endpoint para listar todos os locais
        const response = await axios.get(`${API_URL}/items`);
        return response.data;
    },
};
