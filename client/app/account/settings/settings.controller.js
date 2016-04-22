'use strict';

class SettingsController {
  constructor(Auth) {
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
  }

  changePassword(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.changePassword(this.user.oldPassword, this.user.newPassword)
        .then(() => {
          this.message = 'Password successfully changed.';
        })
        .catch(err => {
          err = err.data;
          form.password.$setValidity('mongoose', false);
          if (err.message === 'User validation failed') {
             this.errors.other = 'New password is shorter than the minimum allowed length (6)';
          }
          else {
             this.errors.other = 'Incorrect password';
          }
          this.message = '';
        });
    }
  }
}

angular.module('meanonlineshopApp')
  .controller('SettingsController', SettingsController);
