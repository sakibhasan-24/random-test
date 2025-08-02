export function createTrip(tripPerKm:number){
    // add distance
    let distance:number = 0;
    return {
        addDistance(km:number):void{
            distance += km;
        },
        getFare():number{
            return distance * tripPerKm;
        }
        ,
        reset():void{
            distance = 0; 
        },
        getDistance():number{
            return distance;
        }
    }
    //get total fare
    //reset distance
}