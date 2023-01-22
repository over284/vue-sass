<template>
<div class="contacts">
    <div class="container">
        <div class="row">
            <div class="col">
                <h2 class="contacts__h2">
                    <b>Контакты</b>
                </h2>
                <div class="contacts__subtitle">
                    Обратная связь
                </div>
            </div>
        </div>
        <div class="topic-text">Отправьте нам сообщение</div>
        <div class="contacts__feedback">

            <form action="#">
                <div class="input-box">
                    <input type="text" placeholder="Ваше имя" />
                </div>
                <div class="input-box">
                    <input type="text" placeholder="Введите email" />
                </div>
                <div class="input-box">
                    <input type="text" placeholder="Тема сообщения" />
                </div>
                <div class="input-box message-box">
                    <textarea placeholder="Сообщение"></textarea>
                </div>
                <div class="button">
                    <input type="button" value="Отправить" />
                </div>
            </form>

            <div class="contacts__rightlist">
                <div class="contacts__icons">
                    <a href="https://instagram.com/vadim_st_vadim/" target="_blank"><img src="../assets/img/icons/icons8-instagram-24.png" alt=""></a>
                    <a href="https://t.me/Vad3x" target="_blank"><img src="../assets/img/icons/icons8-телеграмма-app-24.png" alt=""></a>
                    <a href="https://github.com/over284" target="_blank"><img src="../assets/img/icons/icons8-github-24.png" alt=""></a>
                    <a href="https://vk.com/id32547665" target="_blank"><img src="../assets/img/icons/icons8-vk-в-круге-24.png" alt=""></a>
                </div>

                <ul class="contacts__list">
                    <li>
                        <p>240 Central Park, London OR 10019</p>
                    </li>
                    <li class="contacts__list_phones">
                        <p>Freephone: +1 800 599 6580</p>
                        <p>Telephone: +1 959 603 6035</p>
                        <p>FAX: +1 800 559 6580</p>
                    </li>
                    <li>
                        <a class="contacts__link contacts__link_red contacts__link_underline" href="mailto:info@jksite.com" target="_blank">
                            <p>info@jksite.com</p>
                        </a>
                    </li>
                </ul>
                
            </div>
        </div>

    </div>
</div>
</template>

<script>
export default {
    name: 'contacts',
    components: {}
}
</script>
