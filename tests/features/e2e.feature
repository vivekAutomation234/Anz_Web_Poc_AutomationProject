Feature: ParaBank End To End Banking Flow

  @e2e
  @regression

  Scenario: Complete banking journey

    Given I login to ParaBank using valid credentials

    When I open a new account using account test data

    And I verify Accounts Overview

    And I transfer funds using transfer test data

    And I pay a bill using bill payment test data

    And I request a loan using loan test data

    And I contact customer care using customer care test data

    Then the complete banking flow should be successful