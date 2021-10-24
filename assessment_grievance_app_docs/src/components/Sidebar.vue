<script>
import { sections } from "./Sections";

export default {
  name: "SideBar",
  data: () => ({
    sections,
  }),

  methods: {},
};
</script>

<template>
  <div id="sidebar" class="flex-shrink-0 p-3 bg-white sticky" style="width: 280px;">
    <ul class="list-unstyled ps-0 ms-3">
      <li class="mb-1">
        <button
          class="btn btn-toggle align-items-center rounded collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#overview-collapse"
          aria-expanded="true"
        >
          Overview
        </button>
        <div class="collapse show" id="overview-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <a
                v-bind:href="'#' + sections.overview.whoIsThisFor.id"
                class="link-dark rounded"
                >{{ sections.overview.whoIsThisFor.title }}</a
              >
            </li>
            <li>
              <a
                v-bind:href="'#' + sections.overview.whatDoesItDo.id"
                class="link-dark rounded"
                >{{ sections.overview.whatDoesItDo.title }}</a
              >
            </li>
          </ul>
        </div>
      </li>

      <li class="mb-1">
        <button
          class="btn btn-toggle align-items-center rounded collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#features-collapse"
          aria-expanded="false"
        >
          Features
        </button>
        <div class="collapse" id="features-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <a
                v-bind:href="'#' + sections.features.grievanceSubmission.id"
                class="link-dark rounded"
                >{{ sections.features.grievanceSubmission.title }}</a
              >
            </li>
            <li>
              <a
                v-bind:href="'#' + sections.features.grievanceAddendums.id"
                class="link-dark rounded"
                >{{ sections.features.grievanceAddendums.title }}</a
              >
            </li>
            <li>
              <a
                v-bind:href="
                  '#' + sections.features.configurableSubmissionTimelines.id
                "
                class="link-dark rounded"
                >{{
                  sections.features.configurableSubmissionTimelines.title
                }}</a
              >
            </li>
            <li>
              <a
                v-bind:href="
                  '#' + sections.features.representativeDataUploadAndPrefill.id
                "
                class="link-dark rounded"
                >{{
                  sections.features.representativeDataUploadAndPrefill.title
                }}</a
              >
            </li>
            <li>
              <a
                v-bind:href="'#' + sections.features.grievanceDataExport.id"
                class="link-dark rounded"
                >{{ sections.features.grievanceDataExport.title }}</a
              >
            </li>
            <li>
              <a
                v-bind:href="
                  '#' + sections.features.manualGrievanceModifications.id
                "
                class="link-dark rounded"
                >{{ sections.features.manualGrievanceModifications.title }}</a
              >
            </li>
            <li>
              <a
                v-bind:href="'#' + sections.features.openSource.id"
                class="link-dark rounded"
                >{{ sections.features.openSource.title }}</a
              >
            </li>
          </ul>
        </div>
      </li>

      <li class="mb-1">
        <button
          class="btn btn-toggle align-items-center rounded collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#hosting-collapse"
          aria-expanded="false"
        >
          Hosting Options
        </button>
        <div class="collapse" id="hosting-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <a
                v-bind:href="'#' + sections.hostingOptions.selfOperated.id"
                class="link-dark rounded"
                >{{ sections.hostingOptions.selfOperated.title }}</a
              >
            </li>
            <li>
              <a
                v-bind:href="'#' + sections.hostingOptions.saas.id"
                class="link-dark rounded"
                >{{ sections.hostingOptions.saas.title }}</a
              >
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .sticky {
    position: sticky; top: 0;
  }

  @media only screen and (max-width: 767px), only screen and (max-device-width: 767px) {
    #sidebar {
      display: none;
    }  
  }
</style>
