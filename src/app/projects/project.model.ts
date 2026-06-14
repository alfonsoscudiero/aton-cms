export class Project {
  constructor(
    public id: string,
    public quoteNumber: string,
    public name: string,
    public location: string,
    public country: string,
    public completionDate: string,
    public description: string,
    public lanternIds: string[],
    public buoyIds: string[]
  ) {}
}