/*
Uma revendedora de carros usados paga a seus vendedores um salário fixo de R$2000,00 por mês. Os vendedores recebem uma comissão para cada carro vendido, no valor de R$100 + 5% do valor do carro.

Crie uma função que leia o número de carros vendidos por uma pessoa (qtdeCarrosVendidos, um número inteiro) e o valor total de suas vendas do mês (valorTotalVendas, também um número, correspondente ao valor total recebido por todas as vendas efetuadas).

Retorne o salário final do mês do funcionário com base nesses valores.
*/
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    const comissaoFixo = qtdeCarrosVendidos * 100;
    const comissãoPercentage = (0.05 * valorTotalVendas);
    const totalMonthyEarnings = 2000 + (comissãoPercentage + comissaoFixo);
      
      return totalMonthyEarnings
  }
  const result = calculaSalario(3, 130000);
  console.log(result)