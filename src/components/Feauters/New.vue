<template>
<div class="new">
    <div class="container">
        <div class="row">
            <div class="col">
                <h2 class="new__h2">
                    <b>Новинки</b>
                </h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-sm-12" v-for="newgames in newData1" :key="newgames.id">
                <router-link :to="{ name: 'newGames', params: {id: newgames.id}}" class="more-info">
                    <button class="new__col">
                        <img :src="require(`/Users/vadst/OneDrive/Рабочий стол/JavaScript/vue-sass/src/assets/img/galery/new/${newgames.image}.jpg`)" :alt="newgames.title" class="new__img">
                        <h4 class="new__h4">{{ newgames.title }}</h4>

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
    newData1
} from '@/data/data.new';

export default {
    name: 'newgames',
    components: {},
    data() {
        return {
            newData1: newData1,
        }
    },
    props: {
        newgames: {
            type: Object
        }

    }
}
</script>

<style lang="scss">
.new {
    text-align: center;

    ul {
        list-style: none;
        padding-left: 0;
        margin-bottom: 0;
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
        text-decoration: none;
        border: 1px solid #e6e6e6;
        padding: 0;
        max-width: 365px;
        width: 100%;
        margin-bottom: 30px;

        &:hover {
            background: #e6e6e6;
            color: #e2574c;
        }

        p {
            margin: 0;
        }
    }

    &__subtitle {
        max-width: 560px;
        margin: 0 auto;
        padding-bottom: 70px;
        font-weight: bold;
    }

    &__img {
        width: 100%;
        min-height: 450px;
        max-height: 450px;
        object-fit: fill;
        padding-bottom: 30px;
    }

    &__h4,
    &__sub {
        padding-bottom: 20px;
    }

    &__h4 {
        font-size: 20px;
        font-weight: bold;
    }

    &__sub {
        font-size: 15px;
    }

    &__price {
        padding-bottom: 30px;
        font-weight: bold;
        color: #e2574c;
    }

    &__desc,
    &__sub {
        color: #797979;
    }

    &__desc {
        display: flex;
        justify-content: center;
        padding: 15px 0;
        border-top: 1px solid #e6e6e6;
        font-size: 13px;
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
