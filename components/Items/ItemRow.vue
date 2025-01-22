<template>
  <div class="item-row-container">
    <div class="item-row">
      <div class="item-row__image">
        <img :src="item.image.url" />
      </div>
      <div class="item-row__info vertical-flex">
        <div class="item-row-title display-ellipsis --2">
          <nuxt-link :to="{
            name: `${linkName}-detail`,
            params: { detail: item.slug },
          }">
            <h4>{{ item.title }}</h4>
          </nuxt-link>
        </div>
        <div class="item-row-content">
          <span>
            {{ item.detail }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemRow",

  props: {
    item: {
      type: Object,
      default: {},
    },
    linkName: {
      type: String,
      default: "",
    }
  },
};
</script>

<style scoped lang="scss">
.item-row-container {
  display: flex;
}

.item-row {
  display: flex;
  column-gap: 1.5rem;

  @media only screen and (max-width: $viewport-sm) {
    flex-direction: column;
    row-gap: 1.5rem;
  }

  &__image {
    img {
      border-radius: 0.75rem;
      display: block;
      width: 15.5rem;
      height: 8.63rem;
      object-fit: cover;

      @media only screen and (max-width: $viewport-sm) {
        width: 70%;
        height: auto;
      }
    }
  }

  &__info {
    .item-row-title {
      a {
        text-decoration: none !important;
      }
    }

    .item-row-date {
      padding-top: 0.38rem;
      padding-bottom: 0.75rem;

      span {
        font-size: 0.88rem;
        line-height: 1.25rem;
      }
    }

    .item-row-content {
      text-align: justify;
      background-color: $cochlear;
    }
  }
}
</style>
