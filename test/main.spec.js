import {expect} from 'chai';
import {sum, sub, mult, div} from '../src/main';

describe('Main', () => {
	//smoke tests
	describe('Smoke tests', () => {
		it('should exists the method sum', () => {
			expect(sum).to.exist;
			expect(sum).to.be.a('function');
		});

		it('should exists the method sub', () => {
			expect(sub).to.exist;
			expect(sub).to.be.a('function');
		});

		it('should exists the method mult', () => {
			expect(mult).to.exist;
			expect(mult).to.be.a('function');
		});

		it('should exists the method div', () => {
			expect(div).to.exist;
			expect(div).to.be.a('function');
		});
	});

	describe('Sum', () => {
		it('should return 4 when sum(2,2)', () => {
			expect(sum(2, 2)).to.be.equal(4);
		});

		it('should return 4 when sub(8,4)', () => {
			expect(sub(8, 4)).to.be.equal(4);
		});

		it('should return -4 when sub(6, 10)', () => {
			expect(sub(6, 10)).to.be.equal(-4);
		});

		it('should return 4 when mult(2,2)', () => {
			expect(mult(2, 2)).to.be.equal(4);
		});

		it('should return 2 when div(4,2)', () => {
			expect(div(4, 2)).to.be.equal(2);
		});

		it('should return `Não é possível divisão por zero` when div(4,0)', () => {
			expect(div(4, 0)).to.be.equal('Não é possível divisão por zero');
		});

		it('should return 0.5 when div(1,2)', () => {
			expect(div(1, 2)).to.be.equal(0.5);
		});
	});
});
