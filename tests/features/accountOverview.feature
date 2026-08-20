Feature: Account Overview

  @banking
  @accountOverview

  Scenario: Verify account overview

    Given I login to ParaBank using valid credentials

    When I open Accounts Overview

    Then I should see my account details