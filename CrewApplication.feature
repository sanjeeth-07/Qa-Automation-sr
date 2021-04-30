#crew application end to end tests as scenarios in BDD format. 

Feature: Crew Application 
  User should be able to add applicants to the system and also update candidate progress from applied to interviewing to hired

  Scenario: Search for a candidate
    Given I login to the portal
    When I search for the candidate
    Then I should be able to view the desired candidate
    
  Scenario: Add candidates to the application
    Given I login to the portal
    When I enter the candiate details
    Then I should be able to view the candidates 
  
  Scenario: Change status of the candidates
    Given I login to the portal
    When I change the status of a candidate
    Then I must be able to view it in the system
