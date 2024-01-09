from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import MovieSerializer
from movie.models import Movie


@api_view(['GET'])
def dashboard(request):
    movies = Movie.objects.all()
    serializer = MovieSerializer(movies, many= True)
    return Response(serializer.data)

# get one -> display
@api_view(['GET'])
def movieDetail(request, pk):
    movie = Movie.objects.get(id = pk)
    serializer = MovieSerializer(movie, many = False)
    return Response(serializer.data)

@api_view(['POST'])
def addMovie(request):
    serializer = MovieSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def movieUpdate(request, pk):
    movie = Movie.objects.get(id = pk)
    serializer = MovieSerializer(instance = movie, data = request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def movieDelete(request, pk):
    movie = Movie.objects.get(id = pk)
    movie.delete()
    return Response("object successfully deleted")