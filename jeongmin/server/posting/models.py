from django.db import models
from django.conf import settings
from django.db.models.deletion import SET_NULL
from django.utils.translation import gettext as _

class Posting(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL)
    image = models.ImageField(upload_to='images', blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    category = models.CharField(choices=Category.choices, max_length=50)
    lat = models.FloatField(blank=False, null=False)               # 위도 
    lng = models.FloatField(blank=False, null=False)               # 경도
    like = models.IntegerField(default=0)
    created_at = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return str(self.pk)

class Comment(models.Model):
    posting = models.ForeignKey(Posting, null=False, blank=False, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, blank=False, on_delete=models.SET_NULL)
    comment = models.TextField()
    created_at = models.DateField(auto_now_add=True, null=False, blank=False)
    like = models.IntegerField(default=0)

    def __str__(self):
        return self.comment