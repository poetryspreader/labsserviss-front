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
    <div class="form__wrapper">
      <div
          v-for="(field, index) in formFields"
          :key="index"
          class="form__item"
      >

        <input
            v-if="field.name === 'date-and-time'"
            class="form__item-input date"
            :type="field.type"
            :placeholder="chosenDate ?? $t(`${field.placeholder}`)"
            @click="toggleDatePicker"
            readonly
        />
        <div v-else-if="field.name === 'staff-needed'">
          <v-select
            class="form-select"
            v-model="selectedStaff"
            :items="staffOptions"
            :label="$t('request-form.input-placeholders.staff-needed')"
            multiple=""
            @update:modelValue="updateStaffOptionsValue"
          ></v-select>
        </div>
        <input
            v-else
            v-model="field.value"
            class="form__item-input"
            :type="field.type"
            :placeholder="field.value ? field.value : $t(`${field.placeholder}`)"
        >
        <font-awesome-icon
            class="form__item-icon"
            aria-hidden="true"
            :icon="field.icon"
        />
      </div>
    </div>
    <main-btn :width="'80%'" :title="'order-btn'" />
    <v-date-picker
      v-if="showDatePicker"
      v-model="date"
      class="form__date-picker"
      @click:save="toggleDatePicker"
      @click:cancel="toggleDatePicker"
      @update:modelValue="updateDateValue"
    >
    </v-date-picker>
  </form>
</template>

<script>
import MainBtn from "@/components/MainBtn.vue";
import { VDatePicker } from 'vuetify/labs/VDatePicker'
import { ref } from 'vue'
export default {
  components: {
    MainBtn, VDatePicker
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
      ],
      selectedStaff: [],
      staffOptions: [
        this.$t('navigation.waiters'),
        this.$t('navigation.bar-tenders'),
        this.$t('navigation.cooks'),
        this.$t('navigation.hostesses'),
        this.$t('navigation.dishwashers')
      ],
      showDatePicker: false,
      date: ref([new Date()]),
      chosenDate: null
    }
  },
  methods: {
    ref,
    async handleSubmit() {
      const formData = this.formFields.map((field) => 
      `${this.$t(field.placeholder)}: ${field.value}`).join('$');

      await fetch('index.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/html',
        },
        body: formData,
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
    },
    toggleDatePicker() {
      this.showDatePicker = !this.showDatePicker;
    },
    updateDateValue(newDate) {
      this.chosenDate = newDate[0].toLocaleDateString("en-GB")
      this.formFields[1].value = newDate[0].toLocaleDateString("en-GB");
    },
    updateStaffOptionsValue() {
      console.log(this.selectedStaff)
      this.formFields[3].value = this.selectedStaff.join(', ')
    }
  },
};
</script>
<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  margin: 50px 0 0 0;
  font-size: 30px;
  text-align: center;
  width: 50%;
  height: 100%;
  &__wrapper {
    width: 100%;
    margin: 0 0 30px 0;
  }
  &__title {
    margin: 0 0 30px 0;
  }
  &__item {
    margin: 0 0 20px 0;
    position: relative;
    width: 100%;
    .date {
      cursor: pointer;
    }
    &-input {
      padding: 0 30px;
      width: 70%;
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
      right: 20%;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0.3;
      width: 30px;
      height: 30px;
    }
  }
  &__date-picker {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.9;
  }
}

// v-picker
.v-date-picker .v-date-picker-month .v-date-picker-month__day {
  .v-btn__overlay {
    border: 1px solid black;
    background-color: unset;
  }
  button {
    cursor: pointer;
  }
}

.v-picker__actions, .v-date-picker-controls, .v-date-picker-header__append, .v-date-picker-years__content {
  .v-btn__content {
    color: black;
    z-index: 1;
  }
  .v-btn__overlay {
    background-color: rgba(224, 224, 224, 0.6);
  }
  button {
    cursor: pointer;
  }
}

// v-select
.v-select .v-field .v-field__input > input, .v-text-field .v-input__details, .v-field--variant-filled .v-field__overlay {
  display: none;
}

.v-input--horizontal {
  width: 70%;
  margin: 0 auto;
  border: 2px solid white;
  opacity: 0.3;
  border-radius: 35px;
}

.v-field--variant-filled .v-field__outline::before, .v-field--variant-underlined .v-field__outline::before,
.v-field--variant-filled .v-field__outline::after, .v-field--variant-underlined .v-field__outline::after {
  border: none;
}

.v-field--variant-filled.v-field--focused .v-field__overlay {
  background-color: transparent;
}

.v-menu > .v-overlay__content > .v-card, .v-menu > .v-overlay__content > .v-sheet, .v-menu > .v-overlay__content > .v-list {
  padding: 0;
}

.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line {
  .v-list-item__overlay {
    background-color: rgba(224, 224, 224, 0.6);
  }
  .v-list-item__content {
    z-index: 1;
  }
}

.v-selection-control__input::before {
  background-color: transparent;
}

@media (max-width: 650px) {
  .form {
    margin: 0;
    width: 100%;
  }
  .form__item {
    &-input {
      width: 80%;
      padding: 0 13px;
      font-size: 10px;
      &::placeholder {
        font-size: 14px;
      }
    }
    &-icon {
      right: 15%;
    }
  }
  .v-input--horizontal {
    width: 80%;
  }
}

@media (min-width: 650px) {
  .form {
    margin: 0;
    width: 60%;
  }
  .form__item {
    &-input {
      width: 85%;
    }
    &-icon {
      right: 15%;
    }
  }
  .v-input--horizontal {
    width: 85%;
  }
}

@media (min-width: 1060px) {
  .form__title {
    max-width: 300px;
  }
}

@media (min-width: 1300px) {
  .form__title {
    max-width: 600px;
  }
}
</style>