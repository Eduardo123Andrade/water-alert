import { TimerProvider } from '../providers';
import { useContext } from 'react';

export const useTimer = () => {
  const context = useContext(TimerProvider.Context)

  if (!context)
    throw new Error('This hook must be wrapped by TimerProvider')

  return context
}