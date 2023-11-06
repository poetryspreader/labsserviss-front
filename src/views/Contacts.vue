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
  justify-content: space-between;
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 50px 0 0 0;
    width: 57%;
    border-left: 2px solid rgba(255, 255, 255, 0.8);
    text-align: center;
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

@media (max-width: 420px) {
  .contacts {
    flex-direction: column;
    .info {
      border-top: 2px solid rgba(255, 255, 255, 0.4);
      width: 100%;
      border-left: none;
      padding: 20px 0;
      margin: 40px 0 0 0;
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
</style>