<template>
<div class="gamespage">
    <div class="container" v-if="popular">
        <h1 class="game-title">{{ popular.title }}</h1>
        <div class="gamespage__desc">

            <img :src="require(`/Users/vadst/OneDrive/Рабочий стол/JavaScript/vue-sass/src/assets/img/galery/popular/${popular.image}.jpg`)" class="gamespage__img" :alt="popular.title">

            <div class="gamespage__rightlist">
                <div class="section">
                    <p class="section__title">Дата выхода:</p>
                    <p class="section__description">{{ popular.date }}</p>
                </div>
                <div class="section">
                    <p class="section__title">Жанр:</p>
                    <p class="section__description">{{ popular.genre }}</p>
                </div>
                <div class="section">
                    <p class="section__title">Цена:</p>
                    <p class="section__description">${{ popular.price }}{{ popular.platform }}</p>
                </div>
                <div class="section">
                    <p class="section__title">Разработчик:</p>
                    <p class="section__description">{{ popular.developer }}</p>
                </div>
                <div class="section">
                    <p class="section__title">Описание:</p>
                    <p class="section__description">{{ popular.description }}</p>
                </div>

            </div>
        </div>

    </div>
</div>
</template>

    
<script>
import {
    popularData1
} from '@/data/data.popular';

export default {
    name: 'popularGames',
    components: {},
    data() {
        return {
            popular: null
        }
    },
    created() {
        const popular = popularData1.find(popular => popular.id == this.$route.params.id)
        if (popular) {
            this.popular = popular
        }
    },

    props: {
        popularData1: {
            type: Array,
            default: () => [],
        }
    },

}
</script>
