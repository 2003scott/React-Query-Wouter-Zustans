import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import { Link } from 'wouter'

const fetchHotels = async () => {
	const res = await axios.get("http://localhost:3001/hotels");
	if (!res.data) {
		throw new Error("Network response was not ok");
	}
	return res.data;
}

const HotelList = ()=> {
    const {
		data: hotels,
		isLoading,
		error,
	} = useQuery({ queryKey: ["hotels"], queryFn: fetchHotels });

    if(isLoading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error ala hora de tomar los datos Hotels! {error.message}</div>
    }

    return (
        <>
            <h4 className='text-center text-2xl lg:text-4xl font-mono py-5'>Booking App</h4>
            <div className='grid justify-around gap-20 items-center container md:grid-cols-2 md:items-center xl:flex xl:justify-around  xl:min-w-full xl:pt-[10%]' >
                {hotels.map(hotel =>(
                        <div key={hotel.id} className='md:flex items-center justify-center'>
                            <div>
                                <img src={hotel.image}
                                alt={hotel.name}
                                className='w-[225px] h-[225px] lg:w-[250px] lg:h-[250px] md:flex md:items-center md:justify-center'/>
                                <div>
                                    <h5>{hotel.name}</h5>
                                    <p>{hotel.description}</p>
                                </div>
                                <Link href={`/hotel/${hotel.id}`}>
                                <div>
                                    <button className='text-xs xl:text-xl bg-blue-600 p-2 rounded-md '>See Details</button>
                                </div>
                                </Link>
                            </div>
                        </div>
                ))}
            </div>
        </>
    )

}

export default HotelList