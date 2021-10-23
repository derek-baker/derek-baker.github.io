<script>
import { sections } from "./Sections";

export default {
  name: "Content",
  data: () => ({
    sections,
  }),

  methods: {},
};
</script>

<template>
  <div class="container text-center">
    <img class="img-fluid" alt="App logo" src="../assets/logo.png" />
    <h1 class="fs-5 fw-semibold">Assessment Grievance App</h1>    
  </div>

  <div class="container">
      <div class="text-left"><h2>Overview</h2></div>

      <ul>
        <h4 v-bind:href="sections.overview.whoIsThisFor.id">
          {{ sections.overview.whoIsThisFor.text }}
        </h4>
        This app is built for municipal governments in New York State that
        manage a recurring real property assessment grievance process.
      </ul>

      <ul>
        <h4 v-bind:href="sections.overview.whatDoesItDo.id">
          {{ sections.overview.whatDoesItDo.text }}
        </h4>
        This app allows for digitization of the real property assessment
        grievance process. This includes web-based submission of grievances,
        submission tracking, an admin portal allowing submission organization,
        an in-app process for producing grievance dispositions, and more.
      </ul>

      <ul>
        <h4 v-bind:href="sections.overview.howWillItBenefitMe.id">
          {{ sections.overview.howWillItBenefitMe.text }}
        </h4>
        Using this app, you'll be able to eliminate the need for manual handling
        and manual tracking of grievances. At the same time, you'll decrease the
        amount of friction required for
      </ul>

      <hr />

      <div class="text-left"><h2>Features</h2></div>

      <ul>
        <h4 v-bind:href="sections.features.grievanceSubmission.id">
          {{ sections.features.grievanceSubmission.text }}
        </h4>
        lorem
      </ul>

      <ul>
        <h4 v-bind:href="sections.features.grievanceAddendums.id">
          {{ sections.features.grievanceAddendums.text }}
        </h4>
        lorem
      </ul>

      <ul>
        <h4 v-bind:href="sections.features.configurableSubmissionTimelines.id">
          {{ sections.features.configurableSubmissionTimelines.text }}
        </h4>
        lorem
      </ul>

      <ul>
        <h4 v-bind:href="sections.features.representativeDataUploadAndPrefill.id">
          {{ sections.features.representativeDataUploadAndPrefill.text }}
        </h4>
        lorem
      </ul>

      <ul>
        <h4 v-bind:href="sections.features.grievanceDataExport.id">
          {{ sections.features.grievanceDataExport.text }}
        </h4>
        lorem
      </ul>

      <ul>
        <h4 v-bind:href="sections.features.manualGrievanceModifications.id">
          {{ sections.features.manualGrievanceModifications.text }}
        </h4>
        lorem
      </ul>

      <ul>
        <h4 v-bind:href="sections.features.openSource.id">
          {{ sections.features.openSource.text }}
        </h4>
        lorem
      </ul>

      <hr />

      <div class="text-left"><h2>Hosting Options</h2></div>

      <ul>
        <h4 v-bind:href="sections.hostingOptions.selfOperated.id">
          {{ sections.hostingOptions.selfOperated.text }}
        </h4>
        As mentioned above, the app is open-source, so you can build and deploy
        your own instance(s) of the app using tooling in the repository. However, the default configuration of the app is deployed using
        managed cloud services from Google Cloud Platform (GCP).
      </ul>

      <ul>
        <h4 v-bind:href="sections.hostingOptions.saas.id">
          {{ sections.hostingOptions.saas.text }}
        </h4>
        If you're not interested in managing your own cloud services, you can inquire about 
        purchasing a subscription to a hosted version of the app by emailing info@bakersoftware.solutions.
      </ul>
    </div>
</template>

<style scoped>
</style>
