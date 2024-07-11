import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../redux/stockSlice';
import { AppDispatch, RootState } from '../redux/ store';

const useUserData = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error, firstLoading } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  const { sumCurrentValue, sumInvestmentValue, sumTodayProfitLoss, sumProfitLoss } = useMemo(() => {
    const sumCurrentValue = data?.userHolding?.reduce((sum, item) => sum + item.ltp * item.quantity, 0) || 0;
    const sumInvestmentValue = data?.userHolding?.reduce((sum, item) => sum + item.avgPrice * item.quantity, 0) || 0;
    const sumTodayProfitLoss = data?.userHolding?.reduce((sum, item) => sum + (item.ltp - item.close) * item.quantity, 0) || 0;
    const sumProfitLoss = sumCurrentValue - sumInvestmentValue;
    return { sumCurrentValue, sumInvestmentValue, sumTodayProfitLoss, sumProfitLoss };
}, [data]);



  const onRefresh = () => {
    dispatch(fetchUser());
  };

  return { data : data?.userHolding ?? [],firstLoading, loading, error, sumCurrentValue, sumInvestmentValue, sumTodayProfitLoss, sumProfitLoss, onRefresh };
};

export default useUserData;
