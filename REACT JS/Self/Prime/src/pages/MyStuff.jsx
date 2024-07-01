import React,{useContext} from 'react'
import { GlobalContext } from '../context/Context'
import Banner from '../components/Banner'

function MyStuff() {
    const { savedList } = useContext(GlobalContext);
    return (
        <div className="mt-14 mx-10">
            <h1 className="text-2xl font-medium mb-4 ml-4 text-white">My Stuff</h1>
            <div className=" flex overflow-x-auto flex-wrap">
                {savedList.map(item => (
                    <Banner
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
}


export default MyStuff
