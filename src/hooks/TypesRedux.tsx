import { useDispatch, useSelector, useStore } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { AppDispatch, AppStore, RootState } from '../state-management/redux/store/store';


export const useAppDispatch: () => AppDispatch =
 useDispatch;//retur a dispatch function type is AppDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
