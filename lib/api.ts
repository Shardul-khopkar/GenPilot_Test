import axios, { AxiosInstance } from 'axios';

const apiBaseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
const apiTimeout = parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || '30000');

const api: AxiosInstance = axios.create({
  baseURL: apiBaseURL,
  timeout: apiTimeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface AnalyzeRequest {
  sequence: string;
  organism: string;
  build: 'hg19' | 'hg38';
  protein?: string;
}

export interface AnalyzeResponse {
  hg38: string;
  hg19: string;
  strand: '+' | '-';
  pam: boolean;
  gene: string;
  confidence: number;
  timestamp?: string;
}

export const analyzeSequence = async (req: AnalyzeRequest): Promise<AnalyzeResponse> => {
  try {
    const response = await api.post('/api/analyze', req);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('API Error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.detail || 'Failed to analyze sequence');
    }
    throw error;
  }
};

export default api;
