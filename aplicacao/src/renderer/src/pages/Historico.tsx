import React from 'react'

const Historico: React.FC = () => (
  <div className="min-w-[1050px]">
    <div className="flex justify-between space-x-4 mb-5">
      <div className="w-64 p-4 bg-[#1F1D2B] shadow-lg rounded-md">
        <div className="flex items-center">
          <span className="relative p-2 bg-[#252836] w-8 h-8 rounded-lg m-2">
            <svg
              width="20"
              height="20"
              fill="#9288E0"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
            >
              <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
            </svg>
          </span>
        </div>
        <p className="ml-2 text-white text-2xl">R$ 6000</p>
        <p className="ml-2 text-white text-sm">Valor bruto</p>
      </div>
      <div className=" w-64 p-4 bg-[#1F1D2B] shadow-lg rounded-md">
        <div className="flex items-center">
          <span className="relative flex items-center justify-center p-0 bg-[#252836] w-8 h-8 rounded-lg m-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9857 2C18.0482 2 20 3.43503 20 6.25765V20.3309C20 20.7736 19.8285 21.1982 19.5232 21.5112C19.2179 21.8242 18.8038 22 18.3608 22C18.0965 21.9957 17.8368 21.9291 17.5863 21.7971L11.974 18.6635L6.38442 21.8037C5.7112 22.1624 4.89545 21.9969 4.38431 21.3975L4.28627 21.2719L4.19263 21.1174C4.07042 20.8782 4.00448 20.613 4 20.3309V6.43434C4 3.49929 5.90915 2 9.01434 2H14.9857ZM14.9857 3.44775H9.01434C6.61925 3.44775 5.41205 4.39579 5.41205 6.43434L5.41195 20.3189C5.41267 20.3631 5.42346 20.4065 5.41172 20.3897L5.44919 20.4519C5.51373 20.5421 5.63485 20.5715 5.71962 20.5265L11.3068 17.3883C11.7233 17.1576 12.225 17.1576 12.6435 17.3894L18.2463 20.5173C18.2887 20.5397 18.3355 20.5517 18.372 20.5523C18.4293 20.5523 18.4842 20.529 18.5247 20.4875C18.5652 20.446 18.5879 20.3897 18.5879 20.3309V6.25765C18.5879 4.35788 17.35 3.44775 14.9857 3.44775ZM15.4079 8.31663C15.7978 8.31663 16.1139 8.64072 16.1139 9.0405C16.1139 9.40697 15.8483 9.70984 15.5037 9.75777L15.4079 9.76438H8.54042C8.1505 9.76438 7.8344 9.44029 7.8344 9.0405C7.8344 8.67404 8.10001 8.37117 8.44462 8.32324L8.54042 8.31663H15.4079Z"
                fill="#FFB572"
              />
            </svg>
          </span>
        </div>
        <p className="ml-2 text-white text-2xl">20</p>
        <p className="ml-2 text-white text-sm">Total de pendentes</p>
      </div>
      <div className="w-64 p-4 bg-[#1F1D2B] shadow-lg rounded-md">
        <div className="flex items-center">
          <span className="relative flex items-center justify-center p-1 bg-[#252836] w-8 h-8 rounded-md m-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.59149 14.4563L9.91127 14.4576C14.5557 14.4981 17.1835 15.4361 17.1835 17.9983C17.1835 20.5061 14.665 21.4736 10.2236 21.5546L9.59149 21.5603C4.74715 21.5603 2.00049 20.6394 2.00049 18.0183C2.00049 15.3937 4.75808 14.4563 9.59149 14.4563ZM9.59149 15.9563C5.57414 15.9563 3.50049 16.6612 3.50049 18.0183C3.50049 19.3667 5.56916 20.0603 9.59149 20.0603C13.6091 20.0603 15.6835 19.3552 15.6835 17.9983C15.6835 16.6505 13.6129 15.9563 9.59149 15.9563ZM17.5872 13.7481C18.1677 13.7876 18.7449 13.8708 19.2996 13.9938C20.4877 14.2301 21.371 14.6713 21.7757 15.5204C22.0745 16.1491 22.0745 16.8806 21.7757 17.5092C21.3733 18.3563 20.4992 18.7942 19.3044 19.04C18.8987 19.1234 18.5021 18.8622 18.4187 18.4565C18.3352 18.0507 18.5965 17.6542 19.0022 17.5707C19.771 17.4126 20.2827 17.1562 20.4209 16.8654C20.5261 16.6441 20.5261 16.3856 20.4213 16.165C20.2822 15.8732 19.7678 15.6163 18.9912 15.4616C18.4938 15.3515 17.991 15.279 17.4854 15.2446C17.0721 15.2165 16.7599 14.8587 16.788 14.4455C16.8161 14.0322 17.1739 13.72 17.5872 13.7481ZM9.59149 2.49976C12.4395 2.49976 14.7265 4.78636 14.7265 7.63376C14.7265 10.482 12.4397 12.7688 9.59149 12.7688C6.74341 12.7688 4.45749 10.4821 4.45749 7.63376C4.45749 4.78622 6.74359 2.49976 9.59149 2.49976ZM16.0202 3.56936C18.2551 3.56936 20.0672 5.38183 20.0672 7.61636C20.0672 9.85157 18.2554 11.6634 16.0202 11.6634C15.606 11.6634 15.2702 11.3276 15.2702 10.9134C15.2702 10.4991 15.606 10.1634 16.0202 10.1634C17.427 10.1634 18.5672 9.02314 18.5672 7.61636C18.5672 6.21019 17.4266 5.06936 16.0202 5.06936C15.606 5.06936 15.2702 4.73357 15.2702 4.31936C15.2702 3.90514 15.606 3.56936 16.0202 3.56936ZM9.59149 3.99976C7.57207 3.99976 5.95749 5.6146 5.95749 7.63376C5.95749 9.65379 7.57195 11.2688 9.59149 11.2688C11.6113 11.2688 13.2265 9.65354 13.2265 7.63376C13.2265 5.61484 11.6111 3.99976 9.59149 3.99976Z"
                fill="#50D1AA"
              />
            </svg>
          </span>
        </div>
        <p className="ml-2 text-white text-2xl">234</p>
        <p className="ml-2 text-white text-sm">Total pagos</p>
      </div>
    </div>
    <div className="min-h-[350px] min-w-[150px] p-5 bg-[#1F1D2B] shadow-lg rounded-md">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between mb-4">
        {/* Título alinhado à esquerda */}
        <h2 className="text-xl font-bold text-white ml-16">Histórico</h2>

        {/* Filtro de seleção alinhado à direita */}
        <div className="flex items-center gap-2 bg-[#252836] px-3 py-2 rounded-md w-48">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1976 12.227C16.927 12.227 18.3329 13.6148 18.3329 15.3218C18.3329 17.028 16.927 18.4166 15.1976 18.4166C13.4683 18.4166 12.0624 17.028 12.0624 15.3218C12.0624 13.6148 13.4683 12.227 15.1976 12.227ZM15.1976 13.6786C14.279 13.6786 13.533 14.4151 13.533 15.3218C13.533 16.2276 14.279 16.9651 15.1976 16.9651C16.1162 16.9651 16.8623 16.2276 16.8623 15.3218C16.8623 14.4151 16.1162 13.6786 15.1976 13.6786ZM8.4308 14.5958C8.83667 14.5958 9.16608 14.9209 9.16608 15.3216C9.16608 15.7222 8.83667 16.0474 8.4308 16.0474H2.40247C1.9966 16.0474 1.66719 15.7222 1.66719 15.3216C1.66719 14.9209 1.9966 14.5958 2.40247 14.5958H8.4308ZM4.80174 2.58331C6.53112 2.58331 7.93698 3.97201 7.93698 5.67812C7.93698 7.38423 6.53112 8.77292 4.80174 8.77292C3.07334 8.77292 1.6665 7.38423 1.6665 5.67812C1.6665 3.97201 3.07334 2.58331 4.80174 2.58331ZM4.80174 4.03491C3.88411 4.03491 3.13707 4.77232 3.13707 5.67812C3.13707 6.58391 3.88411 7.32132 4.80174 7.32132C5.72035 7.32132 6.46642 6.58391 6.46642 5.67812C6.46642 4.77232 5.72035 4.03491 4.80174 4.03491ZM17.5979 4.95251C18.0038 4.95251 18.3332 5.27767 18.3332 5.67831C18.3332 6.07895 18.0038 6.40411 17.5979 6.40411H11.5686C11.1627 6.40411 10.8333 6.07895 10.8333 5.67831C10.8333 5.27767 11.1627 4.95251 11.5686 4.95251H17.5979Z"
              fill="black"
            />
          </svg>

          {/* Caixa de seleção */}
          <select
            className="bg-[#252836] text-white outline-none w-full px-2 py-1 rounded-md"
            onChange={(e) => console.log(e.target.value)}
          >
            <option className="bg-[#252836] text-white" value="Hoje">Hoje</option>
            <option className="bg-[#252836] text-white" value="Semana">Semana</option>
            <option className="bg-[#252836] text-white" value="Mês">Mês</option>
            <option className="bg-[#252836] text-white" value="Ano">Ano</option>
            <option className="bg-[#252836] text-white" value="Todos">Todos</option>
          </select>
        </div>
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto">
        <table className="w-full text-center text-sm text-white">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="pb-2 font-bold">Nº Pedido</th>
              <th className="pb-2 font-bold">Cliente</th>
              <th className="pb-2 font-bold">Data</th>
              <th className="pb-2 font-bold">Valor</th>
              <th className="pb-2 font-bold">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">#01</td>
              <td className="py-2">João</td>
              <td className="py-2">28/01/2025</td>
              <td className="py-2">R$ 150,00</td>
              <td className="py-2">Pago</td>
            </tr>
            <tr>
              <td className="py-2">#02</td>
              <td className="py-2">Mari</td>
              <td className="py-2">27/01/2025</td>
              <td className="py-2">R$ 300,00</td>
              <td className="py-2">Pendente</td>
            </tr>
            <tr>
              <td className="py-2">#03</td>
              <td className="py-2">Pedro</td>
              <td className="py-2">23/01/2025</td>
              <td className="py-2">R$ 70,00</td>
              <td className="py-2">Pago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

export default Historico
