# Generated by Django 4.1 on 2022-09-29 05:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_rename_date_task_create_remove_task_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='create',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
