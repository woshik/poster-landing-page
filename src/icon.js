import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGift, faVoteYea, faLock, faShippingFast, faEdit, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faEdit, faQuoteLeft, faGift, faVoteYea, faShippingFast, faLock);

Vue.component('font-awesome-icon', FontAwesomeIcon);
