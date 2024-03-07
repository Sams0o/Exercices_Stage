// ne pas toucher
const asyncJob = (n) =>
  Math.random() > 0.5 ? Promise.resolve(n + 1) : Promise.reject(Error("boom"));

// a transformer
async function taskChaining() {
    let zero = await asyncJob(0)
    let i = await asyncJob(i)
    let iTab = await Promise.all([asyncJob(i), asyncJob(i), asyncJob(i)])

    let addXYZ = await asyncJob(x + y + z)
}

taskChaining()
  .then((total) => console.log(total))
  .catch((err) => console.error(`gestion erreur globale: ${err.message}`));

  
  
