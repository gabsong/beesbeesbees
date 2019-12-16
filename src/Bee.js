var Bee = function() {
  // calls Grub() and the instance of Bee will be bound to the keyword 'this'
  // within the body of Grub
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;