import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { defineComponent } from 'vue'

defineComponent({
  components: {
    FontAwesomeIcon
  },
  setup() {
    library.add(fas, fab)
  }
})