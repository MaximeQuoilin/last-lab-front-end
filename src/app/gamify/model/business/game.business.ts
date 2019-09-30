export class GameBusiness {

  public readonly id: number;
  public name: string;
  public description: string;
  public pegi: string;

  constructor(

    id: number,
    name: string,
    description: string,
    pegi: string,

  ) {

    this.id = id;
    this.name = name;
    this.description = description;
    this.pegi = pegi;
  }

}

