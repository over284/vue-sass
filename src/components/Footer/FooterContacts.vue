<template>
<div class="col">
    <h3 class="footer__title">Контакты</h3>
    <ul class="footer__list">
        <li>
            <p>240 Central Park, London OR 10019</p>
        </li>
        <li class="footer__list_phones">
            <p>Freephone: +1 800 599 6580</p>
            <p>Telephone: +1 959 603 6035</p>
            <p>FAX: +1 800 559 6580</p>
        </li>
        <li>
            <a class="footer__link footer__link_red footer__link_underline" href="mailto:info@jksite.com" target="_blank">
                <p>info@jksite.com</p>
            </a>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    props: {
        footerMenuClient: {
            type: Array,
            required: true
        }
    }
}
</script>
