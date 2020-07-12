# from rest_framework.generics import (
#     ListAPIView, 
#     RetrieveAPIView,
#     CreateAPIView,
#     UpdateAPIView,
#     DestroyAPIView
# )
# from ..models import Article
# from .serializers import ArticleSerializer

# from rest_framework.decorators import api_view
# from rest_framework.response import Response

# class ArticleListView(ListAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

# class ArticleDetailView(RetrieveAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

# class ArticleCreateView(CreateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

# @api_view(['POST'])
# def ArticleCreateView(request):
#     serializer = ArticleSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#     return Response(serializer.data)

# class ArticleUpdateView(UpdateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

# class ArticleDeleteView(DestroyAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

from rest_framework import viewsets
from .serializers import ArticleSerializer
from ..models import Article
from django.urls import path


class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()

