from django.db import models



# Create your models here.
class Faculty(models.Model):
    member_image = models.ImageField(upload_to='profile_images_faculty')
    name=models.CharField(max_length=100)
    position=models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    
    class Meta:
        verbose_name_plural = "Faculties"

    def __str__(self):
        return self.name

class Core(models.Model):
    member_image = models.ImageField(upload_to='profile_images_core')
    name=models.CharField(max_length=100)
    position=models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Startup(models.Model):
    logo = models.ImageField(upload_to='startup_logos')
    intro = models.CharField(max_length=500)
    link = models.FileField(upload_to='startup_docs')
    
class Achievement(models.Model):
    logo = models.ImageField(upload_to='achievement_logos')
    intro = models.CharField(max_length=200)
    link = models.FileField(upload_to='achievement_docs')

class Partner(models.Model):
    logo = models.ImageField(upload_to='partner_logos')

class Event(models.Model):
    name = models.CharField(max_length=100)
    intro = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.name
    
class ImageModel(models.Model):
    event_image = models.ImageField(upload_to='event_images')
    event=models.ForeignKey(Event, on_delete=models.CASCADE)