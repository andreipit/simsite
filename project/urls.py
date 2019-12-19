from django.urls import include, path
from . import views

app_name = 'project'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('webgl_visual/', views.webgl_visual, name='webgl_visual'),
    path('build_webgldemo_03/', views.build_webgldemo_03, name='build_webgldemo_03'),
    path('tank/', views.tank, name='tank'),
    path('foundry/', views.foundry, name='foundry'),
    
    # path('prac_1_01/<int:subtask>/', views.prac_1_01, name='prac_1_01'),
    path('prac_1_01/', views.prac_1_01, name='prac_1_01'),
    # path('catalog/<int:category_id>/', views.category, name='category'),
    path('img_autorotation_1/', views.img_autorotation_1, name='img_autorotation_1'),
    path('img_autorotation_2_uploadimg/', views.img_autorotation_2_uploadimg, name='img_autorotation_2_uploadimg'),
    path('img_autorotation_3_learn/', views.img_autorotation_3_learn, name='img_autorotation_3_learn'),
    path('img_autorotation_4_rotate/<int:angle>/', views.img_autorotation_4_rotate, name='img_autorotation_4_rotate'),
    path('img_autorotation_5_start/', views.img_autorotation_5_start, name='img_autorotation_5_start'),
    path('img_autorotation_5_2_savednn/', views.img_autorotation_5_2_savednn, name='img_autorotation_5_2_savednn'),
    path('img_autorotation_6_downloadall/', views.img_autorotation_6_downloadall, name='img_autorotation_6_downloadall'),


    
]

