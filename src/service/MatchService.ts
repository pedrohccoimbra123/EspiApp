// src/services/MatchService.ts

import axios from 'axios';

interface MatchResponse {
    best_match: string;
}

export class MatchService {
    private static baseUrl = 'http://localhost:8000'; // ajuste conforme sua API

    static async getBestMatch(query: string): Promise<MatchResponse> {
        const response = await axios.post<MatchResponse>(
            `${this.baseUrl}/match`,
            { user_query: query }
        );
        return response.data;
    }
}
