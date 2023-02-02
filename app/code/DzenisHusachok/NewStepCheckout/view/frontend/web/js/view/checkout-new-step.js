define([
    'ko',
    'uiComponent',
    'underscore',
    'Magento_Checkout/js/model/step-navigator'
], function (ko, Component, _, stepNavigator) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'DzenisHusachok_NewStepCheckout/new-step-checkout'
        },
        isVisible: ko.observable(true),
        stepCode: 'newStepCheckout',
        stepTitle: 'Checkout Products',

        /**
         * @returns {*}
         */
        initialize: function () {
            this._super();

            stepNavigator.registerStep(
                this.stepCode,
                null,
                this.stepTitle,
                this.isVisible, _.bind(this.navigate, this), 5);

            return this;
        },

        navigate: function () {
            this.isVisible(true);
        },

        /**
         * @returns void
         */
        navigateToNextStep: function () {
            stepNavigator.next();
        }
    });
});