class Weapon {
  constructor(name, dmg, range, rangePenalty) {
    (this.name = name),
      (this.range = range),
      (this.dmg = dmg),
      (this.rangePenalty = rangePenalty),
      (this.dmgAtRange = function(range) {
        const rangeMod = Math.abs(range - this.range) * rangePenalty;
        return this.dmg > rangeMod ? this.dmg - rangeMod : 0;
      }),
      (this.cost = function() {
        return this.range * 2 + this.dmg * 6 - this.rangePenalty * 6;
      });
  }
}

export default Weapon;
