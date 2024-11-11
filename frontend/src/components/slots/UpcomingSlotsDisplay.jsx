import React, { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { fetchUpcomingSlots } from '../../services/slotService';
import SlotCard from './SlotCard';

const UpcomingSlotsDisplay = () => {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSlots = async () => {
      try {
        setLoading(true);
        const data = await fetchUpcomingSlots();
        setSlots(data);
        setError(null);
      } catch (err) {
        setError('Failed to load upcoming slots. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadSlots();
    // Refresh slots every minute
    const interval = setInterval(loadSlots, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleBookSlot = async (slotId) => {
    // Placeholder for booking functionality
    console.log(`Booking slot ${slotId}`);
    // Here you would typically make an API call to book the slot
    // and then refresh the slots list
  };

  if (loading) {
    return (
      <div className="w-full h-48 flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading available slots...</div>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (slots.length === 0) {
    return (
      <Alert>
        <AlertTitle>No Available Slots</AlertTitle>
        <AlertDescription>
          There are currently no upcoming slots available. Please check back later.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Upcoming Available Slots</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {slots.map((slot) => (
          <SlotCard 
            key={slot.id} 
            slot={slot} 
            onBook={handleBookSlot}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingSlotsDisplay; 
