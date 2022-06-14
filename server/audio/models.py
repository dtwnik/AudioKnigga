from django.db import models
from django.db.models import URLField


class AudioKniga(models.Model):
    name = models.CharField(max_length=255, unique=True)
    photo = models.ImageField(upload_to='book', null=True)
    author = models.CharField(max_length=255)
    year = models.CharField(max_length=255)
    genre = models.CharField(max_length=255, blank=True)
    desc = models.CharField(max_length=255)
    audio_url = URLField(max_length=1000, blank=True)





