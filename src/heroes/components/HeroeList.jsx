import { getHeroesByPushier } from "../helpers/getHeroesByPushier"
import { HeroeCard } from "./HeroeCard";


export const HeroeList = ({publishe}) =>{
    const heroe = getHeroesByPushier(publishe);
    console.log(heroe)
    return(
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroe.map((hero)=>(
                    <HeroeCard key={hero.id} {...hero}/>
                ))
            }
        </div>
    )
}