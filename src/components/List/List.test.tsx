import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import OrderList, { Order } from ".";

const orders: Order[] = [
  {
    id: 1,
    data: "2024-06-25",
    valorTotal: 250,
    produtos: [
      { nome: "Produto 1", valor: 100 },
      { nome: "Produto 2", valor: 150 },
    ],
    cliente: {
      nome: "João",
      email: "joao@example.com",
      cpf: "123.456.789-00",
    },
    status: "Em andamento",
  },
  {
    id: 2,
    data: "2024-06-26",
    valorTotal: 180,
    produtos: [
      { nome: "Produto 3", valor: 80 },
      { nome: "Produto 4", valor: 100 },
    ],
    cliente: {
      nome: "Maria",
      email: "maria@example.com",
      cpf: "987.654.321-00",
    },
    status: "Concluído",
  },
];
describe("OrderList Component", () => {
  test("renders order list correctly", () => {
    render(<OrderList orders={orders} />);

    // Verifica se todos os nomes dos produtos estão presentes
    expect(screen.getByText("Produto 1, Produto 2")).toBeInTheDocument();
    expect(screen.getByText("Produto 3, Produto 4")).toBeInTheDocument();

    // Verifica se os valores totais estão presentes e formatados corretamente
    expect(screen.getByText("R$ 250.00")).toBeInTheDocument();
    expect(screen.getByText("R$ 180.00")).toBeInTheDocument();

    // Verifica se os emails dos clientes estão presentes
    expect(screen.getByText("joao@example.com")).toBeInTheDocument();
    expect(screen.getByText("maria@example.com")).toBeInTheDocument();

    // Verifica se os status das ordens estão presentes
    expect(screen.getByText("Em andamento")).toBeInTheDocument();
    expect(screen.getByText("Concluído")).toBeInTheDocument();
  });
});
