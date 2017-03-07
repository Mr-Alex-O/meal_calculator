let diner = {
    partyTotal: 0,
    totalCost: function() {

        for (let partyMember in bill.partyMembers) {
            let personalTotal = 0;
            let mealNumber = 1;
            console.log('Name: ', bill.partyMembers[partyMember].name);
            for (let meal in bill.partyMembers[partyMember].meals) {
                console.log('Meal ' + mealNumber + ': ' + bill.partyMembers[partyMember].meals[meal].name + ' $' + bill.partyMembers[partyMember].meals[meal].price);
                personalTotal += bill.partyMembers[partyMember].meals[meal].price;
                this.partyTotal += personalTotal;
                mealNumber++;
            };
            console.log('The total for ' + bill.partyMembers[partyMember].name + ' is: $' + personalTotal + '\n');
        };
        return console.log('Total: $', this.partyTotal);
    },

    tax: function() {
        return console.log('Tax: $' + (this.partyTotal * .07).toFixed(2) + '\nTotal with tax: $' + (this.partyTotal * 1.07).toFixed(2));
    },

    tip: function() {
        return console.log('15% tip: $' + this.partyTotal * .15 + '\n18% tip: $' + this.partyTotal * .18 +
            '\n20% tip: $' + this.partyTotal * .20);
    }
}

let bill = {
    partyMembers: [{
        name: 'Alex',
        meals: [{
            name: 'Rockshrimp',
            price: 25
        }, {
            name: 'Steak',
            price: 20
        }]
    }, {
        name: 'Brittney',
        meals: [{
            name: 'Ribs',
            price: 16
        }, {
            name: 'Royal Red Shrimp',
            price: 20
        }]
    }, {
        name: 'Josh',
        meals: [{
            name: 'Oysters',
            price: 9
        }, {
            name: 'Shrimp Po Boy',
            price: 10
        }]
    }]
};

diner.totalCost();
diner.tax();
diner.tip();
