App.IndexController = Ember.ArrayController.extend({
  sortProperties: null,
  sortAscending: null,

  actions: {
   sortByAttribute: function (attr) {
   if (this.get('sortProperties')) {
     if (this.get('sortProperties')[0] === attr) {
       this.toggleProperty('sortAscending');
     } else {
       this.set('sortProperties', [attr]);
     }
   } else {
     this.set('sortProperties', [attr]);
     this.set('sortAscending', true);
   }
   }
   }
});
