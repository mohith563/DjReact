# from django.urls import path

# from .views import (
#     ArticleListView,
#     ArticleDetailView,
#     ArticleCreateView,
#     ArticleUpdateView,
#     ArticleDeleteView
# )

# urlpatterns = [
#     path('',ArticleListView.as_view(),name='article-list'),
#     path('<int:pk>/',ArticleDetailView.as_view(),name='article-detail'),
#     path('create/',ArticleCreateView.as_view(),name='article-create'),
#     path('<int:pk>/update/',ArticleUpdateView.as_view(),name='article-update'),
#     path('<int:pk>/delete/',ArticleDeleteView.as_view(),name='article-delete'),

# ]

from .views import ArticleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ArticleViewSet, basename='articles')
urlpatterns = router.urls

