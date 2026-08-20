Feature: Bill Payment

  @banking
  @billPay

  Scenario: Pay a bill

    Given I login to ParaBank using valid credentials

    When I pay a bill using bill payment test data

    Then bill payment should be successful