<template>
  <header class="header">
    <RouterLink to="/" class="header__brand" aria-label="d-hacks">
      <img src="@/assets/wordmark.png" alt="d-hacks" width="102" height="19" />
    </RouterLink>
    <nav aria-label="メインメニュー">
      <ul class="header__items">
        <li v-for="item in items" :key="item.path">
          <RouterLink
            :to="item.path"
            class="header__item"
            :class="{ header__item__active: $route.path === item.path }"
            >{{ item.name }}</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const items: {
  name: string
  path: string
}[] = [
  {
    name: 'Research',
    path: '/about'
  },
  {
    name: 'Publications',
    path: '/publications'
  },
  {
    name: 'Members',
    path: '/members'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
]
</script>

<style lang="scss">
.header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px 24px;
  min-height: calc(var(--u) * 2.6);
  padding: calc(var(--u) * 0.8) var(--gutter);
  background: var(--brand);
  color: var(--on-brand);

  &__brand img {
    height: 19px;
    width: auto;
    filter: brightness(0) invert(1);
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    gap: 0 clamp(16px, 2.4vw, 30px);
  }

  &__item {
    color: var(--on-brand-dim);
    transition: color 0.2s;

    &:hover,
    &:focus-visible,
    &__active {
      color: var(--on-brand);
    }

    &__active {
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 6px;
    }
  }
}
</style>
