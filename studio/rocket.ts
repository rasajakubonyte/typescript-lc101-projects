import {Payload} from './Payload';
import {Cargo} from './cargo';
import {Astronaut} from './Astronout';
export class Rocket {
    name: string
    totalCapacityKg: number
    cargoItems: Cargo[]=[];
    astronauts: Astronaut[]=[];
    massKg: number
        constructor(name:string, totalCapacityKg:number){
            this.name = name;
            this.totalCapacityKg=totalCapacityKg
        
     }
     sumMass( items: Payload[] ): number{
         let totalMass: number = 0;
          for (let i = 0; i<items.length;i++) {
         totalMass += items[i].massKg
          }
            return totalMass
     }
     currentMassKg(): number{
         this.sumMass(this.astronauts) + this.sumMass(this.cargoItems)
         return(this.sumMass(this.astronauts)+ this.sumMass(this.cargoItems))
     }
     canAdd(item: Payload): boolean{
         if (this.currentMassKg() + item.massKg<=this.totalCapacityKg){
         return true
            }
     }
     addCargo(cargo: Cargo): boolean{
         if (this.canAdd(cargo)){
        this.cargoItems.push(cargo);
        return true
         }else{
             return false
         }
        }
    addAstronaut(astronauts: Astronaut){
             if (this.canAdd(astronauts)){
                 this.astronauts.push(astronauts)
                return true
                }
                else{return false}
        }


    }
    


