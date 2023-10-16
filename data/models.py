from django.db import models

class Data(models.Model):
    data = models.CharField("Data", max_length=240)

    def __str__(self):
        return self.data