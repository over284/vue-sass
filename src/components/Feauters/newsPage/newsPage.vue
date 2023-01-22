<template>
<div class="newspage">
    <div class="container" v-if="news">
        <h1 class="news-title">{{ news.title }}</h1>
        <div class="newspage__col">
            <div class="newspage__desc">
                <img :src="require(`/Users/vadst/OneDrive/Рабочий стол/JavaScript/vue-sass/src/assets/img/galery/news/${news.image}.jpg`)" :alt="news.title" class="newspage__img">
                <div class="newspage__date">{{ news.date }}</div> 
                <div class="newspage__info">{{ news.info1 }}</div>
                <div class="newspage__info">{{ news.info2 }}</div>
                <div class="newspage__info">{{ news.info3 }}</div>
            </div>
            
        </div>

    </div>
</div>
</template>


<script>

import {
    newsData1
} from '/Users/vadst/OneDrive/Рабочий стол/JavaScript/vue-sass/src/data/data.news'

export default {
    name: 'newsPage',
    components: {},
    data() {
        return {
            news: null
        }
    },
    created() {
        const news = newsData1.find(news => news.id == this.$route.params.id)
        if (news) {
            this.news = news
        }
    },

    props: {
        newsData1: {
            type: Array,
            default: () => [],
        }
    },

}
</script>

<style lang="scss">
.newspage {

    .news-title {
        color: #000000;
        margin-top: 50px;
        margin-bottom: 30px;
        padding-bottom: 15px;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 3px;
            bottom: 0;
            left: 0;
            background: linear-gradient(90deg, #EB5804 0%, rgba(0, 0, 0, 0) 90%);
        }
    }

    &__col {
        display: flex;
        flex-direction: row;
        text-decoration: none;
        padding: 0;
        width: 100%;
        margin-bottom: 30px;

    }


    &__img {
        width: 550px;
        height: 300px;
        object-fit: fill;
        float: left;
        margin-right: 15px;
    }

    &__date {
        padding-top: 20px;
        padding-left: 20px;
        text-align: start;
        font-size: 20px;
        font-weight: bold;
    }

    &__info {
        padding-top: 20px;
        font-size: 20px;

        &:last-child {
            padding-bottom: 50px;
        }
    }

}
</style>
