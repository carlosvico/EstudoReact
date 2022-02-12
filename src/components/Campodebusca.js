import React from 'react';

// classe campo de busca que será mostrada dentro do componente React
class CampoDeBusca extends React.Component{

    // inicializando objeto "state" para armazenar os valores da propriedade "entry" do componente.
    state = {entry: 'god'}
    // esse metodo é chamado sempre que ouver uma alteração no input 
pegaAlteracaoNoElemento(event){
    console.log(event.target.value);
}

    render(){
        return(
            <div className='ui segment'>
                {/* ClassName adicionado ao fomulário */}
                <form className='ui form'>
                    <div className='field'>
                        <div className='ui massive icon input'>
                            {/* referência ao metodo */}
                            {/* // <input type="text" placeholder='pesquisa...' onChange={this.pegaAlteracaoNoElemento}/> */}

                            {/* referencia ao objeto evento */}
                            {/* <input type="text" placeholder='pesquisa...' onChange={(event)=>console.log(event.target.value)}/> */}
                            <input type="text" placeholder='pesquisa...'onChange={(event)=>this.setState({entry:event.target.value})}value={this.state.entry}/>
                            
                            <i className='search icon'></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default CampoDeBusca;