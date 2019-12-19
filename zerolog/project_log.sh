01feb2019


0) add new library
login user01
source dangermaps_venv/bin/activate
pip install tensorflow
exit
apache2ctl -k graceful

------------------------------------------------------
1) create skeleton foreach app

django-admin startproject simsite
python manage.py startapp base
update simsite/urls.py
    from django.urls import include, path
    path('', include('base.urls')),
create base/urls.py
    from django.urls import include, path
    from . import views
    app_name = 'about'
    urlpatterns = [ path('', views.index, name='index'), ] # path('', views.IndexView.as_view(), name='index'), # path('uploadimg/', views.uploadimg, name='uploadimg'),
update mysite/settings.py: INSTALLED_APPS = [ 'base.apps.BaseConfig',
create simsite/base/templates/base/index.html # 'base / index'
update base/views.py
    from django.http import HttpResponse
    from django.template import loader
    def index(request):
        latest_question_list = 889
        template = loader.get_template('base/index.html')
        context = {'latest_question_list': latest_question_list}
        return HttpResponse(template.render(context, request)) # debug: return HttpResponse("You're at")
result: http://127.0.0.1:8000/ => 'base / index'
* don`t do migration !!!

------------------------------------------------------
2) create home page layout

settings.py #'python manage.py collectstatic' on server will copy all staticfiles to /home/user01/skladmax/skladmax/static
    import os
    MAIN_PROJECT = os.path.dirname(__file__) # /home/user01/skladmax/skladmax/
    STATIC_ROOT = os.path.join(MAIN_PROJECT, 'static')

create simsite/base/static/base/ => and put there CSS and JS for bootstrap (from bootstrap.com) (and folder 'images')
create templates/base/base.html => see "example_01_base.html"
update templates/base/index.html
    {% extends "base/base.html" %}
    {% load static %}
    <link rel="stylesheet" type="text/css" href="{% static 'base/style.css' %}">
    {% block content %}
    base / index page
    {% comment %}                        
    {% endcomment %}                        
    {% endblock %}
result: http://127.0.0.1:8000/ => 'base / index' with header and footer


------------------------------------------------------
3) deploy create

simsite/settings.py
    ALLOWED_HOSTS = [
        '*',
    ]
login user01
source dangermaps_venv/bin/activate
git clone https://andreipit@bitbucket.org/andreipit/simsite.git
cd simsite
python manage.py collectstatic

etc/apache2/apache2.conf
    # simsite settings--------------------------------------
    Alias /static/ /home/user01/simsite/simsite/static/ 
    <Directory /home/user01/simsite/simsite/static>
    Require all granted
    </Directory>
    WSGIScriptAlias / /home/user01/simsite/simsite/wsgi.py
    WSGIPythonHome /home/user01/dangermaps_venv
    WSGIPythonPath /home/user01/simsite
    <Directory /home/user01/simsite/simsite>
    <Files wsgi.py>
    Require all granted
    </Files>
    </Directory>

exit
apache2ctl -k graceful


------------------------------------------------------
4) deploy update

cd ../home/user01/simsite
# [git checkout .] [git clean -f] [git clean -fd]
git checkout .
git clean -f
git clean -fd
git pull origin master
login user01
source dangermaps_venv/bin/activate
cd simsite
python manage.py collectstatic
exit
apache2ctl -k graceful


# permission for img upload to media
    cd simsite
    root@194-58-100-59:/home/user01/simsite/simsite# 
    chmod -R o+w media/
    chgrp -R www-data media/
    chown -R www-data:www-data media/
    cd media
    chmod -R o+w products/
    chgrp -R www-data products/
    chown -R www-data:www-data products/

    cd products
    chmod -R o+w predict/
    chgrp -R www-data predict/
    chown -R www-data:www-data predict/
    chmod -R o+w train/
    chgrp -R www-data train/
    chown -R www-data:www-data train/
    chmod -R o+w val/
    chgrp -R www-data val/
    chown -R www-data:www-data val/

    cd predict
    chmod -R o+w sideways/
    chgrp -R www-data sideways/
    chown -R www-data:www-data sideways/
    chmod -R o+w upright/
    chgrp -R www-data upright/
    chown -R www-data:www-data upright/

    cd ..
    cd train
    chmod -R o+w sideways/
    chgrp -R www-data sideways/
    chown -R www-data:www-data sideways/
    chmod -R o+w upright/
    chgrp -R www-data upright/
    chown -R www-data:www-data upright/

    cd ..
    cd val
    chmod -R o+w sideways/
    chgrp -R www-data sideways/
    chown -R www-data:www-data sideways/
    chmod -R o+w upright/
    chgrp -R www-data upright/
    chown -R www-data:www-data upright/
    
    apache2ctl -k graceful

------------------------------------------------------
5) copy app 'projects'
    settings.py => INSTALLED_APPS = ['project.apps.ProjectConfig',
    simsite/urls.py => path('project/', include('project.urls')),

