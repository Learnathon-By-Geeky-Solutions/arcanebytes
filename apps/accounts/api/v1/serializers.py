from django.contrib.auth import authenticate

from rest_framework import serializers


from apps.accounts.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "display_name",
            "username",
            "email",
            "password",
            "img_url",
            "about",
            "pscore",
        ]
        extra_kwargs = {"password": {"read_only": True}}


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "username",
            "email",
            "password",
        )
        extra_kwargs = {
            "password": {"required": True},
        }

    def validate(self, attrs):
        email = attrs.get("email", "").strip().lower()
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError("User with this email already exists.")

        return attrs

    def create(self, validated_data):
        password = validated_data.pop("password")
        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.save()
        return user


class UpdateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "display_name",
            "username",
            "email",
            "password",
            "img_url",
            "about",
            "pscore",
        )
        extra_kwargs = {
            "password": {"required": False},
        }

    def update(self, instance, validated_data):
        password = validated_data.pop("password", None)
        if password:
            instance.set_password(password)
        return super().update(instance, validated_data)


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(
        style={"input_type": "password"}, trim_whitespace=False
    )

    def validate(self, attrs):
        email = attrs.get("email").lower()
        password = attrs.get("password")

        if not email or not password:
            raise serializers.ValidationError(
                "Please provide both valid email and password to login."
            )

        if not User.objects.filter(email=email).exists():
            raise serializers.ValidationError("Email does not exist.")

        user = authenticate(
            request=self.context.get("request"), email=email, password=password
        )

        if not user:
            raise serializers.ValidationError("Wrong credentials.")

        attrs["user"] = user
        return attrs
