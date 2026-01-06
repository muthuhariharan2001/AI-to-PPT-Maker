from django.contrib.postgres.fields import JSONField
from django.db import models

class SlideHistory(models.Model):
    user_id = models.CharField(max_length=255)
    topic = models.CharField(max_length=255)
    slides_json = JSONField()
    ppt_file = models.FileField(upload_to='pptx/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"SlideHistory(user_id={self.user_id}, topic={self.topic}, created_at={self.created_at})"