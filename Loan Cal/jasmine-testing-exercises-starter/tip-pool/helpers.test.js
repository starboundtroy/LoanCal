describe('Helpers functions', () => {
    let allPayments;
  
    beforeEach(() => {
      // Set up the initial state before each test
      allPayments = {
        payment1: { tipAmt: 10, billAmt: 50 },
        payment2: { tipAmt: 20, billAmt: 100 },
        payment3: { tipAmt: 15, billAmt: 75 },
      };
    });
  
    describe('sumPaymentTotal', () => {
      it('should return the sum of tip amounts', () => {
        const result = sumPaymentTotal('tipAmt');
        expect(result).toBe(45); // Sum of tip amounts: 10 + 20 + 15 = 45
      });
  
      it('should return the sum of bill amounts', () => {
        const result = sumPaymentTotal('billAmt');
        expect(result).toBe(225); // Sum of bill amounts: 50 + 100 + 75 = 225
      });
    });
  
    describe('calculateTipPercent', () => {
      it('should calculate the tip percent based on bill and tip amounts', () => {
        const result = calculateTipPercent(50, 10);
        expect(result).toBe(20); // Tip percent: 10 / 50 * 100 = 20
      });
  
      it('should round the tip percent to the nearest whole number', () => {
        const result = calculateTipPercent(75, 15);
        expect(result).toBe(20); // Tip percent: 15 / 75 * 100 = 20 (rounded)
      });
    });
  
    describe('appendTd', () => {
      let tr;
  
      beforeEach(() => {
        // Create a new table row element before each test
        tr = document.createElement('tr');
      });
  
      it('should append a new td element with the given value to the table row', () => {
        appendTd(tr, 'Test Value');
        expect(tr.innerHTML).toContain('<td>Test Value</td>');
      });
  
      it('should append a new td element containing a numeric value', () => {
        appendTd(tr, 100);
        expect(tr.innerHTML).toContain('<td>100</td>');
      });
    });
  
    // Write more tests for other functions...
  
  });
  