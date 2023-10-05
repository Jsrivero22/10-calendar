import { useDispatch, useSelector } from "react-redux"
import { onCloseDateModal, onOpenDateModal,  } from "../store";

export const useUiStore = () => {

    const dispatch = useDispatch();

    const { isDateModalOpen } = useSelector( state =>  state.ui );

    const onDateModal = () => {
        dispatch( onOpenDateModal() )
    }

    const closeDateModal = () => {
        dispatch( onCloseDateModal() );
    }

    const toggleDateModal = () => {
        (isDateModalOpen)
            ? onDateModal()
            : closeDateModal()
    }

    return {
        //* Properties
        isDateModalOpen,

        //* Methods
        onDateModal,
        closeDateModal,
        toggleDateModal,
    }
}