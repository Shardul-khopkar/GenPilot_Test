import { useQuery } from '@tanstack/react-query';
import { analyzeSequence, AnalyzeRequest } from './api';

export const useAnalyzeSequence = (request: AnalyzeRequest, enabled = false) => {
  return useQuery({
    queryKey: ['analyze', request],
    queryFn: () => analyzeSequence(request),
    enabled,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2,
  });
};
