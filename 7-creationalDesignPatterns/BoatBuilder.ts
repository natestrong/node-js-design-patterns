class BoatBuilder {
    private hasMotor: boolean;
    private motorCount: number;
    private motorBrand: string;
    private motorModel: string;
    private hasSails: boolean;
    private sailsCount: number;
    private sailsMaterial: string;
    private sailsColor: string;
    private hasCabin: boolean;
    private hullColor: string;

    withMotors(count: number, brand: string, model: string) {
        this.hasMotor = true;
        this.motorCount = count;
        this.motorBrand = brand;
        this.motorModel = model;
        return this;
    }

    withSails(count: number, material: string, color: string) {
        this.hasSails = true;
        this.sailsCount = count;
        this.sailsMaterial = material;
        this.sailsColor = color;
        return this;
    }

    setHullColor(color: string) {
        this.hullColor = color;
        return this;
    }

    withCabin() {
        this.hasCabin = true;
        return this;
    }

    build() {
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
    }
}
