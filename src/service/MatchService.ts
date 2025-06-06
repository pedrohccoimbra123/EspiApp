import axios from 'axios';

const API_URL = 'http://172.30.43.186:8000'; // Use a porta do servidor FastAPI, não do Expo

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
};
