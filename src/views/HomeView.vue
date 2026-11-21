<script setup lang="ts">
import SphereMark from '@/components/SphereMark.vue'
</script>

<template>
  <div class="home">
    <div class="home__sky">
      <SphereMark class="home__sun" />
      <p class="home__copy" lang="en">Solving real-world problems with AI.</p>
    </div>
    <div class="home__ground">
      <SphereMark class="home__sun" />
      <div class="home__about">
        <p class="home__about__description" lang="ja">
          私たちは、AI技術を実世界の課題解決に向けた実用的なアプローチとして活用し、より豊かな社会の実現を目指す研究グループです。慶應義塾大学 湘南藤沢キャンパス（SFC）のデルタ棟S213を拠点に、2016年より深層学習・機械学習およびコンピュータビジョンを中心とした基盤・応用研究に取り組んでいます。
        </p>
        <p class="home__about__description" lang="en">
          We are a research group dedicated to leveraging the latest AI technologies as a practical
          approach to solving real-world problems and contributing to a more enriched society. Based
          at Keio University Shonan Fujisawa Campus (SFC), we focus on research centered on deep
          learning, machine learning, and computer vision, aiming to model complex patterns and
          phenomena in real-world data. We are actively looking for student researchers who are
          interested in AI and motivated to work on applying these technologies to real-world
          challenges.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
/* Daybreak: the sphere rises across the line between the blue sky and the paper.
   Above the line it is solid white; below it, still only an outline. */
.home {
  --d: min(clamp(300px, 56vh, 560px), 78vw); /* diameter of the sphere */
  --rise: 0.5; /* share of the sphere above the horizon */

  &__sun {
    position: absolute;
    left: 50%;
    width: var(--d);
    height: var(--d);
    margin-left: calc(var(--d) / -2);
    pointer-events: none;
    animation: home-rise 3.6s cubic-bezier(0.16, 0.7, 0.2, 1) 0.2s both;
  }

  &__sky {
    position: relative;
    overflow: hidden;
    height: clamp(390px, calc(70vh - 78px), 680px);
    background: var(--brand);
    color: var(--on-brand);

    .home__sun {
      bottom: calc(var(--d) * (var(--rise) - 1));
      fill: var(--on-brand);
    }
  }

  &__copy {
    position: absolute;
    left: 0;
    right: 0;
    bottom: calc(var(--d) * var(--rise) + var(--u) * 1.5);
    padding: 0 var(--gutter);
    text-align: center;
  }

  &__ground {
    position: relative;
    overflow: hidden;

    .home__sun {
      top: calc(var(--d) * var(--rise) * -1);
      fill: none;
      stroke: var(--line);
      stroke-width: 1.1;
    }
  }

  &__about {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr) var(--d) minmax(0, 1fr);
    gap: 0 clamp(24px, 3.4vw, 52px);
    min-height: calc(var(--d) * (1 - var(--rise)) + var(--u) * 1.6);
    padding: calc(var(--u) * 1.6) var(--gutter) 0;

    &__description {
      text-wrap: pretty;

      &:lang(ja) {
        grid-column: 1;
        word-break: auto-phrase;
        line-break: strict;
      }

      &:lang(en) {
        grid-column: 3;
      }
    }
  }
}

/* On load the sphere comes up from below the horizon to its resting height. */
@keyframes home-rise {
  from {
    transform: translateY(calc(var(--d) * 0.36));
  }
  to {
    transform: translateY(0);
  }
}

@media (max-width: 1020px) {
  .home__about {
    display: block;
    padding-top: calc(var(--d) * (1 - var(--rise)) + var(--u) * 1.6);

    &__description {
      max-width: 34em;
      margin-inline: auto;

      &:lang(en) {
        margin-top: var(--u);
      }
    }
  }
}
</style>
