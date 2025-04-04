# Generated by Django 5.1.6 on 2025-02-27 13:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_alter_user_is_active'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='about',
            field=models.TextField(blank=True, verbose_name='about'),
        ),
        migrations.AlterField(
            model_name='user',
            name='img_url',
            field=models.URLField(blank=True, verbose_name='image url'),
        ),
    ]
