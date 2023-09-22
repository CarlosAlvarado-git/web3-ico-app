const fs = require('fs');
const solc = require('solc');

// Lee el contrato Solidity desde el archivo
const contratoSource = fs.readFileSync('CarlosCoin.sol', 'utf8');

// Compila el contrato
const input = {
  language: 'Solidity',
  sources: {
    'CarlosCoin.sol': { 
      content: contratoSource,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['abi'],
      },
    },
  },
};

const contratoCompilado = JSON.parse(solc.compile(JSON.stringify(input)));


if (contratoCompilado.errors) {
  contratoCompilado.errors.forEach((error) => {
    console.error(error.formattedMessage);
  });
  process.exit(1); // Sale con código de error si hay errores de compilación
}

// Obtiene el ABI del contrato
const abi = contratoCompilado.contracts['CarlosCoin.sol']['CarlosCoin'].abi;

// Guarda el ABI en un archivo JSON
fs.writeFileSync('CarlosCoin.json', JSON.stringify(abi, null, 2));

console.log('Contrato compilado y ABI guardado en CarlosCoin.json');
