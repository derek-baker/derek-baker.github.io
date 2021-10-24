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
  <div class="container">
    <div class="container text-center">
      <img class="img-fluid" alt="App logo" src="../assets/logo.png" />
      <h1 class="fs-5 fw-semibold">Assessment Grievance App</h1>
    </div>

    <hr>

    <div class="text-left"><h2 class="greyText">Overview</h2></div>

    <ul>
      <h4 class="greyText inlineBlock" v-bind:id="sections.overview.whoIsThisFor.id">
        {{ sections.overview.whoIsThisFor.title }}
      </h4>
      This app is built for municipal governments in New York State that manage
      a recurring real property assessment grievance process.
    </ul>

    <ul>
      <h4 class="greyText inlineBlock" v-bind:id="sections.overview.whatDoesItDo.id">
        {{ sections.overview.whatDoesItDo.title }}
      </h4>
      This app allows for digitization of the real property assessment grievance
      process. This includes web-based submission of grievances, submission
      tracking, an admin portal allowing submission organization, an in-app
      process for producing grievance dispositions, and more.
    </ul>

    <ul>
      <h4 class="greyText inlineBlock" v-bind:id="sections.overview.howWillItBenefitMe.id">
        {{ sections.overview.howWillItBenefitMe.title }}
      </h4>
      Using this app, you'll be able to eliminate the need for manual
      validation, manual handling, and manual tracking of grievances. At the
      same time, you'll be providing property owners with a modern option for
      remotely and safely submitting grievances via digital means.
    </ul>

    <hr />

    <div class="text-left"><h2 class="greyText">Features</h2></div>

    <ul>
      <h4 class="greyText inlineBlock" v-bind:id="sections.features.grievanceSubmission.id">
        {{ sections.features.grievanceSubmission.title }}
      </h4>
      Users can easily submit a grievance using their own devices from a location of their choosing,
      with no need for interaction with your staff.
    </ul>

    <ul>
      <h4 class="greyText inlineBlock" v-bind:id="sections.features.grievanceAddendums.id">
        {{ sections.features.grievanceAddendums.title }}
      </h4>
      Using a submission identifier, users can easily append additional documents to existing submissions.
    </ul>

    <ul>
      <h4 class="greyText inlineBlock" v-bind:id="sections.features.configurableSubmissionTimelines.id">
        {{ sections.features.configurableSubmissionTimelines.title }}
      </h4>
      Admin users can configure submission timelines for start and stop of initial grievance submissions, 
      and addendums submission timelines.
    </ul>

    <ul>
      <h4 class="greyText inlineBlock" v-bind:id="sections.features.representativeDataUploadAndPrefill.id">
        {{ sections.features.representativeDataUploadAndPrefill.title }}
      </h4>
      Admin users can preload representative contact info to allow for easy prefilling of 
      data into grievances.
    </ul>

    <ul>
      <h4 class="greyText inlineBlock" v-bind:id="sections.features.grievanceDataExport.id">
        {{ sections.features.grievanceDataExport.title }}
      </h4>
      Admin users can export grievance data in CSV format to enable other uses of submission data.
    </ul>

    <ul>
      <h4 class="greyText inlineBlock" v-bind:id="sections.features.manualGrievanceModifications.id">
        {{ sections.features.manualGrievanceModifications.title }}
      </h4>
      Admin users can edit existing grievances, or manually create grievances. Manual creation of grievances
      can be useful when maintaining a hybrid paper/digital process, but tracking all grievances digitally.
    </ul>

    <ul>
      <h4 class="greyText inlineBlock" v-bind:id="sections.features.openSource.id">
        {{ sections.features.openSource.title }}
      </h4>
      The app is open-source. This means you can audit the code for security purposes, or even fork and develop
      a version of the application that's customized to better fit your needs.
      The code is available <a href="https://github.com/derek-baker/nys-assessment-grievance-app" target="_blank">on Github</a>
    </ul>

    <hr />

    <div class="text-left"><h2 class="greyText">Hosting Options</h2></div>

    <ul>
      <h4 class="greyText inlineBlock" v-bind:id="sections.hostingOptions.selfOperated.id">
        {{ sections.hostingOptions.selfOperated.title }}
      </h4>
      As mentioned above, the app is open-source, so you can build and deploy
      your own instance(s) of the app using tooling in the repository. However,
      the default configuration of the app is deployed using managed cloud
      services from Google Cloud Platform (GCP). The Github repository contains
      information on deploying and running the app.
    </ul>

    <ul>
      <h4 class="greyText inlineBlock" v-bind:id="sections.hostingOptions.saas.id">
        {{ sections.hostingOptions.saas.title }}
      </h4>
      If you're not interested or able to purchase your own cloud services from
      GCP, you can inquire about purchasing a subscription to a hosted version
      of the app by emailing info@bakersoftware.solutions.
    </ul>

    <div class="extraPadding"></div>
  </div>
</template>

<style scoped>
  .extraPadding {
    padding-bottom: 75%;
  }
</style>
