from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'users', views.UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('properties/', views.get_properties, name='properties-list'),
    path('properties/create/', views.create_property, name='property-create'),
    path('tenants/', views.get_tenants, name='tenants-list'),
    path('tenants/create/', views.create_tenant, name='tenant-create'),
    path('payments/', views.get_payments, name='payments-list'),
]