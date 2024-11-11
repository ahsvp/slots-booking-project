from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.utils import timezone
from .models import Slot
from .serializers import SlotSerializer

@api_view(['GET'])
def upcoming_slots(request):
    now = timezone.now()
    slots = Slot.objects.filter(
        start_time__gt=now,
        is_booked=False
    ).order_by('start_time')
    serializer = SlotSerializer(slots, many=True)
    return Response(serializer.data) 
