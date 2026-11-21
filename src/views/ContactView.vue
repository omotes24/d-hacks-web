<template>
  <div class="page contact">
    <h1>お問合せ</h1>
    <p><a href="mailto:d-hacks-group@keio.jp">d-hacks-group@keio.jp</a></p>

    <div class="contact__map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6505.36474967851!2d139.4255!3d35.388333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601853937b1c2bf7%3A0xd8c1a74b3dbc3c4e!2sDelta%20Building!5e0!3m2!1sja!2sjp!4v1772219934972!5m2!1sja!2sjp"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="慶應義塾大学湘南藤沢キャンパス デルタ棟の地図"
      ></iframe>
    </div>

    <div class="contact__address">
      <p>〒252-0882 神奈川県藤沢市遠藤5322 慶應義塾大学湘南藤沢キャンパス デルタ棟S213</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.contact__map iframe {
  max-width: none;
}
</style>
