<template>
  <form
    class="form"
    accept-charset="UTF-8"
    @submit.prevent="handleSubmit"
    action="../../../labsserviss-core/index.php"
    method="post"
  >
    <div class="form__title">
      {{ $t('request-form.titles.order') }}
    </div>
    <div
      v-for="(field, index) in formFields"
      :key="index"
      class="form__item"
    >
      <input
        v-model="field.value"
        class="form__item-input"
        :name="field.name"
        :type="field.type"
        :placeholder="$t(`${field.placeholder}`)"
      />
      <font-awesome-icon
          class="form__item-icon"
          aria-hidden="true"
          :icon="field.icon"
      />
    </div>
    <main-btn :width="'80%'" :title="'order-btn'" />
  </form>
</template>

<script>
import MainBtn from "@/components/MainBtn.vue";

export default {
  components: {
    MainBtn
  },
  data() {
    return {
      formFields: [
        {
          value: '',
          type: 'text',
          placeholder: 'request-form.input-placeholders.event',
          name: 'event',
          icon: 'fa-solid fa-cake-candles',
        },
        {
          value: '',
          type: 'text',
          placeholder: 'request-form.input-placeholders.date-and-time',
          name: 'date-and-time',
          icon: 'fa-solid fa-calendar-days',
        },
        {
          value: '',
          type: 'text',
          placeholder: 'request-form.input-placeholders.guest-number',
          name: 'guest-number',
          icon: 'fa-solid fa-users',
        },
        {
          value: '',
          type: 'text',
          placeholder: 'request-form.input-placeholders.staff-needed',
          name: 'staff-needed',
          icon: 'fa-solid fa-address-card',
        },
        {
          value: '',
          type: 'text',
          placeholder: 'request-form.input-placeholders.your-contacts',
          name: 'your-contacts',
          icon: 'fa-solid fa-address-book',
        }
      ]
    };
  },
  methods: {
    async handleSubmit() {
      const formData = this.formFields.map((field) => `${this.$t(field.placeholder)}: ${field.value}`).join('\n');

      const encoder = new TextEncoder();

      await fetch('index.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain; charset=utf-8"',
        },
        body: encoder.encode(formData),
      })
          .then((response) => response)
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error('Error:', error.json());
          });

      this.formFields.forEach((field) => {
        field.value = '';
      });
    },
    imageUrl(imageName) {
      return new URL(`../assets/images/form/${imageName}.png`, import.meta.url).href;
    }
  },
};
</script>
<style lang="scss">
.form {
  margin: 50px 0 0 0;
  font-size: 30px;
  text-align: center;
  max-width: 600px;
  &__title {
    margin: 0 0 30px 0;
  }
  &__item {
    margin: 0 0 20px 0;
    position: relative;
    width: 100%;
    &-input {
      padding: 0 30px;
      width: 80%;
      height: 60px;
      border: 2px solid var(--main-color-white);
      border-radius: 35px;
      background-color: transparent;
      color: white;
      opacity: 0.3;
      font-size: 20px;
      &::placeholder {
        color: white;
        font-size: 18px;
        font-weight: 700;
        opacity: 1;
      }
      &:focus {
        outline: none;
        border: 2px solid var(--main-color-white);
        opacity: 1;
      }
    }
    &-icon {
      position: absolute;
      right: 15%;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0.3;
      width: 30px;
      height: 30px;
    }
  }
}
@media (max-width: 420px) {
  .form__item {
    &-input {
      padding: 0 13px;
      font-size: 10px;
      &::placeholder {
        font-size: 14px;
      }
    }
  }
}
</style>