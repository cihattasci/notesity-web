<template>
  <div id="app">
      <h2 style="text-align: center; margin-top: 1rem;">İletişim</h2>
      <hr/>
      <div style="flex: 1; justify-content: space-evenly; flex-direction: row; display: flex;">
        <div style="flex: 1; justify-content: center; align-items: center; display: flex;">
          <span style="font-weight: bold; color: black;">info@notesity.com</span>
        </div>
        <div style="flex: 1; width: 40%; margin-right: 5rem;">
          <h4 style="margin-bottom: 2rem; text-align: center;">Mesajınızı İletin</h4>
          <b-form-group
            id="fieldset-1"
            label="İsim Soyisim"
            label-for="input-1"
            valid-feedback="Thank you!"
          >
            <b-form-input id="input-1" v-model="name"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldset-1"
            label="E-posta"
            label-for="input-1"
            valid-feedback="Thank you!"
          >
            <b-form-input id="input-1" v-model="email"></b-form-input>
          </b-form-group>
          <b-form-textarea
            id="textarea"
            v-model="message"
            placeholder="Mesajınız..."
            rows="5"></b-form-textarea>
          <div style="margin-top: 3rem;">
            <b-button @click="sendMessage" variant="outline-primary">Gönder</b-button>
          </div>
        </div>
      </div>

      <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
export default {
    components: {
      Footer
    },
    data() {
      return {
          message: '',
          name: '',
          email: ''
      }
    },
    methods: {
      sendMessage(){
        alert('gönderdi')
      }
    }
}
</script>