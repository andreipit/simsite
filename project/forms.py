from django import forms
# from captcha.fields import CaptchaField

# class CaptchaTestForm(forms.Form):
#     myfield = AnyOtherField()
#     captcha = CaptchaField()

class UploadFileForm(forms.Form):
    # title = forms.CharField(max_length=50)
    avatar2 = forms.FileField()
    product_id = forms.IntegerField()
    # captcha = CaptchaField()

class DeleteImgForm(forms.Form):
    # title = forms.CharField(max_length=50)
    # avatar2 = forms.FileField()
    product_id = forms.IntegerField()
    # captcha = CaptchaField()



class RotateImgForm(forms.Form):
    img_name = forms.CharField(max_length=550)
    next_url = forms.CharField(max_length=550)


# class SearchForm(forms.Form):
#     filter_type = forms.IntegerField()
#     search_query = forms.CharField(max_length=50)


# class AdminLoginForm(forms.Form):
#     username = forms.CharField(max_length=50)
#     password = forms.CharField(max_length=50)
#     captcha = CaptchaField()


# from django.contrib.auth.forms import AuthenticationForm, PasswordChangeForm
# from django.utils.translation import gettext_lazy as _

# class CustomAdminAuthenticationForm(AuthenticationForm):

#     """
#     A custom authentication form used in the admin app.
#     """
#     error_messages = {
#         **AuthenticationForm.error_messages,
#         'invalid_login': _(
#             "Please enter the correct %(username)s and password for a staff "
#             "account. Note that both fields may be case-sensitive."
#         ),
#     }
#     required_css_class = 'required'

#     def confirm_login_allowed(self, user):
#         super().confirm_login_allowed(user)
#         if not user.is_staff:
#             raise forms.ValidationError(
#                 self.error_messages['invalid_login'],
#                 code='invalid_login',
#                 params={'username': self.username_field.verbose_name}
#             )


