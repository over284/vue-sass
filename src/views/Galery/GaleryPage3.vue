<template>
    <div class="galery">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h2 class="galery__h2">
                        <b>Галерея</b>
                    </h2>
                    <div class="galery__subtitle">
                        Здесь размещены красивые илюстрации, арты, косплеи и прочие изображения из мира игр
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-12" v-for="galery in data" :key="galery.id">
                    <div class="galery__col">
                        <img :src="require(`/Users/vadst/OneDrive/Рабочий стол/JavaScript/vue-sass/src/assets/img/galery/галерея игр/${galery.image}.jpg`)" :alt="galery.title" class="galery__img">
                    </div>
                </div>
            </div>
        </div>
        <nav aria-label="...">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="/#/galery/2">Предыдущая</a>
                </li>
                <li class="page-item"><a class="page-link" href="/#/galery/2">2</a></li>
                <li class="page-item active" aria-current="page">
                    <a class="page-link" href="/#/galery/3">3</a>
                </li>
                <li class="page-item"><a class="page-link" href="/#/galery/4">4</a></li>
                <li class="page-item">
                    <a class="page-link" href="/#/galery/4">Следующая</a>
                </li>
            </ul>
        </nav>
    </div>
    </template>
    
    <script>
    import {
        galeryData3
    } from '@/data/data.galery';
    
    export default {
        name: 'Galery',
        components: {},
        data() {
            return {
                data: galeryData3,
            }
        },
    
    }
    </script>
    