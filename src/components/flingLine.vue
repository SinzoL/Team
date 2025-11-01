<script setup>
const particlesLoaded = async container => {
  console.log("Particles container loaded", container);
};

const particlesInit = async engine => {
  console.log("Particles engine initialized", engine);
};
</script>

<template>
  <div class="particles-container">
    <Particles 
      id="tsparticles" 
      @particles-loaded="particlesLoaded"
      @particles-init="particlesInit"
      :options="{
      background: {
        color: {
          value: 'transparent'
        }
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push'
          },
          onHover: {
            enable: true,
            mode: 'grab'
          },
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40
          },
          push: {
            quantity: 0
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: '#ffffff'
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: 'bounce',
          random: false,
          speed: 2,
          straight: false
        },
        number: {
          density: {
            enable: true,
          },
          value: 80
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: { min: 1, max: 5 }
        },
      },
      detectRetina: true
    }" />
  </div>
</template>

<style scoped>
.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

#tsparticles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

/* 性能优化 */
#tsparticles canvas {
  will-change: transform;
  transform: translateZ(0);
}

/* 移动端优化 */
@media (max-width: 768px) {
  .particles-container {
    display: none; /* 在移动端隐藏粒子效果以提升性能 */
  }
}

@media (prefers-reduced-motion: reduce) {
  .particles-container {
    display: none; /* 为有运动敏感的用户隐藏动画 */
  }
}
</style>
