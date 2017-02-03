# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-01-07 15:33
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64)),
                ('line_1', models.CharField(max_length=128)),
                ('line_2', models.CharField(blank=True, max_length=128)),
                ('city', models.CharField(max_length=64)),
                ('postcode', models.CharField(max_length=10)),
                ('country', models.CharField(max_length=32)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('payment_date', models.DateTimeField()),
                ('status', models.IntegerField(choices=[(1, 'Submitted'), (2, 'Fulfilled'), (3, 'Cancelled')], default=1)),
                ('status_note', models.CharField(max_length=128)),
                ('email', models.EmailField(max_length=128)),
                ('ip_address', models.GenericIPAddressField()),
                ('billing_address', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='orders_billing_address', to='orders.Address')),
                ('shipping_address', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='orders_shipping_address', to='orders.Address')),
            ],
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField(default=1)),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='orders.Order')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.ProductVariant')),
            ],
        ),
    ]
