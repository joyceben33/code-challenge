declare module '*.vue' {
    import { Component } from 'vue'
    const component: Component
    export default component
  }

declare module 'vuetify/lib' {
    import 'vuetify/types/lib'  
}
