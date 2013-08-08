(function(){
  describe("uPrompt", function() {
    beforeEach(function() {
      this.data = [{u: 33.4, g: 2.34, r: 22, i: 44, z: 1.50, p: 'test'},
        {u: 31.0, g: 2.84, r: 23, i: 14, z: 2.50, p: 'not'},
        {u: 34.53, g: 2.04, r: 29, i: 23, z: 3.50, p: 'test'},
        {u: 38.34, g: 2.48, r: 28, i: 53, z: 4.50, p: 'not'},
        {u: 35.6, g: 2.09, r: 28, i: 74, z: 5.50, p: 'test'},
        {u: 29.1, g: 2.91, r: 27, i: 84, z: 6.50, p: 'test not'},
        {u: 34.0, g: 2.43, r: 22, i: 24, z: 7.50, p: 'test'},
        {u: 45.8, g: 2.68, r: 21, i: 41, z: 8.50, p: 'not'},
        {u: 18.943, g: 2.10, r: 24, i: 18, z: 9.50, p: 'test'},
        {u: 32.22, g: 2.40, r: 29, i: 34, z: 10.50, p: 'test'},
        {u: 1230, g: 22.0, r: 20, i: 14, z: 11.50, p: 'test'}]
    });
    describe("grammar", function() {
      it("should parse the following filter statements", function() {
        expect(Fql.Parser.parse("filter .u > .g")).to.be.ok;
        expect(Fql.Parser.parse("filter .u < .g")).to.be.ok;
        expect(Fql.Parser.parse("filter .u > .g + (.i * .z)")).to.be.ok;
        expect(Fql.Parser.parse("filter .u < .g + log .i, 10")).to.be.ok;
      });

      it("should parse following field statements", function() {
        expect(Fql.Parser.parse("field 'color', .u - .g")).to.be.ok;
        expect(Fql.Parser.parse("field 'crazy named field', recip .u")).to.be.ok;
        expect(Fql.Parser.parse("field 'stuff', .u - -.u")).to.be.ok;
        expect(Fql.Parser.parse("field 'other things', .z * (.i / 3)")).to.be.ok;
      });

      it("should fail to parse the following statement", function() {
        expect(function() {Fql.Parser.parse('filter u + .g');})
        .to.throw(/Expected/);
      });

    });

    describe("Filters", function() {
      it("should allow string comparisons", function() {
        var filter = Fql.Parser.parse("filter .p = 'test'")[0].eval();
        expect(this.data.filter(filter.func)).to.have.length(7);
      });
      it("should allow multi-word string comparisons", function() {
        var filter = Fql.Parser.parse("filter .p = 'test not'")[0].eval();
        expect(this.data.filter(filter.func)).to.have.length(1);
      });

      it("should use greater than", function() {
        var filter = Fql.Parser.parse("filter .u > 40")[0].eval()
        expect(this.data.filter(filter.func)).to.have.length(2);
      });

      it("should use greater than", function() {
        var filter = Fql.Parser.parse("filter .u < 40")[0].eval()
        expect(this.data.filter(filter.func)).to.have.length(9);
      });

      it("should be able to use arithmatic expressions", function() {
        var filter = Fql.Parser.parse("filter .u + .g < .z * 10")[0].eval()
        expect(this.data.filter(filter.func)).to.have.length(7);
      });
    });

    describe("Fields", function() {
      beforeEach(function() {
        this.applyField = function(field) {
          return this.data.map(function(i) {
            i[field.field] = field.func(i);
            return i;
          });
        }
      });

      it("should apply log", function() {
        var field = Fql.Parser.parse("field 'stuff', log .u, 10")[0].eval();
        expect(this.applyField(field)).to.have.deep.property('[0].stuff')
        .and.be.within(1.52, 1.53);
      });

      it("should apply add", function() {
        var field = Fql.Parser.parse("field 'stuff', .u + 10")[0].eval();
        expect(this.applyField(field)).to.have.deep.property('[0].stuff')
        .and.equal(43.4);
      });

      it("should apply pow", function() {
        var field = Fql.Parser.parse("field 'stuff', .r ^ 3")[0].eval();
        expect(this.applyField(field)).to.have.deep.property('[6].stuff')
        .and.equal(10648);
      });

      it("should apply multiply", function() {
        var field = Fql.Parser.parse("field 'stuff', .u * 10")[0].eval();
        expect(this.applyField(field)).to.have.deep.property('[10].stuff')
        .and.equal(12300);
      });

      it("should apply divide", function() {
        var field = Fql.Parser.parse("field 'stuff', .u / 10")[0].eval();
        expect(this.applyField(field)).to.have.deep.property('[10].stuff')
        .and.equal(123);
      });

      it("should apply subtract", function() {
        var field = Fql.Parser.parse("field 'stuff', .z - 0.5")[0].eval();
        expect(this.applyField(field)).to.have.deep.property('[5].stuff')
        .and.equal(6);
      });

      it("should negate", function() {
        var field = Fql.Parser.parse("field 'stuff', -.g")[0].eval();
        expect(this.applyField(field)).to.have.deep.property('[0].stuff')
        .and.equal(-2.34);
      });

      it("should apply reciprocate", function() {
        var field = Fql.Parser.parse("field 'stuff', recip .i")[0].eval();
        expect(this.applyField(field)).to.have.deep.property('[3].stuff')
        .and.be.within(0.0188, 0.0189);
      });

      it("should respect order of operations", function() {
        var field = Fql.Parser.parse("field 'stuff', .u + .g * 10")[0].eval();
        expect(this.applyField(field)).to.have.deep.property('[0].stuff')
        .and.equal(56.8);
        var field = Fql.Parser.parse("field 'stuff', .g * 10 + .u")[0].eval();
        expect(this.applyField(field)).to.have.deep.property('[0].stuff')
        .and.equal(56.8);
      });

      it("should allow parens to group operations", function() {
        var field = Fql.Parser.parse("field 'stuff', (.u + .g) * 10")[0].eval();
        expect(this.applyField(field)).to.have.deep.property('[0].stuff')
        .and.equal(357.4);
      });

      it("should create a new field", function() {
        var statement = "field 'stuff', .u + (-.g + .r ^ 2 * 7) + log (.i - .z), 10"
        var field = Fql.Parser.parse(statement)[0].eval()
        expect(this.applyField(field)).to.have.deep.property('[0].stuff')
        .and.be.within(3420.688, 3420.689);
      });
    });
  });
}).call(this);