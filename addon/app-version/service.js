import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { and, not } from '@ember/object/computed';

const MODAL_HEADER_TEXT = "What's New?";
const MODAL_BODY_TEXT = "The app has changed since you last viewed it. Would you like to see what has changed?"

export default Service.extend({  
  showModal: and('enabled', '_showModal', '_isNotTesting'),
  enabled: true,

  headerText: MODAL_HEADER_TEXT,
  bodyText: MODAL_BODY_TEXT,

  applicationService: service('application'),

  _isNotTesting: not('applicationService.isTesting'),

  showPopup() {
    this.set('_showModal', true);
  },

  enable() {
    this.set('enabled', true);
  },

  disable() {
    this.set('enabled', false);
  }
});
