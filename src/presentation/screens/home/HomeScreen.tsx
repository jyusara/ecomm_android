import { getProductsByPage } from '../../../actions/products/get-products-by-page';
import { useQuery } from '@tanstack/react-query';
import { MainLayout } from '../../layouts/MainLayout';
import {  Text } from '@ui-kitten/components';
import { FullScreenLoader } from '../../components/ui/FullScreenLoader';
import { ProductList } from '../../components/products/ProductsList';


export const HomeScreen = () =>{
   const {isLoading, data:products = []} = useQuery({
    queryKey: ['products','infinite'],
    staleTime: 100*60*60,
    queryFn: ()=> getProductsByPage(0),
  });

  return (
    <MainLayout
    title='EasyShop - Products'
    subTitle='Aplicación Administrativa'
    >
      {
        isLoading
        ? (<FullScreenLoader/>)
        : <ProductList products={products}/>
      }
    </MainLayout>
  )
}