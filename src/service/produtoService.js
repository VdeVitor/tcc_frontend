import URL from '../service/Api';
import http from 'axios';

  export default function produtoService() {
    http.get('http://localhost:3333/produtos/').then((response) => {
     console.log('resposta api:', response.data);       
    })
  }