Feature: Open New Bank Account

  @banking
  @accountOpen

  Scenario: Open a new savings account

    Given I login to ParaBank using valid credentials

    When I open a new account using account test data

    Then the new account should be created successfully