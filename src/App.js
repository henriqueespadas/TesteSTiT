import React, { Component } from 'react';
import api from './api';
import css from './style.css'
class App extends Component{

  state = {
    membros: [],
  }

  async componentDidMount(){
    const response = await api.get('');
    console.log(response);

    this.setState({ membros: response.data});
  }

  render(){

    const { membros } = this.state;
    return(      
        <div className="principal">
          <div className="superior"></div>
          <div className="titulo" align="center"><h1> Membros do Repositório do Github da AWS</h1></div>

          {membros.map(membro => (          
            <li className="users" key={membro}>              
            <div className="users-menu"> 
              <div className="imagem"> 
                <img src={membro.avatar_url}/>   
              </div>
              <div className="descricao"> 
                <p className="usuario">{membro.login}</p>     
                <p className="nome" >Nome</p>                
                <p className="descricaoemail">teste</p>
                <p className="bio">bio</p>
              </div>    
            </div>           
          </li>          
        ))}
      </div>
    )
  }
}

export default App;
