import Card from "../../components/Card";
import OrderList, { Order } from "../../components/List";
import { AppContainer, Grid, Title } from "./style";
import axios from 'axios';
import { useEffect, useState } from "react";


const api = axios.create({
  baseURL: 'http://localhost:3000',
});

const Dashboard = () => {
  const [products, setProducts] = useState([])

  async function listProduct () {
    try{
      const response = await api.get('/products')
      setProducts(response.data)

    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    listProduct()
  },[])

  function totalValue (products:Order[]) {
    return products.reduce((acc, order) => acc + order.valorTotal, 0); 
  }
 
  return(
    <AppContainer>
      <Title>Pedidos</Title>
      <Grid>
        <Card title="Total de Pedidos" value={`${products.length} unidade`} />
        <Card title="Valor total" value={`R$ ${totalValue(products).toFixed(2)}`} />    
      </Grid>
      <OrderList orders={products} /> 
    </AppContainer>
  )
}

export default Dashboard
