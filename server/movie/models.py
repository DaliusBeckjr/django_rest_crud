from django.db import models
from .managers import MovieManager

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=45)
    duration = models.IntegerField()
    description = models.TextField()
    released_date = models.DateField()

    objects = MovieManager()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"""movie object():
                Title: {self.title},
                duration: {self.duration},
                description: {self.description},
                released date: {self.released_date},
            """