// Reputation aka happiness level in a particular camp
define(['ash'], function (Ash) {
    var ReputationComponent = Ash.Class.extend({

        constructor: function () {
            this.value = 0;
            this.targetValue = 0;
            this.isAccumulating = false;
            this.accumulation = 0;
            this.accSources = [];
            this.targetValueSources = [];
        },

        addChange: function (source, amount) {
            if (amount === 0) return;

            for (var i = 0; i < this.accSources.length; i++) {
                var change = this.accSources[i];
                if (change.source === source) {
                    change.amount += amount;
                    return;
                }
            }

            this.accSources.push({ source: source, amount: amount });
        },

        addTargetValueSource: function (source, amount) {
            if (amount === 0) return;

            for (var i = 0; i < this.targetValueSources.length; i++) {
                var change = this.targetValueSources[i];
                if (change.source === source) {
                    change.amount += amount;
                    return;
                }
            }

            this.targetValueSources.push({ source: source, amount: amount });
        },

        getTotalChange: function () {
            var total = 0;
            var source;
			for (var i in this.accSources) {
				source = this.accSources[i];
                total += source.amount;
			}
            return total;
        },

        getSaveKey: function () {
            return "Reputation";
        },

    });

    return ReputationComponent;
});
