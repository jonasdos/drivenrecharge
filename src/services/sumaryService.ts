import { sumaryRepository } from "../respositories/sumaryRepositories";
import { sumaryData, sumaryTable, sumaryTables } from "../Protocols/types";


export async function sumaryService(cpf: string) {
    const queryData = await sumaryRepository(cpf)
  
    if(queryData.rowCount == 0) {return [
        {
            document: cpf,
            phones: [
                {
                    carrier: {
                    },
                    recharges: [
                        { 
                        },
                    ]
                },
            ]	
        }
    ]}
    const resultado = transformData(queryData.rows)
    return resultado


}

function transformData(data: any[]): sumaryData {
    const result: sumaryData = {
      document: data[0].cpf, // Assume que todos os objetos têm o mesmo CPF
      phones: [],
    };
  
    // Usamos um mapa para agrupar dados por número de telefone
    const phoneMap = new Map<string, {
      number: string;
      description: string;
      carrier: { nome: string; code: number };
      recharges: { data: Date; value: number }[];
    }>();
  
    data.forEach(item => {
      const phoneKey = item.number;
  
      if (!phoneMap.has(phoneKey)) {
        // Adiciona uma nova entrada no mapa para o telefone
        phoneMap.set(phoneKey, {
          number: item.number,
          description: item.description,
          carrier: {
            nome: item.name,
            code: item.code,
          },
          recharges: [],
        });
      }
  
      // Adiciona a recarga correspondente ao telefone
      phoneMap.get(phoneKey)!.recharges.push({
        data: item.recharge_date,
        value: item.recharge_value,
      });
    });
  
    // Converte o mapa em um array para o resultado final
    result.phones = Array.from(phoneMap.values());
  
    return result;
  }