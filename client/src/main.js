import { createApp } from 'vue'
import App from './App.vue'

//vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark',
        theme: {
            dark: {
                dark: true,
                colors: {
                    primary: "#526D82",
                    secondary: "DDE6ED",
                    info: "#9DB2BF",
                    warning: "#D27685",
                    background: "#27374D",
                }
            }
        }
    }
})



createApp(App).use(vuetify).mount('#app')
