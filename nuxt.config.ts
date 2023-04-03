// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
modules: ['@nuxtjs/tailwindcss'],
app: {
    head: {
        title: 'W3ST-COAST',
        meta: [
            {name: 'description', content: 'W3ST COAST ON THE MOVE'}
        ],
        link: [
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
        ]
    }
},
runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
}
})
