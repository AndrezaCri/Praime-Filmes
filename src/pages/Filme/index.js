
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import './filme-info.css';
import api from '../../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';

import  {  ToastContainer ,  toast  }  from  'react-toastify' ; 
import  'react-toastify/dist/ReactToastify.css' ;

function Filme(){
  const { id } = useParams();
  const navigate = useNavigate();

  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "d4731f525a4f66b129a5e4c237aa579c",
          language: "pt-BR",
        }
      })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("FILME NAO ENCONTRADO");
          navigate("/", { replace: true });
          return;
        });
    }

    loadFilme();


    return () => {
      console.log("COMPONENTE FOI DESMONTADO");
    };
  }, [navigate, id]);


  function salvarFilme() {
    const minhaLista = localStorage.getItem("@primeflix");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id);

    if (hasFilme){
      React-Toastify.toast.warn;("ESSE FILME JÁ ESTA NA LISTA");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
    React-Toastify.toast.success("FILME SALVO COM SUCESSO");

  }

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando detalhes...</h1>
      </div>
    );
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avalição: {filme.vote_average} / 10</strong>

      <div className="area-buttons">
        <button onClick={salvarFilme}>Salvar</button>
        < ToastContainer/> 
        <button>
          <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
            Trailer
          </a>
        </button>
      </div>

    </div>
  );
}

export default Filme;