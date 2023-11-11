<template>
  <div class="promo">
    <default-layout>
      <div class="promo__content">
        <div class="promo__pre-title">
          {{ $t('promo.pre-title') }}
        </div>
        <div class="promo__title">
          {{ $t('promo.title') }}
        </div>
        <div class="promo__description">
          {{ $t('promo.description') }}
        </div>
       <main-btn :title="'promo.start-btn'" :to="'/navigation'"/>
        <!-- <div class="coming-soon">
          <font-awesome-icon
              class="coming-soon__icon"
              aria-hidden="true"
              icon="fa-solid fa-person-digging"
          />
          <div class="coming-soon__title">
            coming soon!
          </div>
        </div> -->
      </div>
    </default-layout>
  </div>
</template>
<script>
import DefaultLayout from "@/components/layouts/default.vue";
import MainBtn from "@/components/MainBtn.vue";
export default {
  components: {
    DefaultLayout, MainBtn
  }
}
</script>
<style lang="scss">
.promo {
  min-height: 100vh;
  position: relative;
  background: url('../assets/images/restaurant.jpg') no-repeat 100%/cover;
  z-index: 2;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0a0a0a;
    opacity: 0.9;
  }
  &__content {
    margin: 180px 0 0 0;
    text-align: center;
    font-size: 40px;
    z-index: 1;
    a {
      margin: 80px 0 0 0;
    }
  }
  &__title {
    margin: 25px 0 0 0;
    font-size: 65px;
  }
  &__description {
    margin: 25px 0 0 0;
  }
}

.coming-soon__icon {
  scale: 3;
  margin: 70px 0 50px 0;
}

@media (max-width: 420px) {
  .promo {
    &__content {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      margin: 0;
    }

    &__pre-title {
      font-size: 30px;
    }

    &__title {
      font-size: 55px;
    }

    &__description {
      font-size: 25px;
    }
  }
}

@media only screen and (min-width: 420px) and (max-width: 670px) {
  .promo {
    &__pre-title {
      font-size: 27px;
    }

    &__title {
      font-size: 45px;
    }

    &__description {
      font-size: 20px;
      padding: 0 20px;
    }

    &__content {
      a {
        margin: 60px 0 0 0;
      }
    }
  }
}
</style>