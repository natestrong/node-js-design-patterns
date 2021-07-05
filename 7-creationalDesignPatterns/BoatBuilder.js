var BoatBuilder = /** @class */ (function () {
    function BoatBuilder() {
    }
    BoatBuilder.prototype.withMotors = function (count, brand, model) {
        this.hasMotor = true;
        this.motorCount = count;
        this.motorBrand = brand;
        this.motorModel = model;
        return this;
    };
    BoatBuilder.prototype.withSails = function (count, material, color) {
        this.hasSails = true;
        this.sailsCount = count;
        this.sailsMaterial = material;
        this.sailsColor = color;
        return this;
    };
    BoatBuilder.prototype.setHullColor = function (color) {
        this.hullColor = color;
        return this;
    };
    BoatBuilder.prototype.withCabin = function () {
        this.hasCabin = true;
        return this;
    };
    BoatBuilder.prototype.build = function () {
        return new Boat({
            hasMotor: this.hasMotor,
            motorCount: this.motorCount,
            motorBrand: this.motorBrand,
            motorModel: this.motorModel,
            hasSails: this.hasSails,
            sailsCount: this.sailsCount,
            sailsMaterial: this.sailsMaterial,
            sailsColor: this.sailsColor,
            hullColor: this.hullColor,
            hasCabin: this.hasCabin
        });
    };
    return BoatBuilder;
}());
//# sourceMappingURL=BoatBuilder.js.map