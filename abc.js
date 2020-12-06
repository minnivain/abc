module.exports = {
 // funktio palauttaa satunnaisen kokonaisluvun parametrin minLuku ja maxLuku välillä
  arvoLuku: function (minLuku, maxLuku) {
  // minLuku ja maxLuku kumpikin numeroita
    return Math.floor(Math.random() * (maxLuku + 1 - minLuku)) + minLuku;
  },
  prototyyppiKetju: function (obj) {
    let proto = obj.constructor.prototype,
    ketju ='';
    while (proto !== null) {
      ketju += proto.constructor.name + ' -> ';
      proto = Object.getPrototypeOf(proto);
    }
    return (ketju += proto);
  },
   helloWorld: function() {
	return 'Hello World';
   }
}
