import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "INFORM EN ESPAÑOL",
  description: "INFORM Centro de documentación",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: {
      '/infsp6/':[
      {
        text: 'Inform 6',
        items: [
          { text: 'Ruta de aprendizaje', link: '/infsp6/' }          
        ]
      }
    ],
    '/infsp7/':[
      {
        text: 'Inform 7',
        items: [
          { text: 'Comenzando', link: '/infsp7/' }          
        ]
      }
    ]

    },

    outlineTitle: 'En esta página:',
    returnToTopLabel: 'Volver arriba',
    logo: '/Logo_infspB.jpg',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sarganar/I7-Spanish' }
    ]
  },
  base:'/infsp-docs/',
})
