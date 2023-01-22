<template>
    <div class="gamespage">
        <div class="container" v-if="newgames">
            <h1 class="game-title">{{ newgames.title }}</h1>
            <div class="gamespage__desc">
    
                <img :src="require(`/Users/vadst/OneDrive/Рабочий стол/JavaScript/vue-sass/src/assets/img/galery/new/${newgames.image}.jpg`)" class="gamespage__img" :alt="newgames.title">
    
                <div class="gamespage__rightlist">
                    <div class="section">
                        <p class="section__title">Дата выхода:</p>
                        <p class="section__description">{{ newgames.date }}</p>
                    </div>
                    <div class="section">
                        <p class="section__title">Жанр:</p>
                        <p class="section__description">{{ newgames.genre }}</p>
                    </div>
                    <div class="section">
                        <p class="section__title">Цена:</p>
                        <p class="section__description">${{ newgames.price }}{{ newgames.platform }}</p>
                    </div>
                    <div class="section">
                        <p class="section__title">Разработчик:</p>
                        <p class="section__description">{{ newgames.developer }}</p>
                    </div>
                    <div class="section">
                        <p class="section__title">Описание:</p>
                        <p class="section__description">{{ newgames.description }}</p>
                    </div>
    
                </div>
            </div>
    
        </div>
    </div>
    </template>
    
    <script>
import {
    newData1
} from '@/data/data.new';
    
    export default {
        name: 'newGames',
        components: {},
        data() {
            return {
                newgames: null
            }
        },
        created() {
            const newgames = newData1.find(newgames => newgames.id == this.$route.params.id)
            if (newgames) {
                this.newgames = newgames
            }
        },
    
        props: {
            newData1: {
                type: Array,
                default: () => [],
            }
        },
    
    }
    </script>
    
    