import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import useStore from '../store';


function BookingForm({ hotel }) {

    const {
        register,
        handleSubmit,
        formState : { errors }
    } = useForm()

    const addReservation = useStore((state) => state.addReservation)

    const onSumit = (data) =>{
        addReservation(hotel,data)
        toast.success("La reservea se ha hecho")
    }

    return (
        <form onSubmit={handleSubmit(onSumit)}>
            <input type="date" {...register("startDate", {required : true})}/>
            {errors.startDate && (
                <p>Start date is required</p>
            )}
            <input type="date" {...register("endDate", {required : true})}/>
            {errors.endDate && (
                <p>End date is required</p>
            )}
            <br/>
            <button className="p-2 bg-blue-500 rounded-md" type="submit">
                make reservation
            </button>
        </form>
    );
}

export default BookingForm;