import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGift,
  faVoteYea,
  faLock,
  faShippingFast,
  faEdit,
  faQuoteLeft,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faEdit, faQuoteLeft, faGift, faVoteYea, faShippingFast, faLock, faCheckCircle);

Vue.component('font-awesome-icon', FontAwesomeIcon);
