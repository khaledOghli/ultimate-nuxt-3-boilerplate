<template>
    <section class="feature-v4 my-10">
        <div class="w-[calc(100%_-_2.5rem)] lg:w-[calc(100%_-_4rem)]
        mx-auto max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div class="feature-v4__grid grid grid-cols-12 gap-5 lg:gap-8 items-center">
            <div class="lg:col-span-6 sm:col-span-12 col-span-12 relative z-1">
              <div class="text-component">
                <h1 class="text-4xl leading-tight lg:text-6xl lg:leading-tight feature-v4__text-offset@md">
                 {{ $t('message')}} About the Dubai Permit and control
                </h1>
                <p>
                  The Buildings Regulation & Permits Agency at Dubai Municipality launches a modern and innovative electronic system for
                  building permit and control, which uses the latest technology to provide high quality services to customers such as
                  owners, consulting engineering offices, and contracting companies. The system provides improved customer’s experience by
                  re-engineering building permit and control services based on customers need. The system is compliant with the new and
                  unified Dubai Building Code, and it provides an automated code compliance checking functionality using building
                  information modelling (BIM), which makes Dubai one of the world's leading cities in implementing this technology. The
                  advanced features in the new system in addition to other initiatives of the agency are expected to contribute to
                  reducing service timeframes, enhancing the quality of services, easing procedures, and enhancing the global
                  competitiveness of Dubai. The system will be launched gradually starting with specific services and selected number of
                  consulting engineering offices and contracting companies to ensure a smooth transition from the existing system to the
                  new system.
                  </p>
              </div>
      
              <div class="mt-3 lg:mt-5">
                <div class="flex flex-wrap gap-3 lg:gap-5 items-center">
                  <a href="#0" class="rtl:ml-4 me-5 btn btn-primary w-40 text-white bg-primary-100 hover:bg-primary-200 border-0 shadow-lg shadow-primary-100/50">Download</a>
                </div>
              </div>
            </div>
      
            <div class="lg:col-span-6 sm:col-span-12 col-span-12">
              <figure>
                <img class="block w-full" src="https://codyhouse.co/app/assets/img/feature-v4-img-1.jpg" alt="Image description">
              </figure>
            </div>
          </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss">

  .feature-v4 {
    --feature-text-offset: 65%;
    position: relative;
    z-index: 1;
  }

  @media (min-width: 32rem) {
    .feature-v4__text-offset\@xs {
      width: calc(100% + var(--feature-text-offset));
    }

    .feature-v4--invert\@xs .feature-v4__grid>*:last-child {
      order: -1;
    }

    .feature-v4--invert\@xs .feature-v4__text-offset\@xs {
      margin-left: calc(var(--feature-text-offset) * -1);
    }
  }

  @media (min-width: 48rem) {
    .feature-v4__text-offset\@sm {
      width: calc(100% + var(--feature-text-offset));
    }

    .feature-v4--invert\@sm .feature-v4__grid>*:last-child {
      order: -1;
    }

    .feature-v4--invert\@sm .feature-v4__text-offset\@sm {
      margin-left: calc(var(--feature-text-offset) * -1);
    }
  }

  @media (min-width: 64rem) {
    .feature-v4__text-offset\@md {
      width: calc(100% + var(--feature-text-offset));
    }

    .feature-v4--invert\@md .feature-v4__grid>*:last-child {
      order: -1;
    }

    .feature-v4--invert\@md .feature-v4__text-offset\@md {
      margin-left: calc(var(--feature-text-offset) * -1);
    }
  }

  @media (min-width: 80rem) {
    .feature-v4__text-offset\@lg {
      width: calc(100% + var(--feature-text-offset));
    }

    .feature-v4--invert\@lg .feature-v4__grid>*:last-child {
      order: -1;
    }

    .feature-v4--invert\@lg .feature-v4__text-offset\@lg {
      margin-left: calc(var(--feature-text-offset) * -1);
    }
  }

  @media (min-width: 90rem) {
    .feature-v4__text-offset\@xl {
      width: calc(100% + var(--feature-text-offset));
    }

    .feature-v4--invert\@xl .feature-v4__grid>*:last-child {
      order: -1;
    }

    .feature-v4--invert\@xl .feature-v4__text-offset\@xl {
      margin-left: calc(var(--feature-text-offset) * -1);
    }
  }
</style>