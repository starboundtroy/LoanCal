describe("Loan Calculator", function() {
  it("should calculate the monthly payment correctly", function() {
    var principle1 = 100000;
    var term1 = 10;
    var rate1 = 5;
    var result1 = calculateMonthlyPayment(principle1, term1, rate1);
    expect(result1).toEqual("1060.66");

    var principle2 = 200000;
    var term2 = 15;
    var rate2 = 3.5;
    var result2 = calculateMonthlyPayment(principle2, term2, rate2);
    expect(result2).toEqual("1429.77");

    var principle3 = 50000;
    var term3 = 5;
    var rate3 = 7.25;
    var result3 = calculateMonthlyPayment(principle3, term3, rate3);
    expect(result3).toEqual("990.76");
  });
});
