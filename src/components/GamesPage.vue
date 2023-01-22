<template>
<div class="gamespage">
    <div class="container" v-if="property">
        <h1 class="game-title">{{ property.title }}</h1>
        <div class="gamespage__desc">

            <img :src="require(`/Users/vadst/OneDrive/Рабочий стол/JavaScript/vue-sass/src/assets/img/galery/${property.image}.jpg`)" class="gamespage__img" :alt="property.title">

            <div class="gamespage__rightlist">
                <div class="section">
                    <p class="section__title">Дата выхода:</p>
                    <p class="section__description">{{ property.date }}</p>
                </div>
                <div class="section">
                    <p class="section__title">Жанр:</p>
                    <p class="section__description">{{ property.genre }}</p>
                </div>
                <div class="section">
                    <p class="section__title">Цена:</p>
                    <p class="section__description">${{ property.price }}{{ property.platform }}</p>
                </div>
                <div class="section">
                    <p class="section__title">Разработчик:</p>
                    <p class="section__description">{{ property.developer }}</p>
                </div>
                <div class="section">
                    <p class="section__title">Описание:</p>
                    <p class="section__description">{{ property.description }}</p>
                </div>

            </div>
        </div>

    </div>
</div>
</template>

<script>
import {
    propertiesData
} from '../data/data.dummy'

export default {
    name: 'propertyPage',
    components: {},
    data() {
        return {
            property: null
        }
    },
    created() {
        const property = propertiesData.find(property => property.id == this.$route.params.id)
        if (property) {
            this.property = property
        }
    },

    props: {
        propertiesData: {
            type: Array,
            default: () => [],
        }
    },

}
</script>
