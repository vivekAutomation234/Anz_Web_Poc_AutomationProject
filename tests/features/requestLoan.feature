Feature: Request Loan

  @banking
  @requestLoan

  Scenario: Request a loan

    Given I login to ParaBank using valid credentials

    When I request a loan using loan test data

    Then the loan request should be processed