import chai, { assert, expect } from 'chai';
import resolver from '../controllers/resolver';

describe('Resolver', () => {

    it('expect to return an Object', () => {
        expect(resolver).to.be.a('Object');
    });

    it('expect to have a Query property', () => {
        expect(resolver).to.have.property('Query');
    });

    it('expect Query contains findAllExpenses', () => {
        expect(resolver.Query).to.have.property('findAllExpenses');
    });

    it('expect Query contains findOneExpense', () => {
        expect(resolver.Query).to.have.property('findOneExpense');
    });

    it('expect Query contains totalExpenses', () => {
        expect(resolver.Query).to.have.property('totalExpenses');
    });

    it('expect to have a Mutation property', () => {
        expect(resolver).to.have.property('Mutation');
    });

    it('expect Mutation contains createExpense', () => {
        expect(resolver.Mutation).to.have.property('createExpense');
    });

    it('expect Mutation contains updateExpense', () => {
        expect(resolver.Mutation).to.have.property('updateExpense');
    });

    it('expect Mutation contains deleteExpense', () => {
        expect(resolver.Mutation).to.have.property('deleteExpense');
    });
    
});