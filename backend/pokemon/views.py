from django.http import JsonResponse
from django.db import transaction
from rest_framework import serializers
from rest_framework.generics import GenericAPIView

from pokemon.serializers import PokemonSerializer
from pokemon.models import Pokemon

# Create your views here.
class PokemonView(GenericAPIView):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer

    def get(self, request, *args, **krgs):
        pokemons = self.get_queryset()
        serializer = self.serializer_class(pokemons, many = True)
        data = serializer.data
        return JsonResponse(data, safe = False)