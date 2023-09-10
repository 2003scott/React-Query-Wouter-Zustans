import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Link, useRoute } from "wouter"

const axiosHotel = async(id) =>{
    const res = await axios(`http://localhost:3001/hotels/${id}`)
    if (!res.data) {
        throw new Error("Network response was not ok")
    }
    return res.data
}

function HotelDetails() {
    const [,params] = useRoute("/hotel/:id");
	const {
		data: hotel,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["hotel", params.id],
		queryFn: () => axiosHotel(params.id),
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error fetching Hotel! {error.message}</div>;
	}

    return(
        <div className="flex items-center justify-around pt-[50%] sm:pt-[35%] md:pt-[20%] lg:-pt[10%] xl:pt-[15%]">
        <div>
            <img className="h-[250px]" src={hotel.image} title={hotel.name}/>
            <div className="flex items-center justify-between py-5">
                <h5 className="text-lg">{hotel.name}</h5>
                <p className="text-lg">{hotel.description}</p>
            </div>
            <div>
            <Link href="/">
            <button className="p-2 bg-blue-500 rounded-md">
                Volver
            </button>
            </Link>
        </div>
        </div>
        </div>
    )
}

export default HotelDetails