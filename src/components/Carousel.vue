<template>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-interval="false">
    <ol class="carousel-indicators home__carousel-indicators">
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="../assets/img/galery/gta5.jpg" class="d-block w-100" alt="" />
            <div class="carousel-caption d-none d-md-block">
                <h5>Популярные игры</h5>
                <p>Самые интересные и популярные игры за последнее время</p>
                <button type="button" class="btn btn-outline-light" @click="$router.push({name: 'popular'})">MORE INFO</button>
            </div>
        </div>
        <div class="carousel-item">
            <img src="../assets/img/galery/callisto.jpg" class="d-block w-100" alt="" />
            <div class="carousel-caption d-none d-md-block">
                <h5>Свежие релизы</h5>
                <p>Здесь собран список новых игр для разных платформ</p>
                <button type="button" class="btn btn-outline-light" @click="$router.push({name: 'new'})">MORE INFO</button>
            </div>
        </div>
        <div class="carousel-item">
            <img src="../assets/img/galery/hogwarts.jpg" class="d-block w-100" alt="" />
            <div class="carousel-caption d-none d-md-block">
                <h5>Игровые анонсы</h5>
                <p>Здесь собраны самые ожидаемые игры для всех актуальных игровых платформ</p>
                <button type="button" class="btn btn-outline-light" @click="$router.push({name: 'waiting'})">MORE INFO</button>
            </div>
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </a>
</div>
</template>

<style lang="scss">
.home {
    &__carousel-indicators {
        bottom: 160px;
    }
}

.carousel-item,
h5 {
    font-weight: bold;
    font-size: 20px;
    text-shadow:
        2px 2px 2px #020001,
        0 2px 2px #020001,
        -2px 0 2px #020001,
        0 -2px 2px #020001
}

.btn-outline-light {
    font-weight: bold;
    font-size: 20px;
}

.d-block {
    height: 700px;

    object-fit: cover;
}
</style>
