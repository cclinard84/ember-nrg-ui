import Component from '@ember/component';
import layout from './template';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Component.extend({
  layout,

  router: service(),
  appVersionService: service('app-version'),

  isOpen: alias('appVersionService.showModal'),

  headerText: alias('appVersionService.headerText'),
  message: alias('appVersionService.bodyText'),

  actions: {
    dismiss() {
      this.set('appVersionService._showModal', false);
    },
    viewChanges() {
      this.router.transitionTo('release-notes');
    }
  }
});
