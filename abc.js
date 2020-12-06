module.exports = {
  arvoLuku: function (minLuku, maxLuku) {
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
}