# web-moderno
Curso de Web Moderno da Udemy 

## Dependências

    $npm i lodash //biblioteca com utilitários

    $npm i -g nodemon // biblioteca para subir servidor e manter versão do sistema atualizada

    $npm i --save axios // comando para realizar download da biblioteca e já deixar configurado no package.json a dependência

    $npm i --save-dev axios@0.17.1 -E // o comando tem algumas opções que indicam:
    //--save-dev a dependência só será instalada caso o ambiente seja de desenvolvimento
    //@0.17.1 versão da dependência que deve ser instalada
    // -E modelo de atualização

Após a inserção no campo de denpendência, então é possível realizar o controle das atualizações permitidas nas dependências: ^ permite atualização de minor e ~ permite apenas atualização de fixes, caso não tenha símbolo nenhum a versão a ser pega é apenas a equivalente a descrita no campo.
