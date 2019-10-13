<template>
    <v-container class="team-wrapper">
      <v-layout v-bind="{row: !isMobile, column: isMobile}" justify-space-around>
        <v-flex xs8>
          <p class="sub_title">Who we are</p>
          <p class="sub_content">
           Cofounded in 2011 by Vitt Su, national first-class registered architect with 10 years of experience in architecture schematic design and Henry He, professional spatial photographer, Arch-Exist Photography is an architectural photography studio with international perspective and universal aesthetics, making continuous improvement over the years. The studio is operated around the three major categories of City VS Architecture, Interior Design, and Landscape Design. Since its establishment, Arch-Exist has been producing works of striking humanistic power based on the truthful recording of design, the reflection on urban evolution and the respect for nature, thanks to long running team work and Su and He's pursuit of realism and their dedication to architecture. As a shooting team of strong humanistic spirit, Arch-Exist have shown great passion for natural surroundings, urban evolution and people. Their works are so full of life thanks to the narrative nature. The enchantment of architecture comes from the scale of time and is used by the people, which is what architectural photography means for Arch-Exist Photography
          </p>

          <p class="sub_title">What different do we make</p>
          <p class="sub_content">
           Cofounded in 2011 by Vitt Su, national first-class registered architect with 10 years of experience in architecture schematic design and Henry He, professional spatial photographer, Arch-Exist Photography is an architectural photography studio with international perspective and universal aesthetics, making continuous improvement over the years. The studio is operated around the three major categories of City VS Architecture, Interior Design, and Landscape Design. Since its establishment, Arch-Exist has been producing works of striking humanistic power based on the truthful recording of design, the reflection on urban evolution and the respect for nature, thanks to long running team work and Su and He's pursuit of realism and their dedication to architecture. As a shooting team of strong humanistic spirit, Arch-Exist have shown great passion for natural surroundings, urban evolution and people. Their works are so full of life thanks to the narrative nature. The enchantment of architecture comes from the scale of time and is used by the people, which is what architectural photography means for Arch-Exist Photography
          </p>
        </v-flex>
        <v-flex v-if="!isMobile" xs2 class="sub_intro">
          <v-img class="intro_img"  src="http://article.duo-visual.com/3/3_files/640" contain></v-img>
          <div class="intro_line"></div>
          <p class="intro_p">GUANGYUAN XIE</p>
          <p class="intro_p">城市设计师</p>
          <p class="intro_p">xxxxxx</p>
          <p class="intro_p">xxxxxx</p>
          <v-img class="intro_img"  src="http://article.duo-visual.com/4/4_files/640" contain ></v-img>
          <div class="intro_line"></div>
          <p class="intro_p">HONGGUO ZHUO</p>
          <p class="intro_p">景观设计师</p>
          <p class="intro_p">xxxxxx</p>
          <p class="intro_p">xxxxxx</p>
        </v-flex>
      </v-layout>
      <v-layout v-if="isMobile" class="mobile-profile" column>
        <v-flex xs12 class="sub_intro">
          <v-layout v-if="isMobile" row justify-space-between>
            <v-flex xs4>
              <v-img class="intro_img"  src="http://article.duo-visual.com/3/3_files/640" contain></v-img>
            </v-flex>
            <v-flex xs6>
              <div class="intro_line"></div>
              <p class="intro_p">GUANGYUAN XIE</p>
              <p class="intro_p">城市设计师</p>
              <p class="intro_p">xxxxxx</p>
              <p class="intro_p">xxxxxx</p>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 class="sub_intro">
          <v-layout v-if="isMobile" row justify-space-between>
            <v-flex xs4 >
              <v-img class="intro_img"  src="http://article.duo-visual.com/4/4_files/640" contain ></v-img>
            </v-flex>
            <v-flex xs6>
              <div class="intro_line"></div>
              <p class="intro_p">HONGGUO ZHUO</p>
              <p class="intro_p">景观设计师</p>
              <p class="intro_p">xxxxxx</p>
              <p class="intro_p">xxxxxx</p>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <div class="copyright"> &copy;2019 DUO All Rights Reserved </div>
    </v-container>
    
</template>

<script>
export default {
  data() {
    return {
      isMobile: false
    }
  },
  mounted() {
    if (window.innerWidth < 1230) {
      this.isMobile=true
    }
  }
}
</script>

<style scoped>
  .v-card{
    display: inline-block;
  }
  .v-card.avator{
    padding-top: 10px;
  }
  .v-card__text{
    font-size: 18px;
  }
  .team-wrapper{
    margin-top: 60px;
  }
  .sub_title{
    font-size: 20px;
    margin: 25px 0;
  }
  .sub_content{
    font-size: 16px;
    line-height: 30px;
    text-indent: 36px;
    padding: 0 25px;
  }
  .sub_intro{
    margin-top: 25px;
    margin-right: 2%;
  }
  .intro_p {
    width: 100%;
    text-align: right;
    font-size: 18px;
    margin:0;
  }
  .intro_img{
    margin-top: 20px;
  }
  .intro_line{
    display: block;
    width: 10px;
    height: 20px;
  }
  .copyright{
    width: 100%;
    text-align: center;
    border-top: 2px solid gray;
    margin-top: 30px;
    color: gray;
  }
  .sub_intro+.sub_intro{
    border-top: 2px dotted gray;
  }
  .mobile-profile{
    padding: 0 20px;
  }
  @media (max-width: 700px) {
    .intro_p{
      font-size:  16px;
    }
  }
</style>
