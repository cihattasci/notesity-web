<template>
  <div id="app">
      <h2 style="text-align: center; margin-top: 1rem;">Sıkça Sorulan Sorular</h2>
      <hr/>
      <div scroll style="justify-content: center; display: flex; margin-top: 1rem;">
          <vsa-list>
            <vsa-item>
                <vsa-heading>
                    notesity nedir?
                </vsa-heading>
                <vsa-content>
                    noesity, sınav zamanları ya da eğitim-öğretim yılı içinde herhangi bir günde herhangi bir dersten ihtiyaç duyduğunuz veya başkalarının ihtiyaç duyacağını düşündüğünüz ders notlarını bulabileceğiniz ya da istediğiniz takdirde notlarınızı yükleyip başka öğrencilerin alması sonrasında para kazanabileceğiniz yeni bir öğrenci platformu.
                </vsa-content>
            </vsa-item>
            <vsa-item>
                <vsa-heading>
                    Notlarımı nasıl yükleyeceğim?
                </vsa-heading>
                <vsa-content>
                    Notlarınızı menü de “not yükle” kısmından yükleyebilirsiniz.
                </vsa-content>
            </vsa-item>
            <vsa-item>
                <vsa-heading>
                    Notumdan nasıl para kazanacağım?
                </vsa-heading>
                <vsa-content>
                    Notunuz başka öğrenciler tarafından beğenilip satın alındığı taktirde ücret, sisteme tanımladığınız kredi kartına ertesi iş gününde ve tek seferde hiçbir kesinti olmadan yatacaktır.
                </vsa-content>
            </vsa-item>
            <vsa-item>
                <vsa-heading>
                    Ne kadar kazanacağım?
                </vsa-heading>
                <vsa-content>
                    Satılan notun tabiki büyük bir kısmı siz öğrencilere kalacaktır. Satılan nottan minimum %70, maximum %80 oranında kazanç sağlayacaksınız.
                </vsa-content>
            </vsa-item>
            <vsa-item>
                <vsa-heading>
                    Notları almadan görebilir miyim?
                </vsa-heading>
                <vsa-content>
                    Bu alışverişte iki tarafında mağdur olmaması için şöyle bir sistem geliştirdik: Satın alacak olan kullanıcının notların kalitesinden ve doğruluğundan emin olması adına, yüklenilen notların ilk sayfasını önizleme olarak sunduk. Böylelikle iki tarafından endişelerini gidermiş olduğumuzu umuyoruz.
                </vsa-content>
            </vsa-item>
            <vsa-item>
                <vsa-heading>
                    Satın aldığım notlara nerelerde ve nasıl ulaşabilirim?
                </vsa-heading>
                <vsa-content>
                    Satın aldığınız notlara offline bir biçimde metro, otobüs, vapur, tren, uçak nerede isterseniz orada notlarım bölümünden ulaşabilirsiniz.
                </vsa-content>
            </vsa-item>
            <vsa-item>
                <vsa-heading>
                    Satışta olan notuma değişiklik yapabilir miyim?
                </vsa-heading>
                <vsa-content>
                    Güncelleme işlemini elbette yapabilirsiniz ama o notu daha önceden alan kullanıcılara bu güncelleme yansımayacaktır. Eğer notunuzu kaldırmak isterseniz kaldırabilirsiniz fakat daha önce kaldırmak istediğiniz notunuzu alanlar varsa onların hesabından düşemez fakat arama kısmından düşer.
                </vsa-content>
            </vsa-item>
        </vsa-list>
      </div>

      <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
  VsaIcon
} from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';
export default {
    components: {
        Footer,
        VsaList,
        VsaItem,
        VsaHeading,
        VsaContent,
        VsaIcon
    },
}
</script>

<style>

</style>