from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.template import loader
import pdb #pdb.set_trace()
from django.views import generic
# from .models import Product, Category
# from catalog.models import Category, Product
from django.utils import timezone
from decimal import Decimal
import os
from django.conf import settings
import project.mylib as mylib
from .forms import UploadFileForm, DeleteImgForm, RotateImgForm
from django.shortcuts import redirect

class IndexView(generic.ListView):
    # cache.clear() # fixes error: changed img not updated, but peaking from cache
    template_name = 'project/index.html'
    # template_name = 'project/build.html'
    context_object_name = 'categories'
    def get_context_data(self, **kwargs):
        # model = Category
        context = super(IndexView, self).get_context_data(**kwargs)
        context.update({
            # 'products': Product.objects.order_by('id')[:15],
            'current_category' : None,
            # 'form' : UploadFileForm()
        })
        return context
    def get_queryset(self):
        # return Category.objects.filter(parent_category_id=0).order_by('id')
        return 'test text'

# def webgl_visual(request, category_id):
def webgl_visual(request):
    # current_category = Category.objects.get(id=category_id)
    # products = current_category.product_set.all().order_by('id')
    # categories = Category.objects.filter(parent_category_id=category_id).order_by('id')
    # path = mylib.get_all_parents(current_category)
    # context = {'current_category' : current_category, 'products': products, 'categories': categories, 'path':path}
    context = {'testvar' : 872}
    return render(request, 'project/webgl_visual.html', context)

def build_webgldemo_03(request):
    context = {'testvar' : 872}
    return render(request, 'project/build_webgldemo_03.html', context)

def tank(request):
    context = {'testvar' : 872}
    return render(request, 'project/tank.html', context)

def prac_1_01(request):
    context = {'testvar' : 872}
    return render(request, 'project/html3/prac_1_01.html', context)

def foundry(request):
    context = {'testvar' : 872}
    return render(request, 'project/foundry.html', context)


# ML STARTUP START--------------------------------
def img_autorotation_1(request):
    context = {'testvar' : 872}
    return render(request, 'project/img_autorotation_1.html', context)

def img_autorotation_2_uploadimg(request):
    if request.method == 'POST':
        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            mylib.delete_old_imgs()
            res = mylib.save_img('only_media', request.FILES.getlist('avatar2'),  request.POST['product_id'])
            response = redirect('/project/img_autorotation_3_learn/')
            return response
    return HttpResponse("Ошибка: изображение не загружено")

def img_autorotation_3_learn(request):
    context = {'testvar' : 872, 'images' : mylib.get_not_learned_filenames(), 'my_media_root':settings.MEDIA_ROOT}
    return render(request, 'project/img_autorotation_3_learn.html', context)

def img_autorotation_4_rotate(request, angle):
    # (Pdb) request.POST['img_name']    -> '12345_2019_04m_17d_18h_00m_58s_654850.jpg'
    # (Pdb) request.POST['next_url']    -> 'http://127.0.0.1:8000/project/img_autorotation_learn/'
    if request.method == 'POST':
        form = RotateImgForm(request.POST)
        if form.is_valid():
            train_or_val_s = 'train'
            train_or_val_u = 'train'
            if mylib.need_val_sideways(): train_or_val_s = 'val'
            if mylib.need_val_upright(): train_or_val_u = 'val'
            folder_p_s = '/products/predict/sideways/'
            if angle==90:
                mylib.move_file(request.POST['img_name'], old_folder=folder_p_s, new_folder='/products/'+train_or_val_s+'/sideways/')
            elif angle==270:
                mylib.move_file(request.POST['img_name'], old_folder=folder_p_s, new_folder='/products/'+train_or_val_s+'/sideways/')
            elif angle==180:
                mylib.move_file(request.POST['img_name'], old_folder=folder_p_s, new_folder='/products/'+train_or_val_s+'/sideways/')
            elif angle==0:
                mylib.move_file(request.POST['img_name'], old_folder=folder_p_s, new_folder='/products/'+train_or_val_u+'/upright/')
            return HttpResponseRedirect(request.POST.get('next_url', '/')) # return HttpResponse("Изображение загружено успешно!")
    return HttpResponse("Ошибка: изображение не повернуто")

def img_autorotation_5_start(request):
    res = mylib.learn_dummy() 
    mylib.rotate_as_predicted(res)
    # res = [('upright', 'sideways\\12345_2019_04m_17d_18h_00m_58s_654850.jpg'), ('sideways', 'sideways\\12345_2019_04m_17d_18h_02m_45s_885751.jpg'), ('sideways', 'sideways\\12345_2019_04m_17d_18h_02m_45s_936654.jpg'), ('sideways', 'sideways\\12345_2019_04m_17d_18h_03m_00s_218896.jpg')]
    context = {'each_img_rotation_info' : res, 'images' : os.listdir(settings.MEDIA_ROOT + '/products/predict/sideways/')}
    return render(request, 'project/img_autorotation_5_start.html', context)

def img_autorotation_5_2_savednn(request):
    # res = mylib.learn_dummy()
    res = mylib.use_saved_nn()
    mylib.rotate_as_predicted(res)
    # res = [('upright', 'sideways\\12345_2019_04m_17d_18h_00m_58s_654850.jpg'), ('sideways', 'sideways\\12345_2019_04m_17d_18h_02m_45s_885751.jpg'), ('sideways', 'sideways\\12345_2019_04m_17d_18h_02m_45s_936654.jpg'), ('sideways', 'sideways\\12345_2019_04m_17d_18h_03m_00s_218896.jpg')]
    context = {'each_img_rotation_info' : res, 'images' : os.listdir(settings.MEDIA_ROOT + '/products/predict/sideways/')}
    return render(request, 'project/img_autorotation_5_start.html', context)






def img_autorotation_6_downloadall(request):
    response = mylib.download_all_rotated(request)
    return response # return HttpResponse("Прайс скачен успешно!")