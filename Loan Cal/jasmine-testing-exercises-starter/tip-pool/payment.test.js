describe('Payments functions', () => {
    let billAmtInput, tipAmtInput, paymentForm, paymentTbody, summaryTds, allPayments, paymentId;
  
    beforeEach(() => {
      // Set up the initial state before each test
      billAmtInput = document.createElement('input');
      billAmtInput.setAttribute('id', 'billAmt');
      document.body.appendChild(billAmtInput);
  
      tipAmtInput = document.createElement('input');
      tipAmtInput.setAttribute('id', 'tipAmt');
      document.body.appendChild(tipAmtInput);
  
      paymentForm = document.createElement('form');
      paymentForm.setAttribute('id', 'paymentForm');
      document.body.appendChild(paymentForm);
  
      paymentTbody = document.createElement('tbody');
      paymentTbody.setAttribute('id', 'paymentTable');
      const paymentTable = document.createElement('table');
      paymentTable.appendChild(paymentTbody);
      document.body.appendChild(paymentTable);
  
      summaryTds = document.querySelectorAll('#summaryTable tbody tr td');
  
      allPayments = {};
      paymentId = 0;
    });
  
    afterEach(() => {
      // Clean up the DOM after each test
      billAmtInput.remove();
      tipAmtInput.remove();
      paymentForm.remove();
      paymentTbody.remove();
    });
  
    describe('submitPaymentInfo', () => {
      it('should add a new payment to allPayments and update the tables', () => {
        // Test the initial state
        expect(Object.keys(allPayments).length).toBe(0);
        expect(paymentTbody.innerHTML).toBe('');
        expect(summaryTds[0].innerText).toBe('0');
        expect(summaryTds[1].innerText).toBe('0');
  
        // Simulate form submission
        billAmtInput.value = '50';
        tipAmtInput.value = '10';
        paymentForm.dispatchEvent(new Event('submit'));
  
        // Test the updated state
        expect(Object.keys(allPayments).length).toBe(1);
        expect(paymentTbody.innerHTML).toContain('50');
        expect(summaryTds[0].innerText).toBe('1');
        expect(summaryTds[1].innerText).toBe('10');
      });
  
      it('should not add a new payment if bill amount or tip amount is empty', () => {
        // Test the initial state
        expect(Object.keys(allPayments).length).toBe(0);
        expect(paymentTbody.innerHTML).toBe('');
        expect(summaryTds[0].innerText).toBe('0');
        expect(summaryTds[1].innerText).toBe('0');
  
        // Simulate form submission with empty input
        paymentForm.dispatchEvent(new Event('submit'));
  
        // Test that no payment is added and the tables are not updated
        expect(Object.keys(allPayments).length).toBe(0);
        expect(paymentTbody.innerHTML).toBe('');
        expect(summaryTds[0].innerText).toBe('0');
        expect(summaryTds[1].innerText).toBe('0');
      });
  
      it('should not add a new payment if bill amount is negative', () => {
        // Test the initial state
        expect(Object.keys(allPayments).length).toBe(0);
        expect(paymentTbody.innerHTML).toBe('');
        expect(summaryTds[0].innerText).toBe('0');
        expect(summaryTds[1].innerText).toBe('0');
  
        // Simulate form submission with negative bill amount
        billAmtInput.value = '-50';
        tipAmtInput.value = '10';
        paymentForm.dispatchEvent(new Event('submit'));
  
        // Test that no payment is added and the tables are not updated
        expect(Object.keys(allPayments).length).toBe(0);
        expect(paymentTbody.innerHTML).toBe('');
        expect(summaryTds[0].innerText).toBe('0');
        expect(summaryTds[1].innerText).toBe('0');
      });
    });
  
    describe('createCurPayment', () => {
      it('should create a valid payment object with positive bill amount and non-negative tip amount', () => {
        // Set up the input values
        billAmtInput.value = '50';
        tipAmtInput.value = '10';
  
        const result = createCurPayment();
  
        expect(result).toEqual({
          billAmt: '50',
          tipAmt: '10',
          tipPercent: 20,
        });
      });
  
      it('should return undefined if bill amount or tip amount is empty', () => {
        // Set up the input values with empty bill amount
        billAmtInput.value = '';
        tipAmtInput.value = '10';
  
        const result = createCurPayment();
  
        expect(result).toBeUndefined();
  
        // Set up the input values with empty tip amount
        billAmtInput.value = '50';
        tipAmtInput.value = '';
  
        const result2 = createCurPayment();
  
        expect(result2).toBeUndefined();
      });
  
      it('should return undefined if bill amount is negative', () => {
        // Set up the input values with negative bill amount
        billAmtInput.value = '-50';
        tipAmtInput.value = '10';
  
        const result = createCurPayment();
  
        expect(result).toBeUndefined();
      });
    });
  
    // Write more tests for other functions...
  
  });
  