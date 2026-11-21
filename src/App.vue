<script setup lang="ts">
import Header from '@/components/MainHeader.vue'
import Footer from '@/components/MainFooter.vue'
</script>

<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>

<style lang="scss">
:root {
  /* One sheet of paper under a flat field of the d-hacks blue. Every piece of text is
     set at one size; weight, rules and space carry the order. */
  --paper: #f3f1ec;
  --ink: #1c1a21;
  --dim: #6d6977;
  --rule: #d9d5cc;
  --brand: #2f6cad;
  --line: #2ab5c6;
  --on-brand: #ffffff;
  --on-brand-dim: rgba(255, 255, 255, 0.78);
  --f: 'Newsreader', 'Shippori Mincho', 'Hiragino Mincho ProN', 'Yu Mincho', 'Noto Serif JP', serif;
  --fs: 16px;
  --u: 30px;
  --gutter: clamp(18px, 4vw, 56px);
  color-scheme: light;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  -webkit-text-size-adjust: 100%;
}

body {
  background: var(--paper);
  color: var(--ink);
  font-family: var(--f);
  font-size: var(--fs);
  line-height: var(--u);
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

h1,
h2,
h3 {
  font-size: inherit;
  line-height: inherit;
  font-weight: 700;
}

ul,
ol {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

a:focus-visible {
  outline: 1px solid currentColor;
  outline-offset: 4px;
}

img {
  display: block;
  max-width: 100%;
}

/* ---------- inner pages ---------- */
.page {
  max-width: 1040px;
  margin: 0 auto;
  padding: calc(var(--u) * 2.4) var(--gutter) 0;

  > h1 {
    padding-bottom: calc(var(--u) * 0.6);
    border-bottom: 1px solid var(--ink);
  }

  h2 {
    margin-top: calc(var(--u) * 2);
    padding-bottom: calc(var(--u) * 0.4);
    border-bottom: 1px solid var(--rule);
  }

  p {
    margin-top: var(--u);
    max-width: 44em;
    line-break: strict;
  }

  p a,
  li a {
    color: var(--brand);
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 5px;
    overflow-wrap: anywhere;
  }

  iframe {
    display: block;
    width: 100%;
    max-width: 44em;
    margin-top: var(--u);
    border: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
  }
}
</style>
