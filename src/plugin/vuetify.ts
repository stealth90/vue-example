import { createVuetify } from "vuetify";
// Vuetify
import "vuetify/styles";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { fa } from "vuetify/iconsets/fa";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default createVuetify({
  display:{
    mobileBreakpoint: "md",
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
      fa,
    },
  },
  components,
  directives,
});
