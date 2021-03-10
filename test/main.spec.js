var expect = require('chai').expect;
var calc = require('../src/main.js');

describe('Main', () => {
	//smoke tests
	describe('Smoke tests', () => {
		it('should exist the calc lib', () => {
			expect(calc).to.exist;
		});

		it('should exists the method sum', () => {
			expect(calc.sum).to.exist;
			expect(calc.sum).to.be.a('function');
		});

		it('should exists the method sub', () => {
			expect(calc.sub).to.exist;
			expect(calc.sub).to.be.a('function');
		});

		it('should exists the method mult', () => {
			expect(calc.mult).to.exist;
			expect(calc.mult).to.be.a('function');
		});

		it('should exists the method div', () => {
			expect(calc.div).to.exist;
			expect(calc.div).to.be.a('function');
		});
	});

	describe('Sum', () => {
		it('should return 4 when sum(2,2)', () => {
			expect(calc.sum(2, 2)).to.be.equal(4);
		});

		it('should return 4 when sub(8,4)', () => {
			expect(calc.sub(8, 4)).to.be.equal(4);
		});

		it('should return -4 when sub(6, 10)', () => {
			expect(calc.sub(6, 10)).to.be.equal(-4);
		});

		it('should return 4 when mult(2,2)', () => {
			expect(calc.mult(2, 2)).to.be.equal(4);
		});

		it('should return 2 when div(4,2)', () => {
			expect(calc.div(4, 2)).to.be.equal(2);
		});

		it('should return `Não é possível divisão por zero` when div(4,0)', () => {
			expect(calc.div(4, 0)).to.be.equal('Não é possível divisão por zero');
		});

		it('should return 0.5 when div(1,2)', () => {
			expect(calc.div(1, 2)).to.be.equal(0.5);
		});
	});
});
