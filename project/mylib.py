# from catalog.models import Category, Product
# from about.models import Parameter
from django.utils import timezone
import os
from django.conf import settings
import pdb #pdb.set_trace()
from django.http import HttpResponse
# from django.core.cache import cache # This is the memcache cache.
from django.core.cache import cache # This is the memcache cache.
import pdb #pdb.set_trace()
from django.core.files.storage import FileSystemStorage # https://stackoverflow.com/questions/26274021/simply-save-file-to-folder-in-django
import sys
from PIL import Image


def delete_old_imgs():
    folder_main = settings.MEDIA_ROOT + '/products/predict/sideways/'
    folder1 = settings.MEDIA_ROOT + '/products/train/sideways/'
    folder2 = settings.MEDIA_ROOT + '/products/train/upright/'
    folder3 = settings.MEDIA_ROOT + '/products/val/sideways/'
    folder4 = settings.MEDIA_ROOT + '/products/val/upright/'
    folders = [folder_main, folder1, folder2, folder3, folder4]
    for folder in folders:
        for filename in os.listdir(folder): 
            if filename != 'init.txt':
                os.remove(folder + filename)


def save_img(storage_type, uploaded_files, product_id): # without DB


    if storage_type == "only_media": # working for 07315_sdfoj0923.jpg
        for uploaded_file in uploaded_files:
            # pdb.set_trace()

            new_name = '12345' + '_' + custom_timestamp() + '.jpg'
            # rotated_angle = guess_img_name()
            # rotated_angle = learn_dummy()
            img = Image.open(uploaded_file)
            img_path = settings.MEDIA_ROOT + '/products/predict/sideways/' + new_name
            # img = img.rotate(45)
            img = resize_n_compress(img)
            img.save(img_path, format='JPEG', quality=30) # works even with non jpeg

        return 90
            # return rotated_angle


def move_file(filename, old_folder, new_folder): # without DB
    old_img_path = settings.MEDIA_ROOT + old_folder+ filename
    old_img_folder = settings.MEDIA_ROOT + old_folder
    new_img_path = settings.MEDIA_ROOT + new_folder+ filename

    img = Image.open(old_img_path)
    img.save(new_img_path, format='JPEG', quality=50) # works even with non jpeg

    return 90


def get_not_learned_filenames():
    folder_main = settings.MEDIA_ROOT + '/products/predict/sideways/'
    folder1 = settings.MEDIA_ROOT + '/products/train/sideways/'
    folder2 = settings.MEDIA_ROOT + '/products/train/upright/'
    folder3 = settings.MEDIA_ROOT + '/products/val/sideways/'
    folder4 = settings.MEDIA_ROOT + '/products/val/upright/'
    folders = [folder1, folder2, folder3, folder4]
    result = []
    for filename in os.listdir(folder_main):
        is_saved = False
        for folder in folders:
            if filename in os.listdir(folder): is_saved = True
        if is_saved == False: result.append(filename)
    return result


def rotate_as_predicted(learn_result):
    # img_autorotation_start [('upright', 'sideways\\12345_2019_04m_17d_18h_00m_58s_654850.jpg'), ('sideways', 'sideways\\12345_2019_04m_17d_18h_02m_45s_885751.jpg'), ('sideways', 'sideways\\12345_2019_04m_17d_18h_02m_45s_936654.jpg'), ('sideways', 'sideways\\12345_2019_04m_17d_18h_03m_00s_218896.jpg')]
    for res in learn_result:
        if res[0]=='sideways':
            name = res[1].replace('sideways\\', '')
            img_path = settings.MEDIA_ROOT + '/products/predict/sideways/'+ name
            img_path_rot = settings.MEDIA_ROOT + '/products/predict/sideways/'+ 'rotated' + name
            img = Image.open(img_path)
            img = img.rotate(90)
            img.save(img_path_rot, format='JPEG', quality=50) # works even with non jpeg
            os.remove(img_path)

    return 0


def resize_n_compress(img):
    basewidth = 1280
    wpercent = (basewidth/float(img.size[0]))
    hsize = int((float(img.size[1])*float(wpercent)))
    img = img.resize((basewidth,hsize), Image.ANTIALIAS)
    return img

def custom_timestamp(): # 2019_04m_04d_01h_04m_04s_077859
    import datetime, re
    currentDT = datetime.datetime.now()
    regex = re.compile(r'^(.*)-(.*)-(.*) (.*):(.*):(.*)\.(.*)$', re.IGNORECASE)
    timestamp = regex.sub(r'\1_\2m_\3d_\4h_\5m_\6s_\7',str(currentDT))
    # print(timestamp)                                              # 2019_04m_04d_01h_04m_04s_077859
    # print (str(currentDT))                                        # 2019-04-04 01:04:04.077859
    return timestamp


def learn_dummy():
    from tensorflow.keras.applications import ResNet50
    from tensorflow.keras.models import Sequential
    from tensorflow.keras.layers import Dense, Flatten, GlobalAveragePooling2D
    from tensorflow.keras.applications.resnet50 import preprocess_input
    from tensorflow.keras.preprocessing.image import ImageDataGenerator

    # variables
    num_classes = 2
    

    # resnet_weights_path = '../input/06_transfer_learning/resnet50/resnet50_weights_tf_dim_ordering_tf_kernels_notop.h5'
    resnet_weights_path = settings.MAIN_PROJECT_PARENT_DIR + '/project/static/project/ml/img_autorotation/resnet50_weights_tf_dim_ordering_tf_kernels_notop.h5'
    train_path = settings.MEDIA_ROOT + '/products/train'
    val_path = settings.MEDIA_ROOT + '/products/val'
    # train_path = '../input/07_exercise_transfer_learning/dogs-gone-sideways/images/train'
    # val_path = '../input/07_exercise_transfer_learning/dogs-gone-sideways/images/val'
    data_generator_with_aug = ImageDataGenerator(preprocessing_function=preprocess_input,horizontal_flip = False,width_shift_range = 0.1,height_shift_range = 0.1)
    data_generator_no_aug = ImageDataGenerator(preprocessing_function=preprocess_input)
    image_size = 224
    my_new_model = Sequential()

    # # create model from 2 libraries: ResNet50 and Dense
    my_new_model.add(ResNet50(include_top=False, pooling='avg', weights=resnet_weights_path))
    my_new_model.add(Dense(num_classes, activation='softmax'))
    my_new_model.layers[0].trainable = False
    my_new_model.compile(optimizer='sgd', loss='categorical_crossentropy', metrics=['accuracy'])

    # # set train/val data
    train_generator = data_generator_with_aug.flow_from_directory(directory = train_path,target_size=(image_size, image_size),batch_size=12,class_mode='categorical')
    validation_generator = data_generator_no_aug.flow_from_directory(directory = val_path,target_size=(image_size, image_size),class_mode='categorical')

    # # fit
    my_new_model.fit_generator(train_generator,epochs = 3,steps_per_epoch=19,validation_data=validation_generator)



    # GET RESULT WITH LABELS = 0 OR 1
    # predict_generator = data_generator_no_aug.flow_from_directory(directory = '../input/07_exercise_transfer_learning/dogs-gone-sideways/images/predict',target_size=(image_size, image_size),batch_size=12,class_mode='categorical',shuffle=False)
    predict_generator = data_generator_no_aug.flow_from_directory(directory = settings.MEDIA_ROOT + '/products/predict',target_size=(image_size, image_size),batch_size=12,class_mode='categorical',shuffle=False)
    # y_pred_float = my_new_model.predict(predict_generator) # float value 0.08819555
    # predict_generator.class_indices # {'sideways': 0, 'upright': 1}
    y_pred = my_new_model.predict_classes(predict_generator) # array([0, 1, 1, 1, 0, 0, 0]
    labels = predict_generator.filenames
    # print(list(zip(y_pred, labels)))


    # GET RESULT WITH LABELS = 'sideways' OR 'upright'
    # predict_generator = data_generator_no_aug.flow_from_directory(directory = '../input/07_exercise_transfer_learning/dogs-gone-sideways/images/predict',target_size=(image_size, image_size),batch_size=12,class_mode='categorical',shuffle=False)

    class_names =  predict_generator.class_indices # {'sideways': 0, 'upright': 1}
    swaped_key_val = dict((v,k) for k,v in class_names.items()) # {0: 'sideways', 1: 'upright'}
    y_pred_with_names = [swaped_key_val[x] for x in y_pred]
    res = list(zip(y_pred_with_names, labels))
    # print(list(zip(y_pred_with_names, labels)))

    return res


def use_saved_nn():
    # from tensorflow.keras.applications import ResNet50
    # from tensorflow.keras.models import Sequential
    # from tensorflow.keras.layers import Dense, Flatten, GlobalAveragePooling2D
    from tensorflow.keras.applications.resnet50 import preprocess_input
    from tensorflow.keras.preprocessing.image import ImageDataGenerator

    # variables
    num_classes = 2
    # resnet_weights_path = settings.MAIN_PROJECT_PARENT_DIR + '/project/static/project/ml/img_autorotation/resnet50_weights_tf_dim_ordering_tf_kernels_notop.h5'
    # train_path = settings.MEDIA_ROOT + '/products/train'
    # val_path = settings.MEDIA_ROOT + '/products/val'
    # data_generator_with_aug = ImageDataGenerator(preprocessing_function=preprocess_input,horizontal_flip = False,width_shift_range = 0.1,height_shift_range = 0.1)
    data_generator_no_aug = ImageDataGenerator(preprocessing_function=preprocess_input)
    image_size = 224
    # my_new_model = Sequential()

    # # # create model from 2 libraries: ResNet50 and Dense
    # my_new_model.add(ResNet50(include_top=False, pooling='avg', weights=resnet_weights_path))
    # my_new_model.add(Dense(num_classes, activation='softmax'))
    # my_new_model.layers[0].trainable = False
    # my_new_model.compile(optimizer='sgd', loss='categorical_crossentropy', metrics=['accuracy'])

    from tensorflow import keras

    my_new_model = keras.models.load_model(settings.MAIN_PROJECT_PARENT_DIR + '/project/static/project/ml/img_autorotation/dog_rotator_02.h5')



    # # set train/val data
    # train_generator = data_generator_with_aug.flow_from_directory(directory = train_path,target_size=(image_size, image_size),batch_size=12,class_mode='categorical')
    # validation_generator = data_generator_no_aug.flow_from_directory(directory = val_path,target_size=(image_size, image_size),class_mode='categorical')

    # # fit
    # my_new_model.fit_generator(train_generator,epochs = 3,steps_per_epoch=19,validation_data=validation_generator)



    # GET RESULT WITH LABELS = 0 OR 1
    # predict_generator = data_generator_no_aug.flow_from_directory(directory = '../input/07_exercise_transfer_learning/dogs-gone-sideways/images/predict',target_size=(image_size, image_size),batch_size=12,class_mode='categorical',shuffle=False)
    predict_generator = data_generator_no_aug.flow_from_directory(directory = settings.MEDIA_ROOT + '/products/predict',target_size=(image_size, image_size),batch_size=12,class_mode='categorical',shuffle=False)
    # y_pred_float = my_new_model.predict(predict_generator) # float value 0.08819555
    # predict_generator.class_indices # {'sideways': 0, 'upright': 1}
    y_pred = my_new_model.predict_classes(predict_generator) # array([0, 1, 1, 1, 0, 0, 0]
    labels = predict_generator.filenames
    # print(list(zip(y_pred, labels)))


    # GET RESULT WITH LABELS = 'sideways' OR 'upright'
    # predict_generator = data_generator_no_aug.flow_from_directory(directory = '../input/07_exercise_transfer_learning/dogs-gone-sideways/images/predict',target_size=(image_size, image_size),batch_size=12,class_mode='categorical',shuffle=False)

    class_names =  predict_generator.class_indices # {'sideways': 0, 'upright': 1}
    swaped_key_val = dict((v,k) for k,v in class_names.items()) # {0: 'sideways', 1: 'upright'}
    y_pred_with_names = [swaped_key_val[x] for x in y_pred]
    res = list(zip(y_pred_with_names, labels))
    # print(list(zip(y_pred_with_names, labels)))

    return res

    
def need_val_sideways():
    folder1 = settings.MEDIA_ROOT + '/products/train/sideways/'
    folder3 = settings.MEDIA_ROOT + '/products/val/sideways/'
    if len(os.listdir(folder1)) > len(os.listdir(folder3)):
        return True 
    return False 

def need_val_upright():
    folder2 = settings.MEDIA_ROOT + '/products/train/upright/'
    folder4 = settings.MEDIA_ROOT + '/products/val/upright/'
    if len(os.listdir(folder2)) > len(os.listdir(folder4)):
        return True 
    return False 


def list_contains_string(strings_list, string_part):  # '07263' -> True
    for f in strings_list:
        if f[0:5] == string_part: return True
    return False

def get_filename_by_partname(strings_list, string_part):  # '07263' -> '07315_912321097.jpg'
    for f in strings_list:
        # print(f)
        if f[0:5] == string_part: return f
    return None


def assign_imgs_to_products(products, product_page):

    # if not product_page:
    images = {}
    for p in products:

        # code = '07315'
        filenames =os.listdir(settings.MEDIA_ROOT + '/products/predict/sideways/')   
        # list_contains_string(filenames, p.product_code)
            

        # if os.path.isfile(settings.MEDIA_ROOT + '/products/'+ p.product_code + '.jpg'): # not working when name='07315_01fds.jpg'
            # images[p.id] = settings.MEDIA_URL + 'products/' + p.product_code + '.jpg'
        if list_contains_string(filenames, p.product_code): 
            images[p.id] = settings.MEDIA_URL + 'products/predict/sideways/' + get_filename_by_partname(filenames, p.product_code)
        else:                        
            images[p.id] = settings.MEDIA_URL + 'products/predict/sideways/' + 'no_image' + '.jpg'
    return images




def download_all_rotated(request):
    import os
    import zipfile
    # from io import StringIO
    from io import BytesIO
    from django.http import HttpResponse
    import datetime
    from django.utils import dateformat
    # Files (local path) to put in the .zip
    # FIXME: Change this (get paths from DB etc)
    folder=settings.MAIN_APP + settings.MEDIA_URL + 'products/predict/sideways/'  # insert the path to your directory   
    filenames =os.listdir(folder)   
    # filenames = [settings.MAIN_APP + settings.MEDIA_URL + 'products/07316.jpg'] # only concrete file
    # filenames = ["skladmax/media/products/01290.jpg", "skladmax/media/products/00061.jpg"] # only local
    # Folder name in ZIP archive which contains the above files
    # E.g [thearchive.zip]/somefiles/file2.txt
    # FIXME: Set this to something better
    # zip_subdir = "all_images_" + dateformat.format(datetime.datetime.now(), 'F_j_Y')
    zip_subdir = "all_images_" + custom_timestamp()

    zip_filename = "%s.zip" % zip_subdir
    # Open StringIO to grab in-memory ZIP contents
    # s = StringIO.StringIO()
    s = BytesIO()
    # The zip compressor
    zf = zipfile.ZipFile(s, "w")
    for fpath in filenames:
        fpath = folder + fpath
        # Calculate path for file in zip
        fdir, fname = os.path.split(fpath)
        zip_path = os.path.join(zip_subdir, fname)
        # Add file, at correct path
        zf.write(fpath, zip_path)
    # Must close zip for all contents to be written
    zf.close()
    # Grab ZIP file from in-memory, make response with correct MIME-type
    # resp = HttpResponse(s.getvalue(), mimetype = "application/x-zip-compressed")
    resp = HttpResponse(s.getvalue(), content_type="application/x-zip-compressed")
    # ..and correct content-disposition
    resp['Content-Disposition'] = 'attachment; filename=%s' % zip_filename
    return resp   





