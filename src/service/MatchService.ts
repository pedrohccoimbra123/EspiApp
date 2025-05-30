import axios from 'axios';

const API_URL = 'http://192.168.86.249:8000'; // Use a porta do servidor FastAPI, não do Expo

export const MatchService = {
    async getBestMatch(userQuery: string) {
        try {
            console.log(`[MatchService] getBestMatch chamada com query: "${userQuery}"`);
            const response = await axios.post(`${API_URL}/match`, {
                user_query: userQuery,
            });
            return response.data;
        } catch (error: any) {
            console.error('Erro ao fazer a requisição para /match:', error.message);
            throw error;
        }
    },

    async getAllItems() {
        try {
            console.log('[MatchService] getAllItems chamada');
            const response = await axios.get(`${API_URL}/items`);
            return response.data;
        } catch (error: any) {
            console.error('Erro ao fazer a requisição para /items:', error.message);
            throw error;
        }
    },
};
