Feature: Fund Transfer

  @banking
  @fundTransfer

  Scenario: Transfer funds between accounts

    Given I login to ParaBank using valid credentials

    When I transfer funds using transfer test data

    Then the fund transfer should be successful