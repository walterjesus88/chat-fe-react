import React from 'react';
import  Container  from './styled';
import {  Row, Col } from 'react-grid';
import Input from '../Input';
import  RoomTitle  from './components/room/title';


function Chat({height}) {

  return (
    <Container fluid>
        <Row>
                <RoomTitle sm={12} md={12}>
                   
                </RoomTitle>
                <Col  sm={12} md={12} style={{marginTop:'30px', height: height -'200', overflowY:'scroll', paddingBottom:'30px'}}>
                    <div>[Sebastian]: Hola!</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    <div>[Sebastian]: Prueba</div>
                    
                </Col>
                <Col  sm={12} md={12} >
                    <Row>
                        <Col sm={1}>
                            
                        </Col>
                        <Col sm={10} style={{background:'#242526'}}>
                            <Input />
                        </Col>
                        <Col sm={1}>
                            Enviar
                        </Col>
                    </Row>
              
                </Col>

        </Row>
  </Container>
  );
}

export default Chat;
