<template>
    <div :class="[back ? 'next' : 'back' ]">
        <!-- <p>slider</p> -->
        <transition name="slide">
            <slot></slot>
        </transition>
    </div>
</template>
<script>

export default {
    props : ['back']
}
</script>
<style>
    .next .slide-enter-from {
        transform: translateX(100%);
    }

    .next .slide-enter-to, .slide-leave-from {
        transform: translateX(0);
    }

    .next .slide-enter-active, .slide-leave-active {
        transition: all 1s;
    }
    .next .slide-leave-to {
        transform: translateX(-100%);
    }
    .back .slide-enter-from {
        transform: translateX(-100%);
    }

    .back .slide-enter-to, .slide-leave-from {
        transform: translateX(0);
    }

    .back .slide-enter-active, .slide-leave-active {
        transition: all 1s;
    }
    .back .slide-leave-to {
        transform: translateX(100%);
    }
</style>