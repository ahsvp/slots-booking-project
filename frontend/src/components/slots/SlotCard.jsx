 
import React from 'react';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDateTime, formatTimeDifference } from '../../utils/dateUtils';

const SlotCard = ({ slot, onBook }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Calendar className="h-5 w-5 text-blue-500" />
          Slot {slot.id}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-green-500" />
            <div className="flex items-center gap-2">
              {formatDateTime(slot.start_time)}
              <ArrowRight className="h-4 w-4 text-gray-400" />
              {formatDateTime(slot.end_time)}
            </div>
          </div>
          <div className="text-sm text-blue-600 font-medium">
            {formatTimeDifference(slot.time_until_slot)}
          </div>
          <button
            onClick={() => onBook(slot.id)}
            className="w-full mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Book This Slot
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SlotCard;
