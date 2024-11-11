from rest_framework import serializers
from .models import Slot

class SlotSerializer(serializers.ModelSerializer):
    time_until_slot = serializers.SerializerMethodField()

    class Meta:
        model = Slot
        fields = ['id', 'start_time', 'end_time', 'is_booked', 'time_until_slot']

    def get_time_until_slot(self, obj):
        now = timezone.now()
        time_delta = obj.start_time - now
        return time_delta.total_seconds()
 
