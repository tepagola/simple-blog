<template>
    <div class="modal fade" id="newArticleModal" tabindex="-1" aria-labelledby="newArticleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="newArticleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-6">
                            <label for="title" class="form-label">Título</label>
                            <input type="text" name="title" id="title" class="form-control" v-model="title">
                        </div>
                        <div class="col-6">
                            <label for="slug" class="form-label">Slug</label>
                            <input type="text" name="slug" id="slug" class="form-control" v-model="slug">
                        </div>
                        <div class="col-12">
                            <label for="description" class="form-label">Descripción</label>
                            <textarea name="description" id="description" class="form-control" cols="30" rows="10" v-model="description"></textarea>
                        </div>
                        <div class="col-12">
                            <label for="content" class="form-label">Contenido</label>
                            <textarea name="content" id="content" class="form-control" cols="30" rows="10" v-model="content"></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="saveArticle">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useArticlesStore } from "@/stores/articles";
import { ref } from "vue";

const title = ref('');
const slug = ref('');
const description = ref('');
const content = ref('');

const store = useArticlesStore();

const saveArticle = () => {
    const article = {
        title: title.value,
        slug: slug.value,
        description: description.value,
        content: content.value,
    }

    store.addArticle(article);

    title.value = '';
    slug.value = '';
    description.value = '';
    content.value = '';
}
</script>