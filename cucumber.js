require('dotenv').config();

module.exports = {

  default: {

    requireModule: [
      'ts-node/register'
    ],

    require: [
      'tests/support/**/*.ts',
      'tests/fixtures/**/*.ts',
      'tests/hooks/**/*.ts',
      'tests/steps/**/*.ts'
    ],

    format: [
      'progress',
      [
        'html',
        'tests/reports/cucumber-report.html'
      ],
      'allure-cucumberjs/reporter'
    ],

    formatOptions: {
      resultsDir:
        'tests/reports/allure-results'
    },

    parallel:
      Number(process.env.PARALLEL_WORKERS || 1),

    publishQuiet: true
  }
};