import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { setChallenges, setLoading, setError } from '@/store/slices/challengeSlice';
import apiClient from '@/services/api';
import { Challenge } from '@/store/slices/challengeSlice';

// Example of a TypeScript component using the new stack

interface ChallengeListProps {
  category?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

const ChallengeList: React.FC<ChallengeListProps> = ({ category, difficulty }) => {
  // Redux state and dispatch
  const dispatch = useAppDispatch();
  const { challenges, loading, error } = useAppSelector(state => state.challenge);
  const [filteredChallenges, setFilteredChallenges] = useState<Challenge[]>([]);

  // Fetch challenges from API
  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        dispatch(setLoading(true));
        
        // Using Axios HTTP client
        const response = await apiClient.get<Challenge[]>('/api/challenges', {
          params: { category, difficulty }
        });
        
        dispatch(setChallenges(response.data));
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch challenges';
        dispatch(setError(errorMessage));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchChallenges();
  }, [dispatch, category, difficulty]);

  // Filter challenges based on props
  useEffect(() => {
    let filtered = [...challenges];
    
    if (category) {
      filtered = filtered.filter(c => c.category === category);
    }
    
    if (difficulty) {
      filtered = filtered.filter(c => c.difficulty === difficulty);
    }
    
    setFilteredChallenges(filtered);
  }, [challenges, category, difficulty]);

  // Render loading state
  if (loading) {
    return <div>Loading challenges...</div>;
  }

  // Render error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render challenges
  return (
    <div className="challenge-list">
      <h2>Challenges ({filteredChallenges.length})</h2>
      {filteredChallenges.map((challenge) => (
        <div key={challenge.id} className="challenge-item">
          <h3>{challenge.title}</h3>
          <p>{challenge.description}</p>
          <span className={`difficulty ${challenge.difficulty}`}>
            {challenge.difficulty}
          </span>
          <span className="points">{challenge.points} points</span>
        </div>
      ))}
    </div>
  );
};

export default ChallengeList;
