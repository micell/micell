const isType = type => o =>
  Object.prototype.toString.call(o) === `[object ${type}]`;

export default isType;
