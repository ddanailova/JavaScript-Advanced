let assert = require('chai').assert;
let expect =require('chai').expect;
let SubscriptionCard = require('./02_SubscriptionCard');

describe('Class SubscriptionCard',()=>{
    let card;
    beforeEach('initialize card',()=>{
        card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
    });
    it('should return first name with get',()=>{
        let result = card.firstName;
        assert.equal(result, 'Pesho');
    });
    it('should not allow changing the name',()=>{
        card.firstName = 'Gosho';
        assert.equal(card.firstName, 'Pesho');
    });
    it('should return last name with get',()=>{
        let result = card.lastName;
        assert.equal(result, 'Petrov');
    });
    it('should not allow changing the last name',()=>{
        card.lastName = 'ivanov';
        assert.equal(card.lastName, 'Petrov');
    });
    it('should return SNN  with get',()=>{
        let result = card.SSN;
        assert.equal(result, '00000000');
    });
    it('should not allow changing the SSN',()=>{
        card.SSN ="test";
        assert.equal(card.SSN, '00000000');
    });
    it('should have default value false for isBlocked',()=>{
        let result = card.isBlocked;
        assert.isFalse(result);
    });

    describe('addSubscription(line, startDate, endDate)',()=>{
        it('should cread object with certain props',()=>{
            assert.equal(card._subscriptions.length,0);
            assert.deepEqual(card._subscriptions,[]);
        });

        it('should add subscriptions correctly', ()=>{
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            assert.equal(card._subscriptions.length, 1);
            assert.equal(card._subscriptions[0].line, 120);
            assert.deepEqual(card._subscriptions[0].startDate, new Date('2018-04-22'));
            assert.deepEqual(card._subscriptions[0].endDate, new Date('2018-05-21'));
        });

        it('should add subscriptions correctly', ()=>{
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
            assert.equal(card._subscriptions.length, 2);
            assert.equal(card._subscriptions[0].line, 120);
            assert.deepEqual(card._subscriptions[0].startDate, new Date('2018-04-22'));
            assert.deepEqual(card._subscriptions[0].endDate, new Date('2018-05-21'));
            assert.equal(card._subscriptions[1].line, '*');
            assert.deepEqual(card._subscriptions[1].startDate, new Date('2018-05-25'));
            assert.deepEqual(card._subscriptions[1].endDate, new Date('2018-06-24'));
        });
    });

    describe('block()',()=>{
        it("should make _block prop true",()=>{
            assert.isFalse(card._blocked);
            card.block();
            assert.isTrue(card._blocked);
        });
    });

    describe('unblock()',()=>{
        it("should make _block prop false",()=>{
            card.block();
            card.unblock();
            assert.isFalse(card._blocked);
        });

        it("should make _block prop false",()=>{
            card.unblock();
            card.block();
            assert.isTrue(card._blocked);
        });
    });

    describe('isValid',()=>{
        it("should return false for empty card",()=>{
            assert.isFalse(card.isValid('120', new Date('2018-04-22')));
        });

        it('should return false if one day before',()=>{
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            let result = card.isValid('120', new Date('2018-04-21'));
            assert.isFalse(result);
        });

        it('should return false if one day after',()=>{
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            let result = card.isValid('120', new Date('2018-05-22'));
            assert.isFalse(result);
        });

        it('should return true on start',()=>{
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            let result = card.isValid('120', new Date('2018-04-22'));
            assert.isTrue(result);
        });

        it('should return true on end',()=>{
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            let result = card.isValid('120', new Date('2018-05-21'));
            assert.isTrue(result);
        });

        it('should return false for different line',()=>{
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            let result = card.isValid('122', new Date('2018-05-20'));
            assert.isFalse(result);
        });

        it('should return false for different line',()=>{
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            let firstLine = card.isValid('122', new Date('2018-05-20'));
            let secondLine = card.isValid('12', new Date('2018-05-20'));
            assert.isTrue(firstLine);
            assert.isTrue(secondLine);
        });

        it('should return false if one day after',()=>{
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            let result = card.isValid('12450', new Date('2018-05-22'));
            assert.isFalse(result);
        });

        it('should return true on start',()=>{
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            let result = card.isValid('10', new Date('2018-04-22'));
            assert.isTrue(result);
        });
        it('should return false for different line',()=>{
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            card.block();
            assert.isFalse(card.isValid('122', new Date('2018-05-20')));
        });
    });
});