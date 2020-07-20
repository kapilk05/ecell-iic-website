from .models import *
from rest_framework import serializers

class FacultySerializer(serializers.ModelSerializer):
    member_image = serializers.ImageField(max_length=None, use_url=True, allow_null=True, required=False)
    class Meta:
        model = Faculty
        fields = ('member_image', 'name', 'position', 'department')

class CoreSerializer(serializers.ModelSerializer):
    member_image = serializers.ImageField(max_length=None, use_url=True, allow_null=True, required=False)
    class Meta:
        model = Core
        fields = ('member_image', 'name', 'position')


class StartupSerializer(serializers.ModelSerializer):
    logo = serializers.ImageField(max_length=None, use_url=True, allow_null=True, required=False)
    class Meta:
        model = Startup
        fields = ('logo', 'intro', 'link')

class AchievementSerializer(serializers.ModelSerializer):
    logo = serializers.ImageField(max_length=None, use_url=True, allow_null=True, required=False)
    class Meta:
        model = Achievement
        fields = ('logo', 'intro', 'link')

class PartnerSerializer(serializers.ModelSerializer):
    logo = serializers.ImageField(max_length=None, use_url=True, allow_null=True, required=False)
    class Meta:
        model = Partner
        fields = '__all__'

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('name', 'intro', 'description')

class ImageSerializer(serializers.ModelSerializer):
    event_image = serializers.ImageField(max_length=None, use_url=True, allow_null=True, required=False)
    class Meta:
        model = ImageModel
        fields = ('event_image', 'event')