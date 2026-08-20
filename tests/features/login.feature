Feature: ParaBank Login

  @login
  @smoke

  Scenario: Login with valid credentials

    Given I am on the ParaBank home page

    When I login with username "viv1" and password "viv1"

    Then I should see the Accounts Overview page