<script>
import { sections } from './Sections';

export default {
  name: 'SideBar',
  data: () => ({
    sections
  }),

  methods: {
    
  }
}
</script>

<template>
  <div class="flex-shrink-0 p-3 bg-white" style="width: 280px;">
    
    <ul class="list-unstyled ps-0 ms-3">
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#overview-collapse" aria-expanded="true">
          Overview
        </button>
        <div class="collapse show" id="overview-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <a v-bind:href="'#' + sections.overview.whoIsThisFor.id" class="link-dark rounded">{{sections.overview.whoIsThisFor.text}}</a>
            </li>
            <li>
              <a v-bind:href="'#' + sections.overview.whatDoesItDo.id" class="link-dark rounded">{{sections.overview.whatDoesItDo.text}}</a>
            </li>            
          </ul>
        </div>
      </li>

      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#features-collapse" aria-expanded="false">
          Features
        </button>
        <div class="collapse" id="features-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">Weekly</a></li>
            <li><a href="#" class="link-dark rounded">Monthly</a></li>
            <li><a href="#" class="link-dark rounded">Annually</a></li>
          </ul>
        </div>
      </li>
      
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#hosting-collapse" aria-expanded="false">
          Hosting Options
        </button>
        <div class="collapse" id="hosting-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <a v-bind:href="'#' + sections.hostingOptions.selfOperated.id" class="link-dark rounded">{{sections.hostingOptions.selfOperated.text}}</a>
            </li>
            <li>
              <a v-bind:href="'#' + sections.hostingOptions.saas.id" class="link-dark rounded">{{sections.hostingOptions.saas.text}}</a>
            </li>
          </ul>
        </div>
      </li>
      <!-- <li class="border-top my-3"></li> -->
      
    </ul>

  </div>
</template>

<style scoped>

</style>
