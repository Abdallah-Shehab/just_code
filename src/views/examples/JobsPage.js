import React from "react";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import {
  
  
  Card,
  CardTitle,
  CardBody,
  CardText,
  Input,
  Progress,
  

} from "reactstrap";
// import "assets/css/filter-container.css";

function jobsPage() {
  return (
    <>
      <ExamplesNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")",
        }}
      >

                <div className="main-container">

                        <div className="filter-container">
                            <form>
                                <h3>Filter</h3>
                                <Input className="mb-3" type="select">
                                <option>Default Select</option>
                                </Input>
                                <Input className="mb-3" type="select">
                                <option>Default Select</option>
                                </Input>
                                <Input className="mb-3" type="select">
                                <option>Default Select</option>
                                </Input>
                                <Progress value={54} />
                            </form>
                        </div>
                        <div className="cards-container">
                      
                  
                                
                        <Card className="card">
                          
                            <div id="card">
                                <CardBody>
                                <CardTitle tag="h5">
                                    Card Title
                                </CardTitle>
                                <CardText>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </CardText>
                                <CardText>
                                    <small className="text-muted">
                                    Last updated 3 mins ago
                                    </small>
                                </CardText>
                                </CardBody>
                            </div>
                            
                            <div id="logo">
                                <img src="https://picsum.photos/300/200" alt="logo" />
                            </div>
                        </Card>
                            <Card className="card">
                                    
                                        <div id="card">
                                            <CardBody>
                                            <CardTitle tag="h5">
                                                Card Title
                                            </CardTitle>
                                            <CardText>
                                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                            </CardText>
                                            <CardText>
                                                <small className="text-muted">
                                                Last updated 3 mins ago
                                                </small>
                                            </CardText>
                                            </CardBody>
                                        </div>
                                        
                                        <div id="logo">
                                            <img src="https://picsum.photos/300/200" alt="logo" />
                                        </div>
                                    </Card>

                        </div>
                      </div>



        </div>
        
      
      

    
    </>
  );
}

export default jobsPage;
