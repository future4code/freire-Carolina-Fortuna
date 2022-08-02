import axios from "axios";

export const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carolina";
export const header = {
    headers: {
        'Content-Type': "application/json"
    }
}

// export const getAllJobs = () => {
//     axios.get(`${url}/jobs`, auth)
//     .then((res) => {
//         return res.data.jobs
        
//     })
//     .catch((err) => {
//         alert('Erro ao carregar os serviços')
//     })
// }

export const deuLike = (id) => {
    const body = {
        id: id,
        choice: true
    }
    axios
    .post(`${url}/choose-person`, body, header)
    .then(() => {
        alert("Deu Like")
    })
    .catch((error) => {

        alert(error.message)
    })
}

export const deuDisLike = (id) => {
    const body = {
        id: id,
        choice: false
    }
    axios
    .post(`${url}/choose-person`, body, header)
    .then(() => {
        alert("Não Deu Like")
    })
    .catch((error) => {

        alert(error.message)
    })
}

export async function deuDisLike(id){
    const body = {
        taken: true
    }
    try {
        await axios
        .post(`${url}/jobs/${id}`, body, auth)
        alert('Serviço adicionado ao carrinho!')
    } catch (error) {
        alert('Erro')
    }
}

export async function removeFromCart(id) {
    const body = {
      taken: false
    };
    try {
      await axios.post(`${url}/jobs/${id}`, body, auth);
    } catch {
      alert("Erro ao remover serviço ao carrinho");
    }
  }

export async function getMatches(){
    try {
        const response = await axios
        .get(`${url}/matches`)
        return response.data.matches
    } catch (error) {
        alert(error.message)
    }
}

export async function addToCart(id){
    const body = {
        taken: true
    }
    try {
        await axios
        .post(`${url}/jobs/${id}`, body, auth)
        alert('Serviço adicionado ao carrinho!')
    } catch (error) {
        alert('Erro')
    }
}

export async function removeFromCart(id) {
    const body = {
      taken: false
    };
    try {
      await axios.post(`${url}/jobs/${id}`, body, auth);
    } catch {
      alert("Erro ao remover serviço ao carrinho");
    }
  }

// export const removeFromCart = (id) => {
//     const body = {
//         taken: false
//     }
//     axios.post(`${url}/jobs/${id}`, body, auth)
//     .then(() => {        
//         alert(`Removido com sucesso`) 
//     })
//     .catch(() => {
//         alert('Erro ao remover serviço ao carrinho')
//     })
// }