from rest_framework import viewsets, permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import UserSerializer, PropertySerializer, TenantSerializer, PaymentSerializer
from django.conf import settings
import json
import httpx

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return User.objects.filter(id=self.request.user.id)

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
async def get_properties(request):
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"{settings.SUPABASE_URL}/rest/v1/properties",
            headers={
                'apikey': settings.SUPABASE_ANON_KEY,
                'Authorization': f'Bearer {settings.SUPABASE_ANON_KEY}'
            }
        )
        return Response(response.json())

@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
async def create_property(request):
    serializer = PropertySerializer(data=request.data)
    if serializer.is_valid():
        async with httpx.AsyncClient() as client:
            response = await client.post(
                f"{settings.SUPABASE_URL}/rest/v1/properties",
                json=serializer.validated_data,
                headers={
                    'apikey': settings.SUPABASE_ANON_KEY,
                    'Authorization': f'Bearer {settings.SUPABASE_ANON_KEY}'
                }
            )
            return Response(response.json(), status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
async def get_tenants(request):
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"{settings.SUPABASE_URL}/rest/v1/tenants",
            headers={
                'apikey': settings.SUPABASE_ANON_KEY,
                'Authorization': f'Bearer {settings.SUPABASE_ANON_KEY}'
            }
        )
        return Response(response.json())

@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
async def create_tenant(request):
    serializer = TenantSerializer(data=request.data)
    if serializer.is_valid():
        async with httpx.AsyncClient() as client:
            response = await client.post(
                f"{settings.SUPABASE_URL}/rest/v1/tenants",
                json=serializer.validated_data,
                headers={
                    'apikey': settings.SUPABASE_ANON_KEY,
                    'Authorization': f'Bearer {settings.SUPABASE_ANON_KEY}'
                }
            )
            return Response(response.json(), status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
async def get_payments(request):
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"{settings.SUPABASE_URL}/rest/v1/payments",
            headers={
                'apikey': settings.SUPABASE_ANON_KEY,
                'Authorization': f'Bearer {settings.SUPABASE_ANON_KEY}'
            }
        )
        return Response(response.json())