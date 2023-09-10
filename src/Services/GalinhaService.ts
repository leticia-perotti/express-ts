import { Request, Response } from "express";


interface Galinha {
  nome: string;
  peso: number;
  viva: boolean;
  tipo: tipoGalinha
}

type tipoGalinha = {
  voa: false;
  tempoVida: number;
};

let galinhas: Galinha[] = [
  {
    nome: "Gericó",
    peso: 10,
    viva: true,
    tipo: {
        voa: false, tempoVida: 10
    }
  }
];

type galinhaDTO = {
    nome: string;
    peso: number;
}

type insereGalinha = {
    nome: string;
    peso: number;
    viva: true;
    tempoVida: number;
}

type detalhesGalinha = {
  nome: string,
  peso: number,
  viva: string
}

export default {

  async verGalinhas(req: Request, res: Response) {
   
    let response : galinhaDTO[] = []

    galinhas.forEach(item => {
        response.push(
            {nome: item.nome, peso: item.peso}
            )
    })

    return res.json(response);
  },

  async insereGalinha(req: Request, res: Response){
    
    let galinha: Galinha  = {
      nome: req.body.nome,
      peso: req.body.peso,
      viva: req.body.viva,
      tipo: {
          voa: false, tempoVida: req.body.tempoVida
      }
    }

    galinhas.push(galinha)

    return res.json({
      "resposta": "Deu boa ao inserir a galinha"
    });

  },
  
  async mataGalinha(req: Request, res: Response){
   
    let galinhaCoitada = galinhas.filter(it => it.nome == req.params.nome)[0]
    if (galinhaCoitada != null){
      galinhas.filter(it => it.nome == req.params.nome)[0].viva = false 
    }

    return res.json({
      "resposta": "Feito"
    });

  },

  async verGalinhasVivas(req: Request, res: Response){
    let response : detalhesGalinha[] = []

    galinhas.forEach(item => {
        response.push(
            {nome: item.nome, 
              peso: item.peso,
              viva: item.viva ? "Viva" : "Morta"
            }
            )
    })

    return res.json(response);
  }
  
};
