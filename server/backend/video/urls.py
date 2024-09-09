from django.urls import path,include
from rest_framework.routers import DefaultRouter
from video.views import VideoVS

router=DefaultRouter()
router.register('upload-video', VideoVS, basename='video')

urlpatterns = [
    path('',include(router.urls))
]