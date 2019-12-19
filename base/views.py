from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.template import loader
def index(request):
    latest_question_list = 889
    template = loader.get_template('base/index.html')
    context = {'latest_question_list': latest_question_list}
    return HttpResponse(template.render(context, request)) # debug: return HttpResponse("You're at")
    # return HttpResponse("You're at")



    