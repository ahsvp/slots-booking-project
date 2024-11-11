const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export const fetchUpcomingSlots = async () => {
  try {
    const response = await fetch(`${API_URL}/slots/upcoming/`);
    if (!response.ok) throw new Error('Failed to fetch slots');
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}; 
