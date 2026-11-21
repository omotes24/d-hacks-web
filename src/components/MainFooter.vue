<template>
  <footer class="footer">
    <div class="footer__joinus" v-if="$route.path !== '/joinus'">
      <RouterLink to="/joinus" class="footer__joinus__item">
        <span class="footer__joinus__label">{{ fiscalYear }}年度 研究会の新規履修のご案内</span>
        <span class="footer__joinus__arrow" aria-hidden="true">→</span>
      </RouterLink>
    </div>
    <div class="footer__bottom">
      <span class="footer__logo" aria-hidden="true">
        <img class="footer__mark" src="@/assets/mark.png" alt="" width="26" height="26" />
        <img class="footer__word" src="@/assets/wordmark.png" alt="" width="70" height="13" />
      </span>
      <div class="footer__meta">
        <p><a href="https://www.jn.sfc.keio.ac.jp/" target="_blank" rel="noopener">Nakazawa &amp; Okoshi Lab.</a></p>
        <p>Copyright © d-hacks web All Rights Reserved.</p>
        <p v-if="prototype">このページはデザイン検討用の試作です。公式サイトは <a href="https://d-hacks.jn.sfc.keio.ac.jp/">d-hacks.jn.sfc.keio.ac.jp</a> です。</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const fiscalYear = computed(() => {
  const now = new Date()
  return now.getFullYear()
})

const prototype = import.meta.env.VITE_PROTOTYPE === '1'
</script>

<style lang="scss">
.footer {
  &__joinus {
    padding: calc(var(--u) * 3) var(--gutter) 0;

    &__item {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: baseline;
      gap: 0 24px;
      padding: calc(var(--u) * 0.9) 0;
      border-top: 1px solid var(--ink);
      border-bottom: 1px solid var(--rule);

      &:hover .footer__joinus__label,
      &:focus-visible .footer__joinus__label {
        color: var(--brand);
      }

      &:hover .footer__joinus__arrow,
      &:focus-visible .footer__joinus__arrow {
        transform: translateX(4px);
      }
    }

    &__arrow {
      color: var(--brand);
      transition: transform 0.25s;
    }
  }

  &__bottom {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: var(--u) 40px;
    padding: calc(var(--u) * 3) var(--gutter) calc(var(--u) * 1.5);
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__mark {
    width: 26px;
    height: 26px;
  }

  &__word {
    height: 13px;
    width: auto;
  }

  &__meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    color: var(--dim);

    a {
      color: var(--ink);
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 5px;

      &:hover {
        color: var(--brand);
      }
    }
  }
}

@media (max-width: 640px) {
  .footer__meta {
    align-items: flex-start;
    text-align: left;
  }
}
</style>
