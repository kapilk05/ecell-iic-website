from django.urls import path, include
from .views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'api/faculty', FacultyViewSet, basename ='faculty')
router.register(r'api/startup', StartupViewSet, basename='startup')
router.register(r'api/core', CoreViewSet, basename='core')
router.register(r'api/achievement', AchievementViewSet, basename='achievement')
router.register(r'api/partner', PartnerViewSet, basename='partner')
router.register(r'api/event', EventViewSet, basename='event')
router.register(r'api/image', ImageViewSet, basename='image')

urlpatterns = [
    path('',include(router.urls))
]