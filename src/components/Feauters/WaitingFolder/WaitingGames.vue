<template>
    <div class="gamespage">
        <div class="container" v-if="waiting">
            <h1 class="game-title">{{ waiting.title }}</h1>
            <div class="gamespage__desc">
    
                <img :src="require(`/Users/vadst/OneDrive/Рабочий стол/JavaScript/vue-sass/src/assets/img/galery/waiting/${waiting.image}.jpg`)" class="gamespage__img" :alt="waiting.title">
    
                <div class="gamespage__rightlist">
                    <div class="section">
                        <p class="section__title">Дата выхода:</p>
                        <p class="section__description">{{ waiting.date }}</p>
                    </div>
                    <div class="section">
                        <p class="section__title">Жанр:</p>
                        <p class="section__description">{{ waiting.genre }}</p>
                    </div>
                    <div class="section">
                        <p class="section__title">Цена:</p>
                        <p class="section__description">${{ waiting.price }}{{ waiting.platform }}</p>
                    </div>
                    <div class="section">
                        <p class="section__title">Разработчик:</p>
                        <p class="section__description">{{ waiting.developer }}</p>
                    </div>
                    <div class="section">
                        <p class="section__title">Описание:</p>
                        <p class="section__description">{{ waiting.description }}</p>
                    </div>
    
                </div>
            </div>
    
        </div>
    </div>
    </template>
    
    <script>
import {
    waitingData1
} from '@/data/data.waiting';
    
    export default {
        name: 'waitingGames',
        components: {},
        data() {
            return {
                waiting: null
            }
        },
        created() {
            const waiting = waitingData1.find(waiting => waiting.id == this.$route.params.id)
            if (waiting) {
                this.waiting = waiting
            }
        },
    
        props: {
            waitingData1: {
                type: Array,
                default: () => [],
            }
        },
    
    }
    </script>
    
    