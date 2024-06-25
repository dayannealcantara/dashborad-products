import Card from "../../components/Card";
import OrderList, { Order } from "../../components/List";
import { AppContainer, Grid, Heading } from "./style";
import rawData from "../../mock/data.json"; 

const orders: Order[] = rawData;

const totalValue = orders.reduce((total, order) => total + order.valorTotal, 0); 
const totalOrders = orders.length; 

const Dashboard = () => (
  <AppContainer>
    <Heading>Pedidos</Heading>
    <Grid>
      <Card title="Total de Pedidos" value={`${totalOrders.toString()} unidade`} />
      <Card title="Valor total" value={`R$ ${totalValue.toFixed(2)}`} />    
    </Grid>
    <OrderList orders={orders} /> 
  </AppContainer>
);

export default Dashboard
