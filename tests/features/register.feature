Feature: ParaBank Registration

  @registration
  @smoke

  Scenario: Register a new ParaBank user

    Given I am on the ParaBank home page

    When I register a new user using registration test data

    Then registration should be successful