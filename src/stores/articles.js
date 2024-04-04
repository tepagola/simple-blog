import { defineStore } from "pinia";

export const useArticlesStore = defineStore('articles', {
    state: () => ({
        articles: [
            { 
              title: 'Empezando con VueJs', 
              description: 'En este artículo se muestra un manual de cómo crear un proyecto con VueJs.', 
              content: '<p>Vue.js es un framework progresivo para construir interfaces de usuario. A diferencia de otros frameworks monolíticos, Vue está diseñado desde cero para ser adoptado incrementalmente.</p><p>La biblioteca central se enfoca solo en la capa de vista y es fácil de recoger e integrar con otras bibliotecas o proyectos existentes. Por otro lado, Vue también es perfectamente capaz de potenciar sofisticadas Single-Page Applications cuando se utiliza en combinación con herramientas modernas y librerías de apoyo.</p>', 
              slug: 'empezando-con-vuejs' 
            },
            { 
              title: 'VueJs vs React', 
              description: 'En el siguiente artículo se describen las diferencias e igualdades entre Vue y React con el fin de ayudar a una mejor elección.', 
              content: '<p>Tanto Vue.js como React son excelentes elecciones para construir interfaces de usuario dinámicas. Vue, creado por Evan You, ofrece una integración más sencilla y una curva de aprendizaje más suave. React, mantenido por Facebook, destaca por su amplio ecosistema y su rendimiento.</p><p>Ambos frameworks tienen sus propios méritos y la elección entre ellos dependerá de las preferencias personales del desarrollador, las necesidades específicas del proyecto y la experiencia previa del equipo de desarrollo.</p>', 
              slug: 'vuejs-vs-react' 
            },
            { 
              title: 'Introducción a Vuex', 
              description: 'Este artículo profundiza en el manejo de estado con Vuex en aplicaciones Vue.', 
              content: '<h2>¿Qué es Vuex?</h2><p>Vuex es un patrón de manejo de estado + biblioteca para aplicaciones Vue.js. Sirve como un almacén centralizado para todos los componentes en una aplicación, con reglas que aseguran que el estado solo pueda ser mutado de manera predecible.</p><h3>Conceptos clave</h3><ul><li>Estado</li><li>Getters</li><li>Mutaciones</li><li>Acciones</li><li>Módulos</li></ul>', 
              slug: 'introduccion-a-vuex' 
            },
            { 
              title: 'Rutas Dinámicas en Vue Router', 
              description: 'Exploramos cómo manejar rutas dinámicas en aplicaciones Vue con Vue Router.', 
              content: '<p>Vue Router permite definir rutas dinámicas mediante parámetros. Estos son segmentos de la URL que se tratan como variables, permitiendo que una misma plantilla de ruta sea reutilizada con diferentes datos.</p><code>&lt;RouterLink :to="`/user/${userId}`"&gt;Perfil&lt;/RouterLink&gt;</code><p>Este enfoque es fundamental para crear aplicaciones de página única (SPA) que requieren navegación entre diferentes componentes sin recargar la página.</p>', 
              slug: 'rutas-dinamicas-en-vue-router' 
            }
        ]
    }),
    actions: {
        addArticle(article){
            this.articles.push(article);
        }
    }
});
