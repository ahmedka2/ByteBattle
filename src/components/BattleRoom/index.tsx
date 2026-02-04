import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { setConnected, setCurrentBattle, updateBattle } from '@/store/slices/battleSlice';
import { initializeSocket, disconnectSocket } from '@/services/socket';
import { Battle } from '@/store/slices/battleSlice';

// Example of Socket.io integration with Redux

interface BattleRoomProps {
  battleId: string;
}

const BattleRoom: React.FC<BattleRoomProps> = ({ battleId }) => {
  const dispatch = useAppDispatch();
  const { currentBattle, connected } = useAppSelector(state => state.battle);
  const user = useAppSelector(state => state.user.currentUser);

  useEffect(() => {
    // Initialize Socket.io connection
    const socket = initializeSocket();
    dispatch(setConnected(true));

    // Join battle room
    socket.emit('join-battle', { battleId, userId: user?.id });

    // Listen for battle updates
    socket.on('battle-update', (data: Battle) => {
      console.log('Battle updated:', data);
      dispatch(updateBattle(data));
    });

    // Listen for battle start
    socket.on('battle-started', (data: Battle) => {
      console.log('Battle started:', data);
      dispatch(setCurrentBattle(data));
    });

    // Listen for participant joined
    socket.on('participant-joined', (data: { battleId: string; userId: string }) => {
      console.log('Participant joined:', data);
      // Handle participant joined
    });

    // Listen for code submissions
    socket.on('code-submitted', (data: { userId: string; code: string; timestamp: string }) => {
      console.log('Code submitted by:', data.userId);
      // Handle code submission
    });

    // Cleanup on unmount
    return () => {
      socket.emit('leave-battle', { battleId, userId: user?.id });
      socket.off('battle-update');
      socket.off('battle-started');
      socket.off('participant-joined');
      socket.off('code-submitted');
      disconnectSocket();
      dispatch(setConnected(false));
    };
  }, [battleId, dispatch, user?.id]);

  // Send code submission
  const submitCode = (code: string) => {
    const socket = initializeSocket();
    socket.emit('submit-code', {
      battleId,
      userId: user?.id,
      code,
      timestamp: new Date().toISOString()
    });
  };

  return (
    <div className="battle-room">
      <h2>Battle Room</h2>
      <div className="connection-status">
        Status: {connected ? '🟢 Connected' : '🔴 Disconnected'}
      </div>
      {currentBattle && (
        <div className="battle-info">
          <h3>{currentBattle.title}</h3>
          <p>Status: {currentBattle.status}</p>
          <p>Participants: {currentBattle.participants.length}</p>
        </div>
      )}
      <button onClick={() => submitCode('console.log("Hello World")')}>
        Submit Code
      </button>
    </div>
  );
};

export default BattleRoom;
