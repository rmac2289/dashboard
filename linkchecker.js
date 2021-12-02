describe("Verify Axos Sites", () => {
  it("AxosBank.com Site Monitoring", () => {
    cy.fixture("urls").then((url) => {
      //return value from the user

      cy.clearCookies();

      for (var i = 1; i <= 5; i++) {
        //Read urls.json file
        let siteurl = url[i];

        cy.visit(siteurl);
        cy.on("uncaught:exception", (err, runnable) => {
          return false;
        });

        cy.addContext(
          "_____________________________________________________________________________________________________________"
        );
        cy.addContext(
          "Below Links were validated for following KEYWORDS - UAT, QA, CustomerService for URL " +
            siteurl
        );
        cy.addContext(
          "_____________________________________________________________________________________________________________"
        );

        cy.get('a[href*="axos"]').each(($a) => {
          const message = $a.text();

          //Verify that the links do not contain keywords UAT, QA, CustomerService
          expect($a, message)
            .to.have.attr("href")
            .not.contain("uat", { matchCase: false })
            .and.not.contain("qa", { matchCase: false })
            .and.not.contain("customerservice", { matchCase: false });
        });
      }
    });
  }); //End of IT
});
