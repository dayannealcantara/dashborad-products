import { Table, Td, Th, Thead } from "./style";

export interface Produto {
  nome: string;
  valor: number;
}

export interface Cliente {
  nome: string;
  email: string;
  cpf: string;
}

export interface Order {
  id: number;
  data: string;
  valorTotal: number;
  produtos: Produto[];
  cliente: Cliente;
  status: string;
}

interface OrderListProps {
  orders: Order[];
}

const OrderList: React.FC<OrderListProps> = ({ orders }) => (
  <Table>
    <Thead>
      <tr>
        <Th>Produto</Th>
        <Th>Valor</Th>
        <Th>Email</Th>
        <Th>Status</Th>
      </tr>
    </Thead>
    <tbody>
      {orders.map((order) => (
        <tr key={order.id}>
          <Td>{order.produtos.map((produto) => produto.nome).join(", ")}</Td>
          <Td>{`R$ ${order.valorTotal.toFixed(2)}`}</Td>
          <Td>{order.cliente.email}</Td>
          <Td>{order.status}</Td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default OrderList;
