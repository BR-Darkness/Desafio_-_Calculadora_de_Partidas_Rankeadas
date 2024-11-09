export function AboutSection() {
    return (
        <section className="flex flex-col gap-6">
            <h2 className="text-textColor text-4xl">Sobre o Desafio:</h2>

            <p><b>Instruções para entrega do desafio</b></p>
            
            <h3 className="font-semibold text-lg">📝│ O Que deve ser utilizado :</h3>

            <ul className="bg-borderColor/50 p-4 rounded-md">
                <li>• - Variáveis</li>
                <li>• - Operadores</li>
                <li>• - Laços de repetição</li>
                <li>• - Estruturas de decisões</li>
                <li>• - Funções</li>
            </ul>

            <h3 className="font-semibold text-lg">🎯│ Objetivo :</h3>

            <p>Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)</p>

            <table className="border-collapse border border-borderColor">
                <caption className="caption-bottom m-4 italic">Tabela: Condições e resultados</caption>
                <thead className="h-10">
                    <tr className="bg-borderColor/50">
                        <th className="text-left border px-4 border-borderColor">❓ Condição</th>
                        <th className="text-left border px-4 border-borderColor">🏆 Resultado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="h-10">
                        <td className="border px-4 border-borderColor">Se vitórias for menor do que 10</td>
                        <td className="border px-4 border-borderColor">Ferro</td>
                    </tr>
                    <tr className="h-10">
                        <td className="border px-4 border-borderColor">Se vitórias for entre 11 e 20</td>
                        <td className="border px-4 border-borderColor">Bronze</td>
                    </tr>
                    <tr className="h-10">
                        <td className="border px-4 border-borderColor">Se vitórias for entre 21 e 50</td>
                        <td className="border px-4 border-borderColor">Prata</td>
                    </tr>
                    <tr className="h-10">
                        <td className="border px-4 border-borderColor">Se vitórias for entre 51 e 80</td>
                        <td className="border px-4 border-borderColor">Ouro</td>
                    </tr>
                    <tr className="h-10">
                        <td className="border px-4 border-borderColor">Se vitórias for entre 81 e 90</td>
                        <td className="border px-4 border-borderColor">Diamante</td>
                    </tr>
                    <tr className="h-10">
                        <td className="border px-4 border-borderColor">Se vitórias for entre 91 e 100</td>
                        <td className="border px-4 border-borderColor">Lendário</td>
                    </tr>
                    <tr className="h-10">
                        <td className="border px-4 border-borderColor">Se vitórias for maior ou igual a 101</td>
                        <td className="border px-4 border-borderColor">Imortal</td>
                    </tr>
                </tbody>
            </table>

            <h3 className="font-semibold text-lg">💻│ Saída :</h3>

            <p>Ao final deve se exibir uma mensagem:</p>

            <p className="bg-borderColor/50 p-4 rounded-md">" O Herói tem saldo de **saldoVitorias** vitória(s) e está no nível **nivel** "</p>
        </section>
    )
}