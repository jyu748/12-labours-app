<template>
  <div class="item-card-container flex-box curved-box">
    <div class="item-card vertical-flex">
      <div class="item-card__image">
        <img :src="item.image.url" />
      </div>
      <div class="item-card__title display-ellipsis --2">
        <h3>{{ item.title }}</h3>
      </div>
      <div class="item-card__detail display-ellipsis --5">
        <span>
          {{ item.blurb }}
        </span>
      </div>
      <div class="item-card__button">
        <nuxt-link :to="{
          name: `${readMoreLink}-detail`,
          params: { detail: item.slug },
        }">
          <el-button>
            READ MORE
          </el-button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemCard",

  props: {
    item: {
      type: Object,
      default: {},
    },
    readMoreLink: {
      type: String,
      default: "",
    }
  },
};
</script>

<style scoped lang="scss">
.item-card-container {
  max-width: 20rem;
  width: 100%;
  height: 32rem;

  @media only screen and (min-width: $md-start) and (max-width: $md-end) {
    max-width: 14rem;
    height: 26rem;
  }

  @media only screen and (min-width: $viewport-lg) {
    max-width: 22rem;
    height: 33rem;
  }
}

.item-card {
  height: 100%;
  box-sizing: border-box;
  align-items: center;
  padding: 1.25rem 1.13rem 1.88rem 1.13rem;

  @media only screen and (min-width: $md-start) and (max-width: $md-end) {
    padding: 1rem;
  }

  &__image {
    display: block;

    img {
      width: 18rem;
      height: 13rem;

      @media only screen and (min-width: $md-start) and (max-width: $md-end) {
        width: 12rem;
        height: 10rem;
      }
    }
  }

  &__title {
    text-align: center;
    padding: 0.5rem 1.8rem;
    height: 2.8rem;
    margin-bottom: 0.5rem;

    @media only screen and (min-width: $md-start) and (max-width: $md-end) {
      font-size: 1.2rem;
    }
  }

  &__detail {
    text-align: center;
    padding: 0rem 0.19rem;
    max-width: 100%;
    //height:7.5rem;

    @media only screen and (min-width: $md-start) and (max-width: $md-end) {
      font-size: 1rem;
      line-height: 1.25rem;
      //height:6.2rem;
    }
  }

  &__button {
    margin-top: auto;
  }
}
</style>
