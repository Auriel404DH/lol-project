import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import useFilter from './useFilter';
import useUpdate from './useUpdate';
import type { RootState, AppDispatch } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useFilter, useUpdate };
