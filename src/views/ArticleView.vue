<template>
    <div class="row">
        <div class="col-12">
            <h1>{{ article.title }}</h1>
            <div v-html="article.content"></div>
        </div>
    </div>
</template>

<script>
import { useArticlesStore } from "@/stores/articles";
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
    setup() {
        const route = useRoute();
        const article = ref({title: '', content: ''}); // Creamos el artículo vacío.
        const store = useArticlesStore();

        onMounted(() => {
            const slug = route.params.slug; // Cogemos el slug de la url.
            const foundArticle = store.articles.find(a => a.slug === slug);
            if(foundArticle){
                article.value = foundArticle; // Sustituimos el artículo vacio por el artículo encontrado.
            }
        });

        return {
            article
        };
    }
});
</script>