import { Persona } from './persona';

describe('Persona', () => {
  it('should create an instance', () => {
    expect(new Persona("Raúl","Lorenzo",32,"12345678j",new Date(1995,11,2),"Rojo","Hombre")).toBeTruthy();
  });
});
