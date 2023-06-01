describe("Loan Calculator", function() {
    it("calculates the monthly payment correctly", function() {
      // Test case 1
      document.getElementById("loanAmount").value = 10000;
      document.getElementById("loanTerm").value = 5;
      document.getElementById("loanRate").value = 6;
      calculateMonthlyPayment();
      expect(document.getElementById("monthlyPayment").innerHTML).toEqual("$193.33");
  
      // Test case 2
      document.getElementById("loanAmount").value = 20000;
      document.getElementById("loanTerm").value = 10;
      document.getElementById("loanRate").value = 4.5;
      calculateMonthlyPayment();
      expect(document.getElementById("monthlyPayment").innerHTML).toEqual("$206.07");
    });
  
    it("displays an error message for invalid input", function() {
      // Test case 3: Invalid input
      document.getElementById("loanAmount").value = "abc";
      document.getElementById("loanTerm").value = "xyz";
      document.getElementById("loanRate").value = "def";
      calculateMonthlyPayment();
      expect(document.getElementById("monthlyPayment").innerHTML).toEqual("Please enter valid numbers");
    });
  });
  