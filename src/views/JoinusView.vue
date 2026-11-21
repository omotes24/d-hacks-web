<template>
  <div class="page joinus">
    <h1>履修希望の方へ</h1>
    <p>
      履修希望の方は、以下の内容を確認の上、RG初回・第2回講義に来てください。質問のある方は
      <a href="mailto:d-hacks-group@keio.jp">d-hacks-group@keio.jp</a> までご連絡ください。
      <br />
      RG初回・第2回講義の案内については、学期始まり頃に以下を参照してください。
      <br />
      <a href="https://rg.sfc.keio.ac.jp/ja/">https://rg.sfc.keio.ac.jp/ja/</a>
    </p>
    <p>
      勉強を目的として、やる気や積極性のある方は、聴講やサブKGとしての参加も歓迎しています（その場合、両方の時間の出席は必須ではありません）
      <br />
      以下は2025年度秋のd-hacksの運営方針になります。履修を検討されている方はぜひご覧ください。
    </p>

    <iframe
      class="joinus__deck"
      src="https://speakerdeck.com/player/4101120cfd684791a7dc14aa77e9aefc"
      title="d-hacks 今期運営 2025f"
      allowfullscreen
      data-ratio="1.7777777777777777"
    ></iframe>

    <h2>履修までの流れ</h2>

    <ol class="joinus__steps">
      <li>『履修要件』『時間割』を確認し、履修申告をする</li>
      <li>学期始めのRG全体講義に参加する</li>
      <li>d-hacksのミーティングに参加する</li>
      <li>履修を確定する</li>
    </ol>

    <h2>履修要件</h2>
    <p>
      履修要件は原則として以下の通りとなります。「要件」とは言ってもあくまでも基準なので、迷っている方はぜひご相談ください。<br />
      現時点での技能や知識の有無に関わらず、やる気と積極性のある学生を歓迎します。
    </p>
    <ul class="joinus__list">
      <li>学年が1年生〜3年1学期目（3年2学期目の方は受け入れをしていないため要相談）</li>
      <li>情報基礎1・2の成績がS・A以上であること（または十分にpythonが書けること）</li>
      <li>高校で数学II・Bまでは取っていること（または同等の知識を有していること）</li>
      <li>中澤・大越研究室の全体講義と、d-hacksのミーティングに出席できること</li>
    </ul>

    <h2>時間割</h2>
    <p>原則として以下の講義・ミーティングに出席していただく必要があります。</p>
    <ul class="joinus__list">
      <li>中澤・大越研究会 全体講義： 木曜日2,3限</li>
      <li>d-hacks研究相談会： 木曜日4限</li>
      <li>d-hacks論文輪講会： 木曜日5限</li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.joinus {
  &__deck {
    aspect-ratio: 560 / 315;
    height: auto;
    background: rgba(0, 0, 0, 0.06);
  }

  &__steps,
  &__list {
    max-width: 44em;
    margin-top: calc(var(--u) * 0.5);

    li {
      padding: calc(var(--u) * 0.4) 0;
      border-bottom: 1px solid var(--rule);
    }
  }

  &__steps {
    counter-reset: step;

    li {
      display: grid;
      grid-template-columns: 2em minmax(0, 1fr);
      counter-increment: step;

      &::before {
        content: counter(step);
        color: var(--brand);
        font-weight: 700;
      }
    }
  }
}
</style>
