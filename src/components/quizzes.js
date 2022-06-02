import React from 'react';
import { Link } from 'react-router-dom';
class Quizzes extends React.Component {
  render() {
  	return (
        <section className="section pt-5" id="quizzes">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">Our Quizzes</h1>
                        <div className="section-title-border margin-t-20"></div>
                        <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">There is a quiz for every continent!</p>
                    </div>
                </div>
                    <div className="row margin-t-30">
                    <div className="col-lg-4 margin-t-20">
                    <Link to="/africa"><div className="services-box text-center hover-effect">
                            <i className="pe-7s-notebook text-custom"></i>
                            <h4 className="padding-t-15">Africa</h4>           
                            </div></Link>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                    <Link to="/americas"><div className="services-box text-center hover-effect">
                            <i className="pe-7s-video text-custom"></i>
                            <h4 className="padding-t-15">Americas</h4>     
                            </div></Link>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                    <Link to="/asia"><div className="services-box text-center hover-effect">
                            <i className="pe-7s-music text-custom"></i>
                            <h4 className="padding-t-15">Asia</h4>
                            </div></Link>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                    <Link to="/europe"><div className="services-box text-center hover-effect">
                            <i className="pe-7s-smile text-custom"></i>
                            <h4 className="padding-t-15">Europe</h4>                         
                            </div></Link>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                    <Link to="/oceania"><div className="services-box text-center hover-effect">
                            <i className="pe-7s-video text-custom"></i>
                            <h4 className="padding-t-15">Oceania</h4>        
                            </div></Link>
                    </div>
                    
                </div>
            </div>
        </section>
  	) ;
  }
}
export default Quizzes;