from django.urls import include, path
from . import views

app_name = 'base'
urlpatterns = [ 
    path('', views.index, name='index'),
    # path('', views.IndexView.as_view(), name='index'),
    # path('uploadimg/', views.uploadimg, name='uploadimg'),
]



