import axios from 'axios';

const API_URL = 'http://localhost:8000'; // ajuste para sua URL real

export const MatchService = {
    async getBestMatch(userQuery: string) {
        console.log(`[MatchService] getBestMatch chamada com query: "${userQuery}"`); // LOG AQUI
        const response = await axios.post(`${API_URL}/match`, {
            user_query: userQuery,
        });
        return response.data;
    },

    async getAllItems() {
        console.log('[MatchService] getAllItems chamada'); // LOG AQUI
        const response = await axios.get(`${API_URL}/items`);
        return response.data;
    },
};
