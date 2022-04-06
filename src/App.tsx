import React, {useEffect} from 'react';
import AppContainer from './components/AppContainer';
import Catalog from './components/Catalog';
import {useAppDispatch} from './redux/hooks';
import {fetchProductList} from './redux/productSlice';

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);

  return (
    <AppContainer>
      <Catalog />
    </AppContainer>
  );
};

export default App;
