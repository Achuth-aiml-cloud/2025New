from rest_framework import serializers
from auth_api.models import User
from django.contrib.auth import authenticate

class UserRegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    
    class Meta:
        model = User
        fields = ['email', 'username', 'phone', 'password', 'password2']
        extra_kwargs = {
            'password': {'write_only': True}
        }
    
    def validate(self, data):
        # Check that the two password entries match
        if data['password'] != data['password2']:
            raise serializers.ValidationError("Passwords don't match")
        return data
    
    def create(self, validated_data):
        # Remove password2 from the data as it's not needed for User creation
        validated_data.pop('password2', None)
        user = User.objects.create_user(**validated_data)
        return user

class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(style={'input_type': 'password'})
    
    def validate(self, data):
        user = authenticate(email=data.get('email'), password=data.get('password'))
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect credentials. Please try again.")