interface Endereco {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  cidade: string;
  uf: string;
}

interface DadosBancarios {
  ag: string;
  cc: string;
  nomeBanco: string;
}

export interface Fornecedor{
  uid: string;
  nome: string;
  doc: string;
  telefone: string;
  email: string;
  endereco: Endereco;
  dadosBancarios: DadosBancarios;
}
