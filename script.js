function handleGenerateInvoice() {
  const saleValue = parseFloat(document.getElementById("sale-value").value);
  const itens = document.getElementById("itens").value;
  const irpf = parseFloat(document.getElementById("irpf").value) / 100;
  const pis = parseFloat(document.getElementById("pis").value) / 100;
  const cofins = parseFloat(document.getElementById("cofins").value) / 100;
  const inss = parseFloat(document.getElementById("inss").value) / 100;
  const issqn = parseFloat(document.getElementById("issqn").value) / 100;

  const IRPFValue = saleValue * irpf;
  const PISValue = saleValue * pis;
  const COFINSValue = saleValue * cofins;
  const INSSValue = saleValue * inss;
  const ISSQNValue = saleValue * issqn;

  const totalTaxes = IRPFValue + PISValue + COFINSValue + INSSValue + ISSQNValue;
  const totalValue = saleValue + totalTaxes;

  if (saleValue === "" || itens === "" || irpf === "" || pis === "" || cofins === "" || inss === "" || issqn === "") {
    alert("Por favor, preencha todos os campos");
    return;
  } else {
    alert(`Valor da nota fiscal é de R$ ${totalValue.toFixed(2)}`);
  }



}
