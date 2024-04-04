<template>
    <div class="row">
        <div class="col-6 border-bottom mb-5" v-for="article in articles" :key="article.title">
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
            <RouterLink :to="`/article/${ article.slug }`">Leer más</RouterLink>
        </div>
    </div>
    <NewArticle></NewArticle>
</template>

<script>
    import NewArticle from "@/components/NewArticle.vue";
    import { useArticlesStore } from "@/stores/articles";
    import { computed, defineComponent } from "vue";

    export default defineComponent({
        components: { NewArticle },
        setup() {
            const store = useArticlesStore();
            const articles = computed(() => store.articles);

            return {
                articles
            };
        }
    });
</script>