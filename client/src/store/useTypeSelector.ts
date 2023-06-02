import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "@/store/reducers/combine";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
