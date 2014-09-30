import DS from 'ember-data';

export default DS.Model.extend({
    show_title: DS.attr('string'),
    release_year:DS.attr('string'),
    rating:DS.attr('string'),
    director:DS.attr('string'),
    summary:DS.attr('string'),
    poster:DS.attr('string'),
    runtime:DS.attr('string')
});
