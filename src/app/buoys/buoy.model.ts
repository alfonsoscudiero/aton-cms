export class Buoy {
  constructor(
    // Core mandatory properties
    public id: string,
    public model: string,
    public type: string,
    public imageUrl: string,
    public datasheetUrl: string,

    // Optional technical specifications
    public diameter?: string,
    public grossBuoyancy?: string,
    public overallHeight?: string,
    public focalPlaneHeight?: string
  ) {}
}