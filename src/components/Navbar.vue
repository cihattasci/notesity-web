<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#" @click="goToHome">Notesity</b-navbar-brand>
  
    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item @click="goToHome" href="#"><span style="color: white;">{{$t('home')}}</span></b-nav-item>

        <b-nav-item @click="goToAbout" href="#"><span style="color: white;">{{$t('about_us')}}</span></b-nav-item>
        
        <b-nav-item @click="goToContact" href="#"><span style="color: white;">{{$t('contact')}}</span></b-nav-item>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <span style="color: white;">{{$t('my_notes')}}</span>
          </template>
          <b-dropdown-item href="#" @click="goToMyPurchasedNotes">{{$t('my_purchases')}}</b-dropdown-item>
          <b-dropdown-item href="#" @click="goToMyNotes">{{$t('my_shared_notes')}}</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <span style="color: white;">Kullanıcı</span>
          </template>
          <b-dropdown-item href="#" @click="goToProfile">{{$t('profile')}}</b-dropdown-item>
          <b-dropdown-item href="#" @click="goToFavorites">{{$t('favorites')}}</b-dropdown-item>
          <b-dropdown-item href="#" @click="goToWallet">{{$t('wallet')}}</b-dropdown-item>
          <b-dropdown-item href="#" @click="goToSettings">{{$t('settings')}}</b-dropdown-item>
          <b-dropdown-item href="#">{{$t('exit')}}</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="notesity'de ara"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">{{$t('search')}}</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    goToHome: function (){
      this.$router.push('/');
    },
    goToMyNotes: function (){
      this.$router.push('my-notes')
    },
    goToMyPurchasedNotes: function (){
      this.$router.push('purchased-notes')
    },
    goToProfile: function (){
      this.$router.push('profile')
    },
    goToSettings: function (){
      this.$router.push('settings')
    },
    goToFavorites: function (){
      this.$router.push('user-favorites')
    },
    goToWallet: function (){
      this.$router.push('user-wallet')
    },
    goToContact: function (){
      this.$router.push('contact');
    },
    goToAbout: function (){
      this.$router.push('about-us')
    },
    goToHome: function (){
      this.$router.push('/')
    }
  }
}
</script>
