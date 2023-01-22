<template>
<div class="news">
    <div class="container">
        <div class="row">
            <div class="col">
                <h2 class="news__h2">
                    <b>Игровые новости</b>
                </h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12 align-self-start" v-for="news in newsData1" :key="news.id">
                <router-link :to="{ name: 'newsPage', params: {id: news.id}}" class="more-info">
                <button class="news__col">
                    <img :src="require(`/Users/vadst/OneDrive/Рабочий стол/JavaScript/vue-sass/src/assets/img/galery/news/${news.image}.jpg`)" :alt="news.title" class="news__img">
                    <div class="news__desc">
                        <h4 class="news__h4">{{ news.title }}</h4>
                        <div class="news__date">{{ news.date }}</div>
                    </div>
                </button>
            </router-link>
            </div>
        </div>
    </div>
    <nav aria-label="...">
        <ul class="pagination">
            <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Предыдущая</a>
            </li>
            <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
            <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Следующая</a>
            </li>
        </ul>
    </nav>
</div>
</template>

<script>
import {
    newsData1
} from '@/data/data.news';

export default {
    name: 'news',
    components: {},
    data() {
        return {
            newsData1: newsData1,
        }
    },
    props: {
        news: {
            type: Object
        }

    }
}
</script>

<style lang="scss">
.news {
    overflow-x: hidden;
    
    .more-info {
        text-decoration: none;
    }
    
    &__h2 {
        margin-top: 40px;
        text-align: center;
        padding-bottom: 40px;
        position: relative;
        margin-bottom: 30px;

        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 110px;
            height: 3px;
            background: #e2574c;
        }
    }

    &__col {
        display: flex;
        flex-direction: row;
        text-decoration: none;
        border: 1px solid #e6e6e6;
        padding: 0;
        width: 100%;
        margin-bottom: 30px;

        &:hover {
            background: #e6e6e6;
            color: #e2574c;
        }
    }

    &__img {
        max-width: 300px;
        object-fit: fill;
        
    }
    
    &__h4, &__date{
        padding-top: 20px;
        padding-left: 20px;
        text-align: start;
    }

    &__h4 {
        font-size: 20px;
        font-weight: bold;
        
    }
    .pagination {
        justify-content: center;
        font-weight: bold;
        padding-top: 20px;
        padding-bottom: 30px;
    }
}
</style>
