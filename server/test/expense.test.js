import chai, { assert, expect } from 'chai';
import expense from '../models/expense';

describe('Expense', () => {
    it('should return a function', () => {
        expect(expense).to.be.a('function');
    });
});