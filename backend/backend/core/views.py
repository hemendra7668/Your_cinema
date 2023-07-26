from django.shortcuts import render
from rest_framework import exceptions
from rest_framework.authentication import get_authorization_header
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer
from .models import User


class RegisterAPIView(APIView):
    def post(self, request):
        data = request.data

        if data['password'] != data['password_confirm']:
            raise exceptions.APIException('Password do not match!')

        serializer = UserSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)


class LoginAPIView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email,password=password).first()

        if user is None:
            raise exceptions.AuthenticationFailed('Invalid credentials')

        serializer = UserSerializer(user)
        print(email)
        return Response(serializer.data)



