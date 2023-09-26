export function Community() {
  return (
    <section className="bg-yellow-500 flex justify-center py-24 mt-24">
      <div className="text-center lg:w-1/2 p-8 space-y-8 text-white">
        <h1 className="uppercase text-5xl font-black">
          Se Junte a nossa comunidade para receber promoções mensais
        </h1>
        <p className="text-lg">
          Escreva seu email no campo abaixo para se manter descolado
        </p>

        <div className="flex flex-wrap gap-2 justify-center">
          <input
            type="text"
            placeholder="Insira se email"
            className="py-4 px-8 rounded-lg text-slate-800"
          />
          <button className="text-slate-50 text-base font-semibold bg-slate-950 p-4 px-10 rounded-lg">
            Enviar
          </button>
        </div>
      </div>
    </section>
  )
}
