from rest_framework.response import Response

from accounts.views.base import Base
from accounts.auth import Authentication
from accounts.serializers import UserSerializer


class Signup(Base):
    def post(self, request) -> None:
        name = request.data.get('name')
        email = request.data.get('email')
        password = request.data.get('password')
        
        user = Authentication.signup(
            self=self,
            name=name,
            email=email,
            password=password
        )
        
        serializer = UserSerializer(user)
        
        return Response({
            "user": serializer.data
        })