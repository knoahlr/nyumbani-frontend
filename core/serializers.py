from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name')
        read_only_fields = ('id',)

class PropertySerializer(serializers.Serializer):
    id = serializers.UUIDField(read_only=True)
    title = serializers.CharField(max_length=255)
    address = serializers.CharField(max_length=255)
    rent_amount = serializers.DecimalField(max_digits=10, decimal_places=2)
    status = serializers.ChoiceField(choices=['available', 'rented', 'maintenance'])
    created_at = serializers.DateTimeField(read_only=True)

class TenantSerializer(serializers.Serializer):
    id = serializers.UUIDField(read_only=True)
    user = UserSerializer(read_only=True)
    property_id = serializers.UUIDField()
    lease_start = serializers.DateField()
    lease_end = serializers.DateField()
    rent_amount = serializers.DecimalField(max_digits=10, decimal_places=2)
    status = serializers.ChoiceField(choices=['active', 'past', 'pending'])
    created_at = serializers.DateTimeField(read_only=True)

class PaymentSerializer(serializers.Serializer):
    id = serializers.UUIDField(read_only=True)
    tenant_id = serializers.UUIDField()
    amount = serializers.DecimalField(max_digits=10, decimal_places=2)
    due_date = serializers.DateField()
    paid_date = serializers.DateField(allow_null=True)
    status = serializers.ChoiceField(choices=['pending', 'paid', 'late', 'failed'])
    created_at = serializers.DateTimeField(read_only=True)