<template>
  <default-layout>
    <div class="contacts">
      <RequestForm />
      <div class="info">
        <div class="info__title">
          {{ $t('request-form.titles.contacts') }}
        </div>
        <img
          class="info__image"
          src="../assets/images/message.png"
          alt="message"
        >
        <div class="info__contacts">
          <div>
            <font-awesome-icon
              class="info__icon"
              aria-hidden="true"
              icon="fa-solid fa-phone"
            />
            +371 26235676
          </div>
          <div class="info__email">
            <font-awesome-icon
                class="info__icon"
                aria-hidden="true"
                icon="fa-solid fa-envelope"
            />
            valerija@labsserviss.com
          </div>
        </div>
      </div>
    </div>
  </default-layout>
</template>
<script>
import DefaultLayout from "@/components/layouts/default.vue";
import RequestForm from "@/components/RequestForm.vue";
export default {
  components: {
    DefaultLayout, RequestForm
  }
}
</script>
<style lang="scss">
.contacts {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: calc(100vh - 150px);
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 55%;
    border-left: 2px solid rgba(255, 255, 255, 0.8);
    text-align: center;
    height: 100%;
    &__title {
      font-size: 30px;
    }
    &__image {
      opacity: 0.65;
      width: 300px;
      height: 300px;
    }
    &__contacts {
      display: flex;
      border: 2px solid rgba(255, 255, 255, 0.8);
      padding: 12px 50px;
      border-radius: 25px;
      font-size: 20px;
    }
    &__icon {
      margin: 0 7px 0 0;
      scale: 1;
    }
    &__email {
      margin: 0 0 0 40px;
      text-transform: uppercase;
    }
  }
}

@media (max-width: 930px) {
  .contacts {
    flex-direction: column;
    justify-content: flex-start;
    margin: 50px 0 0 0;
    .info {
      border-top: 2px solid rgba(255, 255, 255, 0.4);
      width: 100%;
      border-left: none;
      padding: 20px 0;
      margin: 50px 0 0 0;
      &__title {
        font-size: 20px;
      }
      &__contacts {
        border: none;
        flex-direction: column;
        padding: 10px;
      }
      &__email {
        margin: 0;
        font-size: 17px;
      }
    }
  }
}

@media (min-width: 930px) {
  .contacts {
    .info {
      width: 75%;
      &__contacts {
        padding: 12px 22px;
        flex-direction: column;
      }
      &__email {
        margin: 0;
      }
    }
  }
}
@media (min-width: 1150px) {
  .contacts {
    .info {
      &__contacts {
        padding: 12px 50px;
      }
    }
  }
}
@media (min-width: 1500px) {
  .contacts {
    .info {
      width: 80%;
      padding: 0 0 0 40px;
      &__contacts {
        flex-direction: row;
      }
      &__email {
        margin: 0 0 0 40px;
      }
    }
  }
}
</style>