from django.shortcuts import render
from video.serializers import VideoSerializer
from video.models import Video
from rest_framework.response import Response
from rest_framework import viewsets

class VideoVS(viewsets.ViewSet):
    def list(self, request):
        queryset = Video.objects.all()
        serializer = VideoSerializer(queryset, many=True)
        return Response(serializer.data)
        
    def create(self,request):
        serializer=VideoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)