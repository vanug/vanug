import React,{useContext} from 'react'
import { GlobalContext } from '../context/Context'
import Banner from '../components/Banner'

function MyStuff() {
    const { savedList } = useContext(GlobalContext);
    return (
        <div className='bg-black min-h-screen overflow-y-scroll'>
        <div className=" mt-14 mx-10">
        <div className="flex items-center text-2xl font-medium mb-4 ml-4">
            <p className='text-blue-500 mr-2'>Prime</p>
            <span className='text-white'>My Stuff</span>
        </div>
        <div className="flex overflow-x-auto whitespace-nowrap space-x-4 py-4 pl-4">
           
            {savedList.map(item => (
                 <div className="flex-shrink-0">
                    <Banner
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        title={item.title}
                        description={item.description}
                    />
                    </div>
                ))}
            
              
            </div>
        </div>
        </div>
    );
}


export default MyStuff