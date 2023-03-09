function Learn() {
  return (
    <>
      <div class="min-h-screen bg-gradient-to-br from-emerald-400 to-amber-500 p-10">
        <div class="min-h-screen rounded-2xl bg-gradient-to-br from-emerald-300 to-yellow-200 p-10 shadow-2xl shadow-zinc-800">
          <div class="rounded-3xl bg-slate-100 p-4">
            <h1 class="mx-auto mb-5 w-3/12 p-1 font-semibold uppercase rounded-md bg-gradient-to-r from-amber-400 to-emerald-500 box-decoration-slice px-2 text-center text-black ">
              Generador de CURP
            </h1>
            <form action="" method="post">
              <input
                type="text"
                class="w-full rounded-lg bg-slate-200 p-1"
                placeholder="nombre"
              />
              <br />
              <br />
              <input
                type="text"
                placeholder="Apellido Paterno"
                class="rounded-lg bg-slate-200 p-1 max-w-fit"
              />
              <input
                type="text"
                placeholder="Apellido Materno"
                class="rounded-lg bg-slate-200 p-1"
              />
              <br />
              <br />
              <input
                type="date"
                placeholder="date"
                class="w-2/5 rounded-lg bg-slate-200 p-1"
              />
              <button
                type="submit"
                class="rounded-2xl bg-emerald-300 px-5 hover:bg-emerald-500"
              >
                Enviar
              </button>
            </form>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Learn;

//alternativa usando columns
/*
<div class="to flex min-h-screen flex-col overflow-hidden bg-green-300 bg-gradient-to-r from-sky-200 p-5">
  <div class="to h-screen rounded-xl bg-sky-400/70 bg-gradient-to-r from-green-400/90 p-5 shadow-2xl shadow-black">
    <div class="columns-4 p-5">
      <div class=""><button class="rounded-2xl bg-sky-500 p-2 hover:bg-sky-700">Save changes</button></div>
      <div class=""><button class="rounded-2xl bg-sky-500 p-2 hover:bg-sky-700">Save changes</button></div>
      <div class=""><button class="rounded-2xl bg-sky-500 p-2 hover:bg-sky-700">Save changes</button></div>
      

      
    </div>
    <div class="p-5">
      <button class="flex-auto rounded-xl bg-sky-500 hover:bg-sky-700">Mira este trucaso</button>
    </div>
  </div>
</div>*/
