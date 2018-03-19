import chai, { assert, expect } from 'chai';
import index from '../models/index';

describe('Index', () => {
    it('expect to return an Object', () => {
        expect(index).to.be.a('Object');
    });
});