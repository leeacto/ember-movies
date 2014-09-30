import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Route.extend({
  model: function() {
    this.store.push('movie', {
      id: 2,
      show_title: "The Pianist",
      release_year: "2002",
      rating: "4.1",
      director: "Roman Polanski",
      summary: "Famed Polish pianist Wladyslaw Szpilman struggles to survive the onslaught of Nazi tyranny during World War II in this drama based on his memoirs. In spite of his well-known talent, Szpilman spends several years holed up in Warsaw, clinging to life.",
      poster: "http://netflixroulette.net/api/posters/60025061.jpg",
      runtime: "150 min"
    });
    this.store.push('movie', {
    id: 1,
    show_title: "Donnie Darko",
    release_year: "2001",
    rating: "3.9",
    director: "Richard Kelly",
    summary: "Writer-director Richard Kelly's trippy, mind-bending feature debut stars Jake Gyllenhaal as a troubled Midwestern teenager plagued by incessant sleepwalking, family drama and visions of a menacing 6-foot-tall, doomsday-prophesying rabbit.",
    poster: "http://netflixroulette.net/api/posters/60022315.jpg",
    runtime: "113 min"});
              
    return this.store.all('movie');
   }

});
