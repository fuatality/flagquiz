import React from 'react';
import Quizzes from './quizzes';
import  Aux  from  '../hoc/ReactAux' ;
import  Navbar  from  './navbar' ;

class Home extends React.Component {
  render() {


  	return (
         <Aux>
                {/* Navbar Component*/}
                <Navbar />

                <section className="section bg-home home-half" id="home" data-image-src="images/26.jpg">
                    <div className="bg-overlay"></div>
                    <div className="display-table">
                        <div className="display-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 text-white text-center">
                                         
                                        <p className="padding-t-15 home-desc">Enjoy some geography!</p>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
               </section>

                {/* Quizzes Component*/}
                <Quizzes />
                
        </Aux>
  	);
  }
}

export default Home;