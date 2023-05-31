<template>
    <div class="container my-5">
        <div class="slider">
          <div class="slider-inner">
            <div v-for="(item, index) in items" :key="index" :class="['slider-item', { active: index === activeIndex }]">
              <img :src="item.src" :alt="item.alt">
            </div>
          </div>
          <div class="slider-controls">
            <button class="slider-control prev" @click="goToPrevSlide">Prev</button>
            <button class="slider-control next" @click="goToNextSlide">Next</button>
          </div>
        </div>

    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { src: 'img1.jpg', alt: 'Immagine 1' },
          { src: 'img2.jpg', alt: 'Immagine 2' },
          { src: 'img3.jpg', alt: 'Immagine 3' }
        ],
        activeIndex: 0,
        autoplayInterval: null,
        autoplayDuration: 3000
      };
    },
    created() {
      this.startAutoplay();
    },
    methods: {
      goToNextSlide() {
        this.activeIndex = (this.activeIndex + 1) % this.items.length;
        this.updateSliderPosition();
      },
      goToPrevSlide() {
        this.activeIndex = (this.activeIndex - 1 + this.items.length) % this.items.length;
        this.updateSliderPosition();
      },
      startAutoplay() {
        this.autoplayInterval = setInterval(this.goToNextSlide, this.autoplayDuration);
      },
      stopAutoplay() {
        clearInterval(this.autoplayInterval);
      },
      updateSliderPosition() {
        const sliderInner = this.$el.querySelector('.slider-inner');
        const slideWidth = sliderInner.offsetWidth;
        const translateX = -this.activeIndex * slideWidth;
  
        sliderInner.style.transform = `translateX(${translateX}px)`;
      }
    },
    beforeDestroy() {
      this.stopAutoplay();
    }
  };
  </script>
  
  <style scoped lang="scss">
  .slider {
    position: relative;
  
    .slider-inner {
      display: flex;
      transition: transform 0.6s ease;
  
      .slider-item {
        flex: 0 0 100%;
  
        img {
          width: 100%;
          height: auto;
        }
      }
  
      &.active {
        display: block;
      }
    }
  
    .slider-controls {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
  
      .slider-control {
        background-color: #333;
        color: #fff;
        border: none;
        padding: 10px 20px;
        margin: 0 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
  
        &:hover {
          background-color: #555;
        }
      }
    }
  }
  </style>